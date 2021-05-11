import { Component, OnInit, Inject } from '@angular/core';
import {  NavController, NavParams } from '@ionic/angular';
//import { IonicPageModule } from  '@ionic/angular/ionic-angular';
import { Dish } from '../../shared/dish';
import { DishService } from 'src/app/services/dish.service';
import { DishdetailPage } from 'src/app/pages/dishdetail/dishdetail.page';


@Component({
  selector: 'page-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  providers: [NavParams]
})
export class MenuPage implements OnInit {
  dishes: Dish[];
  errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private dishservice: DishService) { }
  
  ngOnInit() {
    this.dishservice.getDishes()
      .subscribe(dishes => this.dishes = dishes,
        errmess => this.errMess = <any>errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  //dishSelected(event, dish) {
    // That's right, we're pushing to ourselves!
    //this.navCtrl.push(DishdetailPage, {
     // dish: dish
    //});
  }

