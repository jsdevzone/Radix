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
import { DetailPanel } from 'ux/panel/detailPanel';
import { FormToolbar } from 'ux/toolbar/formToolbar'
/**
 * Custom Class Header
 *
 * @class Quotation
 * @extends React.Component
 */
 export class Quotation extends React.Component {
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
                         Quotation No:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                             <input placeholder="#0001" type="text" style={{ height: 20,marginLeft:5,width:100}}  />
                         </div>
                         <div style={{ display: 'table-cell', width: 100, paddingLeft: 10}}>
                         Enquiry No:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                           <input placeholder="0001" type="text" style={{ height: 20,marginTop: 5,width:125}}  />
                         </div>
                         <div style={{ display: 'table-cell', width: 100, paddingLeft: 10}}>
                         Created On:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                           <input placeholder="dd-mm-yy" type="text" style={{ height: 20,width:125}}  />
                         </div>
                     </div>
                     <div style={{marginBottom: 6}}>
                        <div style={{ display: 'table-cell', width: 105}}>
                        Customer:
                        </div>
                        <div style={{ display: 'table-cell'}}>
                          <input type="text" style={{ height: 20,width:575}}  />
                        </div>
                     </div>
                     <div style={{marginBottom: 6}}>
                         <div style={{ display: 'table-cell', width: 98}}>
                         Contact:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                             <input  type="text" style={{ height: 20,marginLeft:5,width:230}}  />
                         </div>
                         <div style={{ display: 'table-cell', width: 100, paddingLeft: 10}}>
                         Reference:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                           <input  type="text" style={{ height: 20,width:232}}  />
                         </div>
                     </div>
                     <div style={{marginBottom: 6}}>
                         <div style={{ display: 'table-cell', width: 98}}>
                         Executive:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                             <input type="text" style={{ height: 20,marginLeft:5,width:230}}  />
                         </div>
                         <div style={{ display: 'table-cell', width: 100, paddingLeft: 10}}>
                         Project:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                           <input type="text" style={{ height: 20,width:232}}  />
                         </div>
                     </div>
                     <div style={{marginBottom: 6}}>
                         <div style={{ display: 'table-cell', width: 100}}>
                         Lead Time:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                             <input type="text" style={{ height: 20,marginLeft:5,width:100}}  />
                         </div>
                         <div style={{ display: 'table-cell', width: 100, paddingLeft: 10}}>
                         Valid Through:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                           <input placeholder="dd-mm-yy" type="text" style={{ height: 20,width:125}}  />
                         </div>
                         <div style={{ display: 'table-cell', width: 100, paddingLeft: 10}}>
                         Delivery Period:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                           <input type="text" style={{ height: 20,width:125}}  />
                         </div>
                     </div>
                     <DetailPanel>

                     </DetailPanel>
                     <div style={{marginBottom: 6}}>
                         <div style={{ display: 'table-cell', width: 100}}>
                         Transportation:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                             <input type="text" style={{ height: 20,marginLeft:5,width:100}}  />
                         </div>
                         <div style={{ display: 'table-cell', width: 70, paddingLeft: 10}}>
                         Customs:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                           <input type="text" style={{ height: 20,marginTop: 5,width:125}}  />
                         </div>
                     </div>
                     <div style={{marginBottom: 6}}>
                         <div style={{ display: 'table-cell', width: 100}}>
                         In Words:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                             <input type="text" style={{ height: 20,marginLeft:5,width:308}}  />
                         </div>
                         <div style={{ display: 'table-cell', width: 100, paddingLeft: 38}}>
                         Total Amount:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                           <input type="text" style={{ height: 20,width:125}}  />
                         </div>
                     </div>
                   </div>
                 </div>
             );
     }
 }
