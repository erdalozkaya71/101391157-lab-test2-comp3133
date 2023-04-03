import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission';
import { SpacexapiService } from '../network/spacexapi.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missions : Mission [] = [];
  

  constructor(private spacexapiService:SpacexapiService , private rought : Router){
    this.getSpaceData()
}

  ngOnInit(): void {
  }
  getSpaceData(){
    this.spacexapiService.getAllData().subscribe(resp =>{
      this.missions = resp
      console.log(resp)
    })
  } 
  showDetails(flight_number : number){
    this.rought.navigate(['/missionDetails' , flight_number])
  }

}
