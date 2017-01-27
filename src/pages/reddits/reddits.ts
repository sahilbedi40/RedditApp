import { Component } from '@angular/core';
import {RedditService} from '../../app/services/reddit.service';
import { NavController } from 'ionic-angular';
import {DetailPage} from '../details/detail';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
 items:any;
 category:any;
 limit:any;
  constructor(public navCtrl: NavController,private redditService:RedditService) {
   this.getDefault();
  }

  ngOnInit()
  {    
    this.getPosts(this.category,this.limit);       
  }

 getDefault()
 {
   
   if(localStorage.getItem("category") != null)
   {
     this.category=localStorage.getItem("category");
   }
   else{
     this.category='sports';
   }

   if(localStorage.getItem("limit") != null)
   {
     this.limit= localStorage.getItem("limit");
   }
   else{
     this.limit=5;
   }
 }

  getPosts(category,limit){    
   this.redditService.getPosts(category,limit).subscribe(response =>{
     this.items=response.data.children;
   })   
  }

  changeCategory()
  {
    this.getPosts(this.category,this.limit);
  }

  viewItem(item){
    this.navCtrl.push(DetailPage,{
      item:item
    });
  }

}
