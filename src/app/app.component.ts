import { Component } from '@angular/core';
import { OnDemandPreloadService } from './on-demand-preload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private onDemandPreloadService: OnDemandPreloadService,
  ) {}

  preloadAdminModule() {
    this.onDemandPreloadService.startPreload('admin');
  }
}
