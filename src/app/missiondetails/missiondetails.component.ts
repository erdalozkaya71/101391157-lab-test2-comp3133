import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Mission } from "../models/mission";
import { SpacexapiService } from "../network/spacexapi.service";

@Component({
  selector: "app-missiondetails",
  templateUrl: "./missiondetails.component.html",
  styleUrls: ["./missiondetails.component.css"],
})
export class MissiondetailsComponent implements OnInit {
  mission?: Mission;

  constructor(
    private spacexapiService: SpacexapiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadMissionDetails();
  }

  private loadMissionDetails(): void {
    const flightNumber = this.route.snapshot.params["fnumber"];
    if (flightNumber) {
      this.spacexapiService.getMissionById(+flightNumber).subscribe((resp) => {
        this.mission = resp;
        console.log(this.mission);
      });
    }
  }
}
