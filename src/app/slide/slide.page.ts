import { Router } from '@angular/router';
import { Component, OnInit, ViewChild,  } from '@angular/core';



@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
  
})
export class SlidePage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 500,
    autoplay:true
  };
  constructor(private router: Router) { 
   
  }
  gotoHome(){
    this.router.navigate(['home']);
  }

  ngOnInit() {
  }
  

}
