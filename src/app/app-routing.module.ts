import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './components/games/games.component';
import { GameStartComponent } from './components/games/game-start/game-start.component';
import { GameEditComponent } from './components/games/game-edit/game-edit.component';
import { GameDetailComponent } from './components/games/game-detail/game-detail.component';

import { DevelopersComponent } from './components/developers/developers.component';
import { CharactersComponent } from './components/characters/characters.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full'}, 
  { path: 'games', component: GamesComponent, children: [
    { path: '',component: GameStartComponent },
    { path: 'new', component: GameEditComponent },
    { path: ':id', component: GameDetailComponent },
    { path: ':id/edit' , component: GameEditComponent }
  ]},
  { path: 'developers', component: DevelopersComponent, children: [
    { path: '', component: DevelopersComponent}
  ]},
  { path: 'characters', component: CharactersComponent, children: [
    { path: '', component: CharactersComponent}
  ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
