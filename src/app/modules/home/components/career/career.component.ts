import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [TranslateModule, CommonModule, SwiperModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent implements OnInit {

  public perksConfig: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 0,
    navigation: true,
    scrollbar: { draggable: true, },
  }

  constructor(){

  }

  ngOnInit(): void {
  }

  onSwiper(swiper) {
    console.log(swiper);
    swiper.activeIndex = 3
  }
  onSlideChange(swiper) {
    console.log(swiper.activeIndex);
  }

}
