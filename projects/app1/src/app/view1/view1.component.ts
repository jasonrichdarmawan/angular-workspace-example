import { Component, OnInit } from '@angular/core';
import { environment as localEnvironment } from 'projects/app1/src/environments/environment';
import { environment as rootEnvironment } from 'src/environments/environment';
import { GetUsersService } from 'projects/app1/src/app/domain/usecases/get-users-service/get-users.service';

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
    console.log("app1", View1Component.name, localEnvironment, rootEnvironment);

    this.users = getUsers.call();
  }

  ngOnInit(): void {
  }

}
