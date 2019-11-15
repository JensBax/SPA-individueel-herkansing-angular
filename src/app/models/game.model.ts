import { Developer } from './developer.model';
import { Character } from './character.model';

export class Game {
    
    public _id
    public name: string;
    public description: string;
    public imagePath: string;
    public developers: Developer[];
    public characters: Character[];
      
    constructor(name: string, desc: string, imagePath: string, developers: Developer[], characters: Character[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.developers = developers;
        this.characters = characters;
    }
}    
