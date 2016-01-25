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
 * @class Enquiry
 * @extends React.Component
 */
 export class Enquiry extends React.Component {
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
                         Enquiry No:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                             <input placeholder="#0001" type="text" style={{ height: 20,marginLeft:5,width:100}}  />
                         </div>
                         <div style={{ display: 'table-cell', width: 100, paddingLeft: 10}}>
                         Created On:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                           <input placeholder="dd-mm-yy" type="text" style={{ height: 20,marginLeft:5,width:125}}  />
                         </div>
                         <div style={{ display: 'table-cell', width: 100, paddingLeft: 10}}>
                         Reference:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                           <input type="text" style={{ height: 20,marginLeft:5,width:125}}  />
                         </div>
                     </div>
                     <div style={{marginBottom: 6}}>
                         <div style={{ display: 'table-cell', width: 95}}>
                         Name:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                               <select style={{ height: 10, marginLeft:5, width:315, fontSize: 15}}>
                                 <option value="volvo"></option>
                                 <option value="saab">Saab</option>
                                 <option value="opel">Opel</option>
                                 <option value="audi">Audi</option>
                               </select>
                         </div>
                     </div>
                     <div style={{marginBottom: 6}}>
                         <div style={{ display: 'table-cell', width: 95}}>
                         Name:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                               <select style={{ height: 10, marginLeft:5, width:315, fontSize: 15}}>
                                 <option value="volvo"></option>
                                 <option value="saab">Saab</option>
                                 <option value="opel">Opel</option>
                                 <option value="audi">Audi</option>
                               </select>
                         </div>
                     </div>
                     <div style={{marginBottom: 6}}>
                         <div style={{ display: 'table-cell', width: 95}}>
                         Name:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                               <select style={{ height: 10, marginLeft:5, width:315, fontSize: 15}}>
                                 <option value="volvo"></option>
                                 <option value="saab">Saab</option>
                                 <option value="opel">Opel</option>
                                 <option value="audi">Audi</option>
                               </select>
                         </div>
                     </div>
                     <div style={{marginBottom: 6}}>
                         <div style={{ display: 'table-cell', width: 95}}>
                         Name:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                               <select style={{ height: 10, marginLeft:5, width:315, fontSize: 15}}>
                                 <option value="volvo"></option>
                                 <option value="saab">Saab</option>
                                 <option value="opel">Opel</option>
                                 <option value="audi">Audi</option>
                               </select>
                         </div>
                     </div>
                     <DetailPanel>

                     </DetailPanel>
                   </div>
                 </div>

             );
     }
 }
