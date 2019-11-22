import {TestBed, async } from '@angular/core/testing';
import { DevelopersComponent } from './developers.component';
import { HttpModule } from '@angular/http';


describe('Developer tests', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[
                DevelopersComponent
            ],
            imports:[
                HttpModule
            ]
        });
    });

    it('should have the title developers', async(() => {
        let fixture = TestBed.createComponent(DevelopersComponent)
        let app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Developers');
    }))
})