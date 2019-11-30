import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { DropdownDirective } from './components/shared/dropdown.directives';

import { GameService } from './services/game.service';
import { GamesComponent } from './components/games/games.component';
import { GameStartComponent } from './components/games/game-start/game-start.component';
import { GameEditComponent } from './components/games/game-edit/game-edit.component';
import { GameDetailComponent } from './components/games/game-detail/game-detail.component';
import { GameListComponent } from './components/games/game-list/game-list.component';
import { GameItemComponent } from './components/games/game-list/game-item/game-item.component';

import { DeveloperService } from './services/developer.service';
import { DeveloperStartComponent } from './components/developers/developer-start/developer-start.component';
import { DeveloperEditComponent } from './components/developers/developer-edit/developer-edit.component';
import { DeveloperDetailComponent } from './components/developers/developer-detail/developer-detail.component';
import { DevelopersComponent } from './components/developers/developers.component';

import { CharacterService } from './services/character.service';
import { CharactersComponent } from './components/characters/characters.component';  

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    HeaderComponent,
    GamesComponent,
    GameStartComponent,
    GameEditComponent,
    GameDetailComponent,
    GameListComponent,
    GameItemComponent,
    DevelopersComponent,
    DeveloperStartComponent,
    DeveloperEditComponent,
    DeveloperDetailComponent,
    CharactersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    GameService,
    DeveloperService,
    CharacterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
