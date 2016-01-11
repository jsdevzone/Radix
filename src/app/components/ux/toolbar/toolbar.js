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
         $(this.refs.xToolbar).kendoMenu();
     }

     /**
      * @render
      * @return {HTMLDivElement} container
      */
     render() {
         return (
             <ul className="toolbar" ref="xToolbar">
                { this.props.children }
             </ul>
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
         if(this.props.children)
             $(this.el).kendoMenu();
     }

     /**
      * @render
      * @return {HTMLDivElement} container
      */
     render() {
         let caret = null;
         let className = "toolbar-item";
         return (
             <li ref="x-toolbar-item" onClick={this.props.onClick} className={className}>
                <a href="#">
                    <i className={ "menu-icon fa " + (this.props.icon || "fa-picture-o") }></i>
                    <span className="menu-text">{this.props.text || "Purchases"}</span>
                </a>
                { this.props.children }
             </li>
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
             <li className="toolbar-item">
                <span className="separator">&nbsp;</span>
             </li>
         );
     }
 }
