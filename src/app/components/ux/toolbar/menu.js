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
  * @class Menu
  * @extends React.Component
  */
 export class Menu extends React.Component {

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
      * Life cycle method to be executed when the component is mounted to the dom.
      *
      * @componentDidMount
      * @lifecycle
      * @return {Void} undefined
      */
      componentDidMount() {
          //create container manually and append to document body
          this.container = document.createElement('div');

          //append to document body
          document.body.appendChild(this.container);

          //renderMenu
          this.renderMenu();
      }

      /**
       * Life cycle method to be executed when the component is un mounted from the dom.
       *
       * @componentWillUnMount
       * @lifecycle
       * @return {Void} undefined
       */
       componentWillUnMount() {
          ReactDOM.unmountComponentAtNode(this.container);
          //remove the container
          document.body.removeChild(this.container);
       }

      /**
       * Life cycle method to be executed when the component is updated to the dom.
       *
       * @componentDidUpdate
       * @lifecycle
       * @return {Void} undefined
       */
       componentDidUpdate() {
           this.renderMenu();
       }

      /**
       * Render the menu items
       *
       * @return {Void} undefined
       */
      renderMenu() {
          ReactDOM.render(this.props.children, this.container);
      }

     /**
      * @render
      * @return {HTMLDivElement} container
      */
     render() {
         return React.createElement('div');
     }
 }


 /**
  * @class MenuItem
  * @extends React.Component
  */
 export class MenuItem extends React.Component {

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
             <div />
         );
     }
 }
