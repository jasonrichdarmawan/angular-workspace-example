import { Component, OnInit } from '@angular/core';
import { environment as localEnvironment } from '../../environments/environment';
import { GetUsersService } from '../domain/usecases/get-users-service/get-users.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  users: string[];

  constructor(
    public getUsers: GetUsersService,
  ) {
    console.log("app1", View1Component.name, localEnvironment);

    this.users = getUsers.call();
  }

  ngOnInit(): void {
  }

}
