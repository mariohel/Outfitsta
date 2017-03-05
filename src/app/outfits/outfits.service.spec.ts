import { TestBed, async, inject } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Http, HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { OutfitsService } from './outfits.service';

describe('OutfitsService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                OutfitsService,
                MockBackend,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        });

    });

    beforeEach(inject([OutfitsService , MockBackend], async(service: OutfitsService, mockBackend: MockBackend) => {
            mockBackend.connections.subscribe((conn: MockConnection) => {
                conn.mockRespond(new Response(new ResponseOptions(
                ` {
                        "title":  "Casablanca Dress",
                        "img":    "assets/outfits/dress1.png",
                        "desc":   "Adrianna Papell Women's Casablanca Sleeveless Red Dress",
                        "price":  49.99,
                        "outfit_type":"dress"
                    }`
                    )));
            });

    }));

    it('should have a service instance', inject([OutfitsService], (service: OutfitsService) => {
      expect(service).toBeTruthy();
      expect(service).toBeDefined();
    }));

    it('should have a service instance', inject([OutfitsService], (service: OutfitsService) => {
       service.getList('dress').subscribe((data) => {
            expect(data[0].title).toBe('Casablanca Dress');
        });
    }));

});
