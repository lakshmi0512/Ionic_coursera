import { Component, Inject, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Dish } from '../../shared/dish';
import { Comment } from '../../shared/comment';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.page.html',
  styleUrls: ['./dishdetail.page.scss'],
})
export class DishdetailPage {

  dish: Dish;
  errMess: string;
  avgstars: string;
  numcomments: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    @Inject('BaseURL') private BaseURL) {
    this.dish = navParams.get('dish');
    this.numcomments = this.dish.comments.length;
    let total = 0;
    this.dish.comments.forEach(comment => total += comment.rating );
    this.avgstars = (total/this.numcomments).toFixed(2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
  }


}
