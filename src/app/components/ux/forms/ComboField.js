'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from 'eventemitter3';

import './textfield.less';

/**
 * Custom Class Header
 *
 * @class ComboField
 * @extends React.Component
 */
 export class ComboField extends React.Component {
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
         let input = this.refs.inputEl;
         if(this.props.onChange) {
             this.props.onChange(input.value);
         }
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
                            <select className="p-form-text">
                                <option onChange={this.onChange.bind(this)} value={this.props.value}>Value 1</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
         );
     }
 }
