import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    centeredSlides: true,
    spaceBetween: 16
  };

  constructor() { }

  ngOnInit() {
  }

}
