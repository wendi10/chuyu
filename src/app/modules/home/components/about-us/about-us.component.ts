import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { SwiperOptions, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, TranslateModule, SwiperModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  public config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    
  };

  public configReason: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    scrollbar: { draggable: true, },
  }

  onSwiper(swiper) {
    console.log(swiper);
    swiper.activeIndex = 3
  }
  onSlideChange(swiper) {
    console.log(swiper.activeIndex);
  }
}
