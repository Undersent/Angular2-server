import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ChatComponent} from './chat/chat.component';
import {CalendarPipe} from './shared/pipes/calendar.pipe';
import {ChatService} from './services/chat.service';
import {ChatAreaBottomComponent} from './chat/components/chat-area-bottom.component';
import {ChannelListComponent} from './chat/components/channel-list.component';
import {ChatAreaDialogComponent} from './chat/components/chat-area-dialog.component';
import {routes} from './shared/routes/app.routes';
import {RouterModule} from '@angular/router';
import {ProfileComponent} from './profile/components/profile.component';
import {InfoComponent} from './profile/components/info.component';
import {ChannelHeaderComponent} from './chat/components/channel-header.component';
import {ProfileService} from './profile/services/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    CalendarPipe,
    ChannelListComponent,
    ChatAreaDialogComponent,
    ChatAreaBottomComponent,
    ChannelHeaderComponent,
    InfoComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ChatService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
