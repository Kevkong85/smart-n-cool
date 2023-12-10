import { Component } from '@angular/core';
import { IobrokerConnectorService } from './services/iobroker-connector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'smart-n-cool';

  constructor(private _iobrokerConnector: IobrokerConnectorService) {
    this._iobrokerConnector.init().then(
      _ => console.log('init called')
    );
  }
}
