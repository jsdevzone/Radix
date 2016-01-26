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
import EventEmitter from 'eventemitter3';
import { TabPanel, Tab } from 'ux/tab/tabPanel';
import { FormToolbar } from 'ux/toolbar/formToolbar'
/**
 * Custom Class Header
 *
 * @class Customer
 * @extends React.Component
 */
 export class Customer extends React.Component {
     /**
      * @constructor
      */
     constructor(args) {
        super(args);

        /**
         * @state
         */
         this.state = {};
     }

     /**
      * @render
      * @return {View} view
      */
     render() {
         return (
             <div>
               <FormToolbar />
                 <div style={{padding: 10}}>
                     <div style={{marginBottom: 6}}>
                         <div style={{ display: 'table-cell', width: 100}}>
                         Customer Id:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                             <input placeholder="#C12563" type="text" style={{ height: 20,marginLeft:5,width:100}}  />
                         </div>
                     </div>
                     <div style={{marginBottom: 6}}>
                         <div style={{ display: 'table-cell', width: 100}}>
                         Name:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                             <input placeholder="#C12563" type="text" style={{ height: 20,marginLeft:5,width:300}}  />
                         </div>
                     </div>
                     <TabPanel style={{border:'solid 1px #D4d4D4', marginTop: 10, height: 300}}>
                         <Tab title="General">
                         </Tab>
                         <Tab title="Details">
                         </Tab>
                         <Tab title="History">
                         </Tab>
                     </TabPanel>
                 </div>
                 </div>
             );
     }
 }
