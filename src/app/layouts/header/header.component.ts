import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isMobile: boolean = false;
  public isChecked:boolean = false;
  public lang: string = '';


  constructor(private translateService: TranslateService) { 
    this.lang = localStorage.getItem('lang') || 'en';
    this.isMobile = false
  }

  ngOnInit(): void {
  }

  public onClickMenu(): void {
    this.isChecked = !this.isChecked
  }

  changeLang(lang: string) {
    const selectedLanguage = lang;
    this.lang = lang;

    localStorage.setItem('lang', selectedLanguage);

    this.translateService.use(selectedLanguage);
  }

}
