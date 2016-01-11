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
import Draggabilly from 'imports?$=jquery!draggabilly/dist/draggabilly.pkgd';
import KendoWindow from 'imports?$=jquery!kendo-ui-core/src/kendo.window';
import { Toolbar, ToolbarItem, ToolbarSeparator } from 'ux/toolbar/toolbar';
import { TabPanel, Tab } from 'ux/tab/tabPanel';
import dialog from 'jquery-ui/dialog';
import './window.scss';

/**
 * Custom Class Header
 *
 * @class Window
 * @extends React.Component
 */
 export var Window  = {

     /**
      * Default Width
      * @param {String} defaultWidth
      */
     defaultWidth: '500px',

     /**
      * Default winows tool actions
      * @param {Array<String>} defaultActions
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
