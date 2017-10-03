import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  public messages: FirebaseListObservable<any[]>

  constructor(private angularFireDatabase: AngularFireDatabase) { }

  ngOnInit() {
    this.getDataBase();
  }

  getDataBase() {
    this.messages = this.angularFireDatabase.list('chat_messages');
  }

  createMessage(message) {
    this.messages.push(message);
  }
}
