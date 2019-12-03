import { favoriteGame } from './favoritegame.model';

export class storeUser {
    constructor(
        public _id: string,
        public username: string,
        public password: string,
        public token: string,
        public favoriteGames: favoriteGame[]
    ){}
}