
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
 export class DeliveryNote extends React.Component {
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
                              <TextField label="Number" width={200} placeholder="0001" />
                          </div>
                          <div style={{marginBottom: 6, display:'table-cell', paddingLeft: 10}}>
                              <TextField label="Sales Order" width={225} labelWidth={100} />
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
                                <TextField label="Customer PO" width={305} labelWidth={80} />
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
                        <DetailPanel>
                        </DetailPanel>
                  </div>
                  </div>
              );
      }
  }
