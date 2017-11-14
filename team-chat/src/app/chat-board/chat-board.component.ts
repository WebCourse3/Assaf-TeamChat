import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import io from 'socket.io-client';
import  eio from 'engine.io';

const chatUrl: string = 'http://10.103.50.36:3000';



@Component({
  selector: 'app-chat-board',
  templateUrl: './chat-board.component.html',
  styleUrls: ['./chat-board.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChatBoardComponent implements OnInit {
  constructor() {
    io.connect(chatUrl);
  }

  ngOnInit() {
   /* var socket = new eio.Socket('ws://localhost/'); //'ws://localhost/'
    socket.on('open', function(){
      socket.on('message', function(data){});

    });*/
  }

}
