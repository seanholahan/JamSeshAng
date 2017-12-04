import * as Interface from 'interface.min.js';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Control }           from '@angular/common';
import { ChatService }       from './chat.service.ts';
//import * as Tone from "https://cdnjs.cloudflare.com/ajax/libs/tone/0.12.10/Tone.min.js";



  console.log('It works here')

  var panel = new Interface.Panel()

  // place your script here; below is for demo only
  var btn1 = new Interface.Button({
  bounds:[.1,.05,.3,.3],
  label:'1',
  mode:'momentary'
})

var btn2 = new Interface.Button({
bounds:[.1,.35,.3,.3],
label:'2',
mode:'momentary'
})

var btn3 = new Interface.Button({
bounds:[.1,.65,.3,.3],
label:'3',
mode:'momentary'
})

 var slide1 = new Interface.Slider({ bounds:[.5,.05,.1,.9], isVertical:true });


  panel.add( btn1, btn2, btn3, slide1 )
  var synth = new Tone.Synth().toMaster();


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatService]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'arp'
  connection;
  message;

  constructor(private chatService:ChatService) {}

    sendMessage(){
  this.chatService.sendMessage(this.message);
  this.message = '';
}

ngOnInit() {
  this.connection = this.chatService.getMessages().subscribe(message => {
    this.messages.push(message);
  })
}

ngOnDestroy() {
  this.connection.unsubscribe();
}






}
