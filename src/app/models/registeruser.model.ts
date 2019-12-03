import { favoriteGame } from './favoritegame.model';

export class registerUser {
    constructor(
        public username: string,
        public password: string,
        public favoriteGames: favoriteGame[]
    ){}
  }