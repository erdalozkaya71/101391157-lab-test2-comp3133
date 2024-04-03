import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Mission } from "../models/mission";
import { SpacexapiService } from "../network/spacexapi.service";

@Component({
  selector: "app-missionlist",
  templateUrl: "./missionlist.component.html",
  styleUrls: ["./missionlist.component.css"],
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];
  filteredMissions: Mission[] = [];
  yearFilter: string = "";

  constructor(
    private spacexapiService: SpacexapiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSpaceData();
  }

  getSpaceData(): void {
    this.spacexapiService.getAllData().subscribe((resp) => {
      this.missions = resp;
      this.filteredMissions = resp;
    });
  }

  filterMissions(): void {
    this.filteredMissions = this.missions.filter((mission) => {
      return mission.launch_year.includes(this.yearFilter.trim());
    });
  }

  showDetails(flight_number: number): void {
    this.router.navigate(["/missionDetails", flight_number]);
  }
}
