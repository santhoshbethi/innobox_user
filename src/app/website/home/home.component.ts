import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as $ from 'jquery';
import appConfig from 'src/app/config/appConfig';
import { ApiService } from 'src/app/services/api.service';
import SwiperCore, {
  A11y,
  Autoplay,
  Controller,
  EffectFlip,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  Virtual,
  Zoom,
} from 'swiper/core';
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  EffectFlip,
  Thumbs,
  Autoplay,
  Controller,
]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  homeForm: FormGroup;
  categories: any;
  catData: any;
  address: any;
  constructor(
    private _fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private api: ApiService
  ) {
    this.homeForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  appConfig: any;
  ngOnInit(): void {
    this.appConfig = appConfig;
    this.getCategory();
    this.getAllCatData();
    this.getAddress();
  }

  getAddress() {
    this.api.getAddress().subscribe((res: any) => {
      this.address = res.message;
    });
  }

  addData() {
    if (this.homeForm.valid) {
      this.api.addHomeContact(this.homeForm.value).subscribe((res: any) => {
        let data = {
          message: res.message,
          action: 'X',
          class: 'green-snackbar',
        };
        this.openSnackbar(data);
        this.homeForm.reset();
      });
    } else {
      let data = {
        message: 'Please Fill required Fields',
        action: 'X',
        class: 'red-snackbar',
      };
      this.openSnackbar(data);
    }
  }
  openSnackbar(data: any) {
    this._snackBar.open(data.message, data.action, {
      duration: 5000,
      panelClass: [data.class],
    });
  }
  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  getAllCatData() {
    let cat_data: any = [];
    this.api.getRecentWorkCatData().subscribe((res: any) => {
      res.message.forEach((element: any, key: any) => {
        cat_data.push({
          ID: element.ID,
          cat_id: element.cat_id,
          title: element.title,
          image: this.appConfig.imageUrl + element.image1,
        });
      });
      this.catData = cat_data;
      console.log(this.catData);
    });
  }
  changeType(type: any, id: any) {
    if ($('.recentfilter-but').hasClass('active')) {
      $('.recentfilter-but').removeClass('active');
    }
    $(`#${type}`).toggleClass('active');
    let cat_data: any = [];
    if (id !== 0) {
      this.api.getRecentWorkCatData().subscribe((res: any) => {
        res.message.forEach((element: any, key: any) => {
          if (element.cat_id === id) {
            cat_data.push({
              ID: element.ID,
              cat_id: element.cat_id,
              title: element.title,
              image: this.appConfig.imageUrl + element.image1,
            });
          }
        });
        this.catData = cat_data;
      });
    } else {
      this.api.getRecentWorkCatData().subscribe((res: any) => {
        res.message.forEach((element: any, key: any) => {
          cat_data.push({
            ID: element.ID,
            cat_id: element.cat_id,
            title: element.title,
            image: this.appConfig.imageUrl + element.image1,
          });
        });
        this.catData = cat_data;
      });
    }
  }
  getCategory() {
    this.api.getRecentWorkCat().subscribe((res: any) => {
      this.categories = res.message;
    });
  }
}