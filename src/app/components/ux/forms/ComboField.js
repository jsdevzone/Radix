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
             isFocused: false,
             isExpanded: false,
             items: {},
             value: null,
             hoverIndex: 0
         };

         this.defaultLabelWidth = 100;
     }

     componentDidMount() {

     }

     onKeyDown(event) {
         if(event.keyCode == 40) {
             this.setState({ hoverIndex: this.state.hoverIndex + 1});
         }

         if(event.keyCode == 38) {
             this.setState({ hoverIndex: this.state.hoverIndex - 1});
         }

         if(event.keyCode == 13) {
             this.setState({ value: this.props.data[this.state.hoverIndex][this.props.displayField], isExpanded: false });
             if(this.props.onSelect)
             {
                 this.props.onSelect(this.props.data[this.state.hoverIndex]);
             }
         }
     }

     onFocus() {
         this.setState({ isFocused: true });
     }

     onBlur() {

     }

     expand() {
         if(!this.state.isExpanded)
            this.setState({ isExpanded: true });
     }

     collapse() {
         if(this.state.isExpanded)
            this.setState({ isExpanded: false });
     }

     onChange() {
         let input = this.refs.inputEl;
         if(this.props.onChange) {
             this.props.onChange(input.value);
         }
     }

     onListItemClick(item) {
         let value = item[this.props.displayField];
         this.setState({ value: value, isExpanded: false });
         this.collapse();
         if(this.props.onSelect)
         {
             this.props.onSelect(item);
         }
     }

     getList() {
         if(this.props.data && this.props.data.length > 0) {
             return this.props.data.map((item, index) => {
                 let className = this.state.hoverIndex == index ? "p-list-item-hover": "";
                 return (<li  className={className}
                     onMouseOver={() => this.setState({ hoverIndex: index })}
                     onClick={()=> this.onListItemClick(item)}>{item[this.props.displayField]}</li>);
             });
         }
         return null;
     }

     renderList() {
         if(this.state.isExpanded) {
             return (
                 <div className="p-combo-list-wrapper">
                 <ul>{this.getList()}</ul>
             </div>
            );
         }
     }

     onDocumentClick() {

     }

     onTriggerClick() {
         this.refs.inputEl.focus();
         this.expand();
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
                            <input onKeyDown={this.onKeyDown.bind(this)} className="p-form-text" ref="inputEl" onFocus={this.onFocus.bind(this)} onChange={this.onChange.bind(this)} value={this.state.value} placeholder={this.props.placeholder} />
                        </div>
                        <div className={triggerClassName} onClick={this.onTriggerClick.bind(this)} />
                    </div>
                    { this.renderList() }
                </div>
            </div>
         );
     }
 }
