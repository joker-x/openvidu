import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'src/environments/environment';

// openvidu-angular

import { CallComponent } from './openvidu-call/call.component';
import { ToolbarTestComponent } from './components/toolbar-test/toolbar-test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatTestComponent } from './components/chat-test/chat-test.component';
import { LayoutTestComponent } from './components/layout-test/layout-test.component';
import { StreamTestComponent } from './components/stream-test/stream-test.component';

import {
	OpenviduAngularModule,
	UserSettingsComponent,
	ChatPanelComponent,
	ToolbarComponent,
	SessionComponent,
	LayoutComponent,
	VideoconferenceComponent
} from 'openvidu-angular';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		CallComponent,
		ToolbarTestComponent,
		ChatTestComponent,
		LayoutTestComponent,
		StreamTestComponent
	],
	imports: [
		BrowserModule,
		MatButtonModule,
		BrowserAnimationsModule,
		OpenviduAngularModule.forRoot(environment),
		AppRoutingModule // Order is important, AppRoutingModule must be the last import for useHash working
	],
	providers: [VideoconferenceComponent, UserSettingsComponent, ToolbarComponent, ChatPanelComponent, SessionComponent, LayoutComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}
