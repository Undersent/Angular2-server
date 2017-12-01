import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Channel } from '../models/channel.model';
import { ChatService } from '../services/chat.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {ProfileService} from '../profile/services/profile.service';

@Component({
  selector: 'my-chat',
  styles: [`
    .left {
      width: 20%;
      float: left;
      background: #2b78e4;
      height: 100vh;
      color: #c5d5df;
    }

    .right {
      width: 80%;
      float: right;
    }
  `],
  template: `
    <div class="left">
      <my-channel-header
        [name]="profileService.currentUser.name"
        (goProfile)="onGoProfile()">
      </my-channel-header>
      <hr>
      <my-channel-list
        [channels]="chatService.channels"
        [channelId]="chatService.channel?._id"
        (selectChannel)="onSelectChannel($event)">
      </my-channel-list>
    </div>
    <div class="right">
      <my-chat-area-dialog
        [messages]="chatService.messages">
      </my-chat-area-dialog>
      <my-chat-area-bottom
        [channelId]="chatService.channel?._id"
        (sendMessage)="onSendMessage($event)">
      </my-chat-area-bottom>
    </div>
  `,
})
export class ChatComponent implements OnInit, OnDestroy {
  subsParams: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public chatService: ChatService,
    public profileService: ProfileService
  ) {}

  ngOnInit() {
    this.chatService.getChannels();

    this.subsParams = this.route.params.subscribe(params => {
      const channelName = params['name'];
      this.chatService.getMessages(channelName);
    });
  }

  ngOnDestroy() {
    this.subsParams.unsubscribe();
  }

  onSelectChannel(channel: Channel) {
    this.chatService.selectChannel(channel);
    this.router.navigate(['/channel', channel.name]);
  }

  onSendMessage({ channelId, messageContent }) {
    this.chatService.sendMessage(channelId, messageContent);
  }

  onGoProfile() {
    this.router.navigate(['/profile']);
  }
}
