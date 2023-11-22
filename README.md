import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const base_url: string = 'https://gateway.staging.snipeads.com';
let headers: any = {};

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  constructor(private http: HttpClient) {
    this.initHeader();
  }

  // init header
  initHeader() {
    const accessToken = localStorage.getItem('AccessToken');

    headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  }

  // get screen list
  public getScreenList(): any {
    return this.http.get(`${base_url}/screen?take=100&skip=0&$extends=billboard,ratecard`, { headers: headers });
  }

  // get single screen
  public getSingleScreen(id: string): any {
    return this.http.get(`${base_url}/screen/${id}?expands=billboard,ratecard`, { headers: headers });
  }

  // create screen
  public createScreen(reqObj: any): any {
    return this.http.post(`${base_url}/screen`, reqObj, { headers: headers });
  }

  // update screen
  public updateScreen(reqObj: any, id: string): any {
    return this.http.put(`${base_url}/screen/${id}`, reqObj, { headers: headers });
  }

  // delete screen
  public deleteScreen(id: string): any {
    return this.http.delete(`${base_url}/screen/${id}`, { headers: headers });
  }

  // screen availablity
  public checkScreenAvailability(query: string): any {
    return this.http.get(`${base_url}/screen/availability/inventory${query}`, { headers: headers })
  }
}
