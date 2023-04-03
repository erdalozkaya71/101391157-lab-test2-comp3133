import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mission } from '../models/mission';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  constructor(private spacexapiService:SpacexapiService , private _route : ActivatedRoute) { }

  mission? : Mission

  ngOnInit(): void {
   this.getData()
  }
   
  getData(){
    const id =  + this._route.snapshot.params['fnumber'];
    this.spacexapiService.getMissionById(id).subscribe(resp =>{
     this.mission = resp
     console.log(this.mission)
     console.log(this.mission.mission_name)

    })
  } 

}
