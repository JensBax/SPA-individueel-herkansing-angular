import {TestBed, async } from '@angular/core/testing';
import { CharactersComponent } from './characters.component';
import { HttpModule } from '@angular/http';


describe('Character tests', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[
                CharactersComponent
            ],
            imports:[
                HttpModule
            ]
        });
    });

    it('should have the title characters', async(() => {
        let fixture = TestBed.createComponent(CharactersComponent)
        let app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Characters');
    }))
})