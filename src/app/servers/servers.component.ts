import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  /*template: `
  <app-server></app-server>
  `,*/
  templateUrl: './servers.component.html',
  styles: [`
    h3{
      color: hotpink;
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
