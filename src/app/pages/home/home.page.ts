import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Dish } from '../../shared/dish';
import { DishService } from 'src/app/services/dish.service';
import { Promotion } from '../../shared/promotion';
import { PromotionService } from 'src/app/services/promotion.service';
import { Leader } from '../../shared/leader';
import { LeaderService } from 'src/app/services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    dish: Dish;
    promotion: Promotion;
    leader: Leader;
    dishErrMess: string;
    promoErrMess: string;
    leaderErrMess: string;
  
  constructor(public navCtrl: NavController,
    private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish()
       .subscribe(dish => this.dish = dish,
        errmess => this.dishErrMess = <any>errmess );
    this.promotionservice.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion,
        errmess => this.promoErrMess = <any>errmess );
    this.leaderservice.getFeaturedLeader()
      .subscribe(leader => this.leader = leader,
        errmess => this.leaderErrMess = <any>errmess );

  }

}
