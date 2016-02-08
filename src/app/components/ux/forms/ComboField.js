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
         this.state = {
             isFocused: false
         };

         this.defaultLabelWidth = 100;
     }

     onFocus() {
         this.setState({ isFocused: true });
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
         let triggerClassName = "p-form-trigger p-form-trigger-default";
         if(this.state.isFocused)
            triggerClassName += " p-form-trigger-focus";
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
                            <input className="p-form-text" ref="inputEl" onFocus={this.onFocus.bind(this)} onChange={this.onChange.bind(this)} value={this.props.value} placeholder={this.props.placeholder} />
                        </div>
                        <div className={triggerClassName} />
                    </div>
                </div>
            </div>
         );
     }
 }
