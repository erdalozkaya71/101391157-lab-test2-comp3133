export interface Mission {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  details?: string;
  links: Links;
  rocket: Rocket;
  launch_site: LaunchSite;
}

export interface Links {
  mission_patch_small: string;
}

export interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}
export interface LaunchSite {
  site_id: string;
  site_name: string;
  site_name_long: string;
}
