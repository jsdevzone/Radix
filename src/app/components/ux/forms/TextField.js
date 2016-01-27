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

import './textfield.less';

/**
 * Custom Class Header
 *
 * @class TextField
 * @extends React.Component
 */
 export class TextField extends React.Component {
     /**
      * @constructor
      */
     constructor(args) {
        super(args);

        /**
         * @state
         */
         this.state = {};

         this.defaultLabelWidth = 100;
     }

     onFocus() {

     }

     onBlur() {

     }

     onChange() {

     }

     /**
      * @render
      * @return {View} view
      */
     render() {
         let label =(
             <label className="p-form-item-label" style={{ width: this.props.labelWidth || this.defaultLabelWidth }}>
                 <span>{this.props.label}</span>
                 <span>:</span>
             </label>
         );
         if(!this.props.label)
            label = null;
         return (
             <div className="p-form-item" style={{width:this.props.width}}>
                 { label }
                 <div className="p-form-item-body">
                    <div className="p-form-trigger-wrap">
                        <div className="p-form-text-wrap">
                            <input className="p-form-text" onFocus={this.onFocus.bind(this)} placeholder={this.props.placeholder} />
                        </div>
                    </div>
                </div>
            </div>
         );
     }
 }
