'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from 'eventemitter3';

import './textfield.less';

const data = [
    'One',
    'Two','Three','Four','Five'
]

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
             isFocused: false,
             isExpanded: false,
             items: {}
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

     onListItemClick(item) {
         let items = this.state.items;
         items = item.Name;
         this.setState({ items: items});
         console.log(items);
         this.setState({ isExpanded: !this.state.isExpanded });
     }

     renderList() {
         if(this.state.isExpanded) {
             return (<div className="p-combo-list-wrapper">
                 <ul>
                     {(()=>{
                        if(this.props.data && this.props.data.length > 0) {
                            let listItems = [];
                            this.props.data.map((item, index) => {
                                listItems.push(<li onClick={()=>this.onListItemClick(item)}>{item[this.props.displayField]}</li>)
                            });
                            return listItems;
                        }
                     })()}
                 </ul>
             </div>);
         }
     }

     onTriggerClick() {
         this.setState({ isExpanded: !this.state.isExpanded });
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
                            <input className="p-form-text" ref="inputEl" onFocus={this.onFocus.bind(this)} onChange={this.onChange.bind(this)} value={this.props.items} placeholder={this.props.placeholder} />
                        </div>
                        <div className={triggerClassName} onClick={this.onTriggerClick.bind(this)} />
                    </div>
                    { this.renderList() }
                </div>
            </div>
         );
     }
 }
