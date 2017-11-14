import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './authentication/login-form/login-form.component';
import { ChatBoardComponent } from './chat-board/chat-board.component';

const routes: Routes = [
  { path: 'login-form', component: LoginFormComponent },
  { path: 'chat-board', component: ChatBoardComponent}


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
