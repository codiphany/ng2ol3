/// <reference path="../../node_modules/@types/openlayers/index.d.ts" />

import {Component} from '@angular/core';
import {Ng2ol3ContainerComponent} from './ng2ol3-container.component';
import {Ng2ol3Config} from '../classes/ng2ol3config';
import {Ng2ol3Map} from '../classes/ng2ol3map';
import {Ng2ol3View} from '../classes/ng2ol3view';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'ng2ol3',
    template: `
      <alert type="info">
        <span><img src="../etc/img/logo/apple-touch-icon-57x57.png"></span>
        <span [innerHTML]="title"></span>
      </alert>
      <ng2ol3-container
        [config]="myConfig">
      </ng2ol3-container>
    `,
    styleUrls: [''],
    directives: [AlertComponent, Ng2ol3ContainerComponent]
})

export class Ng2ol3Component {
    myConfig: Ng2ol3Config = new Ng2ol3Config();
    title: string;
    renderer: string;
    domId: string;
    view: Ng2ol3View;
    layers: any[];

    constructor() {

        // CONFIGURE THE APP, THIS IS ALL YOU HAVE TO DO
        this.title = "This is my first <b>ng2ol3</b> map!";
        this.renderer = 'webgl';
        this.domId = 'map';
        this.view = new Ng2ol3View({
            center: ol.proj.fromLonLat([19.3956393810065, 47.168464955013], "EPSG:900913"),
            zoom: 7
        });
        this.layers = [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ];

        // LET NG2OL3 DO THE JOB FROM HERE...
        this.myConfig.setAppTitle(this.title);
        this.myConfig.setAppMapRenderer(this.renderer);
        this.myConfig.setAppMapDomId(this.domId);
        this.myConfig.setAppView(this.view);
        this.myConfig.setAppLayers(this.layers);

    }

}
