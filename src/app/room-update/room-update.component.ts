import {Component, OnInit} from '@angular/core';
import {RoomService} from '../room.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Room} from '../room';

@Component({
  selector: 'app-room-update',
  templateUrl: './room-update.component.html',
  styleUrls: ['./room-update.component.css']
})
export class RoomUpdateComponent implements OnInit {

  id: number;
  room: Room;
  submitted: false;

  constructor(private roomService: RoomService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.room = new Room();
    this.id = this.route.snapshot.params.id;

    this.roomService.getRoom(this.id).subscribe(
      data => {
        console.log(data);
        this.room = data;
      },
      error => console.log(error)
    );
  }

  updateRoom(): void {
    this.roomService.updateRoom(this.id, this.room).subscribe(
      data =>  console.log(data),
      error => console.log(error));
    this.room = new Room();
    this.gotoList();
  }

  onSubmit(): void {
    this.updateRoom();
  }

  gotoList(): void {
    this.router.navigate(['/rooms']);
  }

}
