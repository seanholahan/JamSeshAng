import { Component } from '@angular/core';

  console.log('It works here')
    var panel = new Interface.Panel()

    // place your script here; below is for demo only
    var btn = new Interface.Button({ bounds:[0,0,.5,.5], label:'test' })

    panel.add( btn )

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'arp'




}
