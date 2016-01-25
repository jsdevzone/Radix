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
 * @class TransactionTileView
 * @extends React.Component
 */
 export class TransactionTileView extends React.Component {

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
        var iso = new Packery( this.refs.container, {
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
            <div ref="container"  className="tileview">
            <Tile>
                  <div className="tile-inner blue">
                     <i className="tile-icon fa fa-cart-arrow-down"  />
                     <div>Purchase Order</div>
                  </div>
            </Tile>
            <Tile>
                 <div className="tile-inner green">
                     <i className="tile-icon fa fa-suitcase"  />
                     <div>Sales Order</div>
                 </div>
            </Tile>
            <Tile>
                 <div className="tile-inner">
                     <i className="tile-icon fa fa-barcode"  />
                     <div>Product Barcode</div>
                 </div>
            </Tile>
               <Tile>
                    <div className="tile-inner red">
                        <i className="tile-icon fa fa-arrow-circle-o-down"  />
                        <div>Inward Material</div>
                    </div>
               </Tile>
               <Tile>
                    <div className="tile-inner green">
                        <i className="tile-icon fa fa-arrow-circle-o-up"  />
                        <div>Outward Material</div>
                    </div>
               </Tile>
               <Tile>
                    <div className="tile-inner black">
                        <i className="tile-icon fa fa-credit-card"  />
                        <div>Payment Voucher</div>
                    </div>
               </Tile>
           </div>
        );
    }
}
