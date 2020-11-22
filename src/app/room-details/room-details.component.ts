import { Component, OnInit } from '@angular/core';
import {Room} from '../room';
import {RoomService} from '../room.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  id: number;
  room: Room;

  constructor(private roomService: RoomService, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    this.room = new Room();
  }

  ngOnInit(): void {
    this.roomService.getRoom(this.id).subscribe(
      data => {
        console.log(data);
        this.room = data;
      },
      error => console.log(error)
    );
  }

  list(): void {
    this.router.navigate(['rooms']);
  }
}
