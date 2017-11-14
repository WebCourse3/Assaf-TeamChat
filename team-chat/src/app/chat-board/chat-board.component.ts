import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as io from 'socket.io-client';

const chatUrl: string = 'http://localhost:3000';

@Component({
  selector: 'app-chat-board',
  templateUrl: './chat-board.component.html',
  styleUrls: ['./chat-board.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChatBoardComponent implements OnInit {
  socket: any;

  constructor() {

  }

  ngOnInit() {
    this.socket = io(chatUrl);
    this.socket.on('connect', () => {alert('you are connected')});
    this.socket.on('disconnect', () => {});
  }

}
