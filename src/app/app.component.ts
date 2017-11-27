import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'arp'

console.log('hats  up')
  panel = new Interface.Panel()

      // place your script here; below is for demo only
      btn = new Interface.Button({ bounds:[0,0,1,1], label:'test' })

      panel.add( btn )

}
