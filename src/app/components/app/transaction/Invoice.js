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
import { FormToolbar } from 'ux/toolbar/formToolbar';
import { TextField } from 'ux/forms/TextField';
/**
 * Custom Class Header
 *
 * @class SalesOrder
 * @extends React.Component
 */
 export class Invoice extends React.Component {
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
              <div style={{backgroundColor: '#F8F8F8', height:'100%'}}>
                <FormToolbar />
                 <div style={{padding: 10, margin: 5, border: 'solid 1px #D1D1D1'}}>
                      <div style={{display: 'table'}}>
                          <div style={{marginBottom: 6, display:'table-cell'}}>
                              <TextField label="Invoice No" width={200} placeholder="0001" />
                          </div>
                          <div style={{marginBottom: 6, display:'table-cell', paddingLeft: 10}}>
                              <TextField label="Delivery No" width={225} labelWidth={70} />
                          </div>
                          <div style={{marginBottom: 6, display:'table-cell', paddingLeft: 10}}>
                              <TextField label="Created On" width={200} labelWidth={70} placeholder="dd-mm-yy" />
                          </div>
                      </div>
                      <TextField label="Customer" width={645} />
                        <div style={{display: 'table'}}>
                            <div style={{marginBottom: 6, display:'table-cell'}}>
                                <TextField label="Contact Name" width={330} />
                            </div>
                            <div style={{marginBottom: 6, display:'table-cell', paddingLeft: 10}}>
                                <TextField label="Purchase No" width={305} labelWidth={80} />
                            </div>
                        </div>
                        <div style={{display: 'table'}}>
                            <div style={{marginBottom: 6, display:'table-cell'}}>
                                <TextField label="Project" width={330} />
                            </div>
                            <div style={{marginBottom: 6, display:'table-cell', paddingLeft: 10}}>
                                <TextField label="Executive" width={305} labelWidth={80} />
                            </div>
                        </div>
                        <div style={{display: 'table'}}>
                            <div style={{marginBottom: 6, display:'table-cell'}}>
                                <TextField label="Payment Term" width={330} />
                            </div>
                            <div style={{marginBottom: 6, display:'table-cell', paddingLeft: 10}}>
                                <TextField label="Delivery Term" width={305} labelWidth={80} />
                            </div>
                        </div>
                        <DetailPanel>
                        </DetailPanel>
                        <div style={{display: 'table',marginTop: 10}}>
                            <div style={{marginBottom: 6, display:'table-cell'}}>
                                <TextField label="Freight" width={200} />
                            </div>
                            <div style={{marginBottom: 6, display:'table-cell', paddingLeft: 10}}>
                                <TextField label="Customs" width={200} labelWidth={80} />
                            </div>
                        </div>
                        <div style={{display: 'table'}}>
                            <div style={{marginBottom: 6, display:'table-cell'}}>
                                <TextField label="Total Amount" width={200} />
                            </div>
                            <div style={{marginBottom: 6, display:'table-cell', paddingLeft: 10}}>
                                <TextField label="GL Account" width={200} labelWidth={80} />
                            </div>
                        </div>
                          <TextField label="Amount In Words" width={410} />
                  </div>

                  </div>
              );
      }
  }
