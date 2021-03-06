import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import appConfig from '../config/appConfig';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers = environment.headers;
  constructor(private http: HttpClient) {}

  //GET APIs
  

  getMenu() {
    return this.http.get(`${appConfig.apiUrl}home/menu`, {
      headers: this.headers,
    });
  }

  getCareer() {
    return this.http.get(`${appConfig.apiUrl}home/careers`, {
      headers: this.headers,
    });
  }

  getCareerById(id: any) {
    return this.http.post(
      `${appConfig.apiUrl}home/careerbyid`,
      { id: id },
      {
        headers: this.headers,
      }
    );
  }

  addHomeContact(data: any) {
    return this.http.post(`${appConfig.apiUrl1}home/hmpcontactus`, data, {
      headers: this.headers,
    });
  }
  getSubMenu() {
    return this.http.get(`${appConfig.apiUrl}home/homemenu`, {
      headers: this.headers,
    });
  }
  getsocial() {
    return this.http.get(`${appConfig.apiUrl}home/getsocial`, {
      headers: this.headers,
    });
  }
  addContactUs(data: any) {
    return this.http.post(`${appConfig.apiUrl1}cts/sendmsg`, data, {
      headers: this.headers,
    });
  }
  getRecentWorkCat() {
    return this.http.get(`${appConfig.apiUrl}rectwrks/getcat`, {
      headers: this.headers,
    });
  }
  getRecentWorkCatData() {
    return this.http.get(`${appConfig.apiUrl}rectwrks/recentwroks`, {
      headers: this.headers,
    });
  }
  getRecentWorkSingleCatData(id: any) {
    return this.http.post(
      `${appConfig.apiUrl}rectwrks/recentwroksbyid`,
      { id: id },
      {
        headers: this.headers,
      }
    );
  }
  applyNow(data: any) {
    return this.http.post(`${appConfig.apiUrl1}home/applynow`, data, {
      headers: this.headers,
    });
  }
  getTopimg() {
    return this.http.get(`${appConfig.apiUrl1}home/gettopimg`, {
      headers: this.headers,
    });
  }
  getaboutus()
  {
    return this.http.get(`${appConfig.apiUrl1}home/getabtus`, {
      headers: this.headers,
    });
  }
  getWhyus() {
    return this.http.get(`${appConfig.apiUrl}home/getwhyus`, {
      headers: this.headers,
    });
  }
  getstaticdata() {
    return this.http.get(`${appConfig.apiUrl1}home/getstaticdata`, {
      headers: this.headers,
    });
  }
  getemptlk() {
    return this.http.get(`${appConfig.apiUrl}home/getemptlk`, {
      headers: this.headers,
    });
  }
  getAllServices() {
    return this.http.get(`${appConfig.apiUrl}services/getservices`, {
      headers: this.headers,
    });
  }
  getServiceById(id: any) {
    return this.http.post(
      `${appConfig.apiUrl}services/getservicesbyid`,
      { id: id },
      {
        headers: this.headers,
      }
    );
  }
  getAddress() {
    return this.http.get(`${appConfig.apiUrl}cts/getaddress`, {
      headers: this.headers,
    });
  }
  getWhyinb() {
    return this.http.get(`${appConfig.apiUrl}home/getwhyinb`, {
      headers: this.headers,
    });
  }
  getTestimonials()
  {
    return this.http.get(`${appConfig.apiUrl}home/gettestimonials`, {
      headers: this.headers,
    });
  }
  
  getServiceHighlightById(id:any){
    return this.http.post(`${appConfig.apiUrl}services/getserviceshighlights`, id, {
      headers: this.headers,
    });
  }
  getOtherservices(id:any)
  {
    return this.http.post(`${appConfig.apiUrl1}services/getotherservices`, id, {
      headers: this.headers,
    });
  }
}
