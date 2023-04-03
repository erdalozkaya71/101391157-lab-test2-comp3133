import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mission } from '../models/mission';


@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  constructor(private httpClient : HttpClient) { }

  getAllData(){
    return this.httpClient.get<any>("https://api.spacexdata.com/v3/launches")
  }
  getMissionById(mid : number){
    return this.httpClient.get<Mission>(`https://api.spacexdata.com/v3/launches/${mid}`)
  }

}

