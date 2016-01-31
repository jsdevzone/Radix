 'use strict';
 import React from 'react';
 import ReactDOM from 'react-dom';
 import KendoMenu from 'imports?$=jquery!kendo-ui-core/src/kendo.menu';
 /**
  * @class Toolbar
  * @extends React.Component
  */
 export class Toolbar extends React.Component {

     /**
      * @constructor
      */
     constructor() {
         super();

         /**
          * @state
          */
         this.state = {};
     }

     componentDidMount() {
         //$(this.refs.xToolbar).kendoMenu();
     }

     /**
      * @render
      * @return {HTMLDivElement} container
      */
     render() {
         return (
             <div className="toolbar" ref="xToolbar">
                { this.props.children }
             </div>
         );
     }
 }

 /**
  * @class ToolbarItem
  * @extends React.Component
  */
 export class ToolbarItem extends React.Component {

     /**
      * @constructor
      */
     constructor() {
         super();

         /**
          * @state
          */
         this.state = {};
     }

     /**
      * @lifecycle
      * @componentDidMount
      * @return {Void} undefined
      */
     componentDidMount() {
         this.el = this.refs['x-toolbar-item'];
         //if(this.props.children)
            // $(this.el).kendoMenu();
     }

     /**
      * @render
      * @return {HTMLDivElement} container
      */
     render() {
         let caret = null;
         let className = "toolbar-item";
         return (
             <div ref="x-toolbar-item" onClick={this.props.onClick} className={className}>
                <div className="toolbar-item-inner" >
                    <i className={ "menu-icon fa " + (this.props.icon || "fa-picture-o") }></i>
                    <span className="menu-text">{this.props.text || "Purchases"}</span>
                </div>
                { this.props.children }
             </div>
         );
     }
 }

 /**
  * @class ToolbarSeparator
  * @extends React.Component
  */
 export class ToolbarSeparator extends React.Component {

     /**
      * @constructor
      */
     constructor() {
         super();

         /**
          * @state
          */
         this.state = {};
     }

     /**
      * @render
      * @return {HTMLDivElement} container
      */
     render() {
         return (
             <div className="toolbar-item toolbar-separator">
                <span>&nbsp;</span>
             </div>
         );
     }
 }
