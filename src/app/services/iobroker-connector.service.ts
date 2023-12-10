import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Connection } from '@iobroker/socket-client';

export const IOBROKER_HOST = 'muthur';
export const IOBROKER_ADMIN_PORT = '8081';
export const IOBROKER_WS_PORT = '8084';

@Injectable({
  providedIn: 'root'
})
export class IobrokerConnectorService {

  constructor(@Inject(DOCUMENT) private _document: Document) {
    this._addScript();
    
  }

  private _addScript() {
    const scriptElement = this._document.createElement('script');
    scriptElement.src = `http://${IOBROKER_HOST}:${IOBROKER_ADMIN_PORT}/lib/js/socket.io.js`
  }


  public async init() {
    const adminConnection = new Connection({
      protocol: 'ws',
      host: IOBROKER_HOST,
      port: IOBROKER_WS_PORT,
      admin5only: false,
      autoSubscribes: [],
    });
    
    await adminConnection.startSocket();
    await adminConnection.waitForFirstConnection();
    console.log(await adminConnection.getEnums());
    console.log(await adminConnection.getStates());
  }
}
