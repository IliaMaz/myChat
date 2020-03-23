import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RoomService {
  baseUrl = "https://ajax-course.herokuapp.com";
  constructor(private http: HttpClient) {}
  getAllRooms() {
    return this.http.get(this.baseUrl + "/rooms");
  }
  addRoom(name) {
    const data = {
      roomName: name
    };
    return this.http.post(this.baseUrl + "/rooms", data);
  }
}
