/**
 * Radix Accounting System
 * @author Jasim
 * @company Palmtrix Solutions, Cochin
 *
 * Copyright (C) 2015-2016 Palmtrix Solutions <info@palmtrix.com>
 *
 * Radix can not be copied and/or distributed without the express
 * permission of Palmtrix Solutions, Cochin.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Isotope from 'imports?$=jquery!isotope-layout/dist/isotope.pkgd';
import Packery from 'imports?$=jquery!packery/dist/packery.pkgd';
import Draggabilly from 'imports?$=jquery!draggabilly/dist/draggabilly.pkgd';
import KendoWindow from 'imports?$=jquery!kendo-ui-core/src/kendo.window';

import { Tile } from './tile';

/**
 * @class TileView
 * @extends React.Component
 */
 export class TileView extends React.Component {

    /**
     * @constructor
     */
    constructor() {
        super();

        /**
         * @state
         */
        this.state = {};
    }

    /**
     * @componentDidMount
     * @lifecycle
     */
    componentDidMount() {
        console.log(jQuery)
        var iso = new Packery( '#abcs', {
            columnWidth: 30,
  rowHeight: 30
        });

        let nodes = this.refs.container.childNodes;
        for(let i = 0;i < nodes.length; i++) {
            let node =nodes.item(i);
            var draggie = new Draggabilly( node );
            // bind Draggabilly events to Packery
            //new Packery( 'bindDraggabillyEvents', draggie );
            //console.log(iso)
            iso.bindDraggabillyEvents( draggie )
        }

    }

    /**
     * @render
     * @return {HTMLDivElement} container
     */
    render() {
        return (
            <div ref="container" id="abcs" className="tileview">
            <Tile>
                 <div className="tile-inner blue">
                     <i className="tile-icon fa fa-table"  />
                     <div>Purchase Order</div>
                 </div>
            </Tile>
            <Tile>
                 <div className="tile-inner red">
                     <i className="tile-icon fa fa-save"  />
                     <div>Purchase Order</div>
                 </div>
            </Tile>
               <Tile>
                    <div className="tile-inner">
                        <i className="tile-icon fa fa-envelope"  />
                        <div>Purchase Order</div>
                    </div>
               </Tile>
               <Tile>
                    <div className="tile-inner green">
                        <i className="tile-icon fa fa-clock-o"  />
                        <div>Purchase Order</div>
                    </div>
               </Tile>
               <Tile>
                    <div className="tile-inner red">
                        <i className="tile-icon fa fa-check"  />
                        <div>Purchase Order</div>
                    </div>
               </Tile>
               <Tile>
                    <div className="tile-inner blue">
                        <i className="tile-icon fa fa-calendar"  />
                        <div>Purchase Order</div>
                    </div>
               </Tile>
               <Tile>
                    <div className="tile-inner green">
                        <i className="tile-icon fa fa-facebook"  />
                        <div>Purchase Order</div>
                    </div>
               </Tile>
               <Tile>
                    <div className="tile-inner red">
                        <i className="tile-icon fa fa-twitter"  />
                        <div>Purchase Order</div>
                    </div>
               </Tile>
               <Tile>
                    <div className="tile-inner">
                        <i className="tile-icon fa fa-user"  />
                        <div>Purchase Order</div>
                    </div>
               </Tile>
               <Tile>
                    <div className="tile-inner blue">
                        <i className="tile-icon fa fa-th"  />
                        <div>Purchase Order</div>
                    </div>
               </Tile>
           </div>
        );
    }
}
