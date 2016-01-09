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

  /**
   * Imports react bootstrap component
   */
 import { Alert } from 'react-bootstrap';
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
         this.el = this.refs['x-toolbar'];
         $(this.el).kendoMenu();

     }

     /**
      * @render
      * @return {HTMLDivElement} container
      */
     render() {
         return (
             <ul className="toolbar" ref="x-toolbar">
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
         this.state = {
             isExpanded: false
         };
     }

     componentDidMount() {
         this.el = this.refs['x-toolbar-item'];
         if(this.props.children)
         {
             //$(this.el).kendoMenu();
         }

     }

     componentDidUnMount() {
         document.body.removeEventListener('click', this.onDocumentClick.bind(this));
     }

     /**
      * Event handler for on document body click
      *
      * @eventhandler
      * @param {Event} evt
      * @return {Void} undefined
      */
     onDocumentClick(evt) {
         console.log(evt)
         //this.setState({ isExpanded: false });
     }

     /**
      * Event handler for item click
      *
      * @eventhandler
      * @param {Event} evt
      * @return {Void} undefined
      */
     onToolbarItemClick(evt) {
         this.setState({ isExpanded: !this.state.isExpanded });
     }

     /**
      * @render
      * @return {HTMLDivElement} container
      */
     render() {
         let caret = null;
         let className = "toolbar-item";

         /**
          * If there is a children show the drop down icon. childrens should be menu
          */
         if(this.props.children)
         {
             caret = (<span className="caret"></span>);
         }

         return (
             <li ref="x-toolbar-item" className={className}>
                <a href="#" onClick={this.onToolbarItemClick.bind(this)}>
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
