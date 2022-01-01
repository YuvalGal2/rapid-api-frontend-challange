import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private requestsErrorObs = new Subject<any>();
  constructor(private _http: HttpClient) { }


  getRequestErrorsObs(): Subject<any> {
    return this.requestsErrorObs;
  }

  /*
  this function will tell the request error obs to transmit
   an error to the frontend (using modal for example)
   */
  emitRequestError(error: {}) {
    this.requestsErrorObs.next(error)
  }

  // this function will manage the outgoing request - this will help reduce the amount of code needed to send requests.
  sendRequest(requestUrl: string , requestType: string= 'get', requestParams?: any): Observable<any>{
    switch (requestType.toLowerCase()) {
      case 'post':
        this.postData(requestUrl,requestParams)
      break;
      case 'get':
      default:
        return this.getData(requestUrl, requestParams);
      break;
    }
    return of ('Error!');
  }

  private getData(requestUrl: string,  requestParams: any = {}): Observable<any> {
    requestParams.apikey = environment.moviesAppAPIKey;
    if (requestParams) {
      requestParams = this.serialize(requestParams);
      requestUrl = `${requestUrl}?${requestParams}`;
    }
    return this._http.get(requestUrl);
  }

  private postData(requestUrl: string,  requestParams: {}): Observable<any> {
    return this._http.post(requestUrl, requestParams);
  }

  // request utility function which help serialize the data for get requests... less code, more generic.
  private serialize(object: any): string {
    let unserializedStringArr = [];
    for (let prop in object)
      if (object.hasOwnProperty(prop)) {
        unserializedStringArr.push(encodeURIComponent(prop) + "=" + encodeURIComponent(object[prop]));
      }
    return unserializedStringArr.join( "&");
  }
}
