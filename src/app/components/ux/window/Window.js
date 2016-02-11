'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from 'eventemitter3';
import KendoWindow from 'imports?$=jquery!kendo-ui-core/src/kendo.window';

//import './window.scss';

/**
 * Custom Class Header
 *
 * @class Window
 * @extends React.Component
 */
 export var Window  = {

     /**
      * Default Width
      * @property {String} defaultWidth
      */
     defaultWidth: '100px',

     /**
      * Default Width
      * @property {String} defaultHeight
      */
     defaultHeight: '30px',

     /**
      * Default window tool actions
      * @property {Array<String>} defaultActions
      */
     defaultActions: [
         "Minimize", "Maximize", "Close"
     ],

     /**
      * @render
      * @return {View} view
      */
     show: function(component, options) {

         let config = {
             width: options.width || this.defaultWidth,
             height: options.height || this.defaultHeight,
             title: options.title || null,
             actions: this.defaultActions,
             position:{
                 top:"15%",
                 left:"35%"
             },
         };

         let $dialog = $('<div/>');
         $dialog.appendTo(document.body);
         $dialog.kendoWindow(config);
         ReactDOM.render(component, $dialog[0]);
     }
 }
