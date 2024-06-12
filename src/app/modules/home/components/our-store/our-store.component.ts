import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-our-store',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './our-store.component.html',
  styleUrl: './our-store.component.scss'
})
export class OurStoreComponent {

}
