import { Component, OnInit } from '@angular/core';
import { RestService } from '../provider/rest.service'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string;
  age: string;
  email: string;
  id: number;
  FB: any;
  public userarray;
  constructor(public navCtrl: NavController, public restService: RestService) {
    this.userarray = this.restService.getUser()
  }

  actionclickpost() {
    this.restService.postUser(this.name, this.age, this.email)
    console.log('Add')

  }

  actionclickdelete() {
    this.restService.deleteUser(this.id)
    console.log('Delete')
  }

 
}





