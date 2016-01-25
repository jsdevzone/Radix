<<<<<<< HEAD
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
 
=======
>>>>>>> 5e4075ac19ec99d1671e7ea026093f99610fb30a
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from 'eventemitter3';
import { TabPanel, Tab } from 'ux/tab/tabPanel';
<<<<<<< HEAD
import { FormToolbar } from 'ux/toolbar/formToolbar'
=======
>>>>>>> 5e4075ac19ec99d1671e7ea026093f99610fb30a
/**
 * Custom Class Header
 *
 * @class Customer
 * @extends React.Component
 */
 export class Customer extends React.Component {
     /**
      * @constructor
      */
     constructor(args) {
        super(args);

        /**
         * @state
         */
         this.state = {};
     }

     /**
      * @render
      * @return {View} view
      */
     render() {
         return (
             <div>
<<<<<<< HEAD
               <FormToolbar />
=======
                 <div className="p-toolbar">
                     <a className="p-toolbar-button">
                         <i className="fa fa-th" />
                         <span>Add New Customer</span>
                     </a>
                     <span className="p-toolbar-separator" />
                     <a className="p-toolbar-button">
                         <i className="fa fa-pencil" />
                         <span>Edit</span>
                     </a>
                     <span className="p-toolbar-separator" />
                     <a className="p-toolbar-button">
                         <i className="fa fa-floppy-o" />
                         <span>Save</span>
                     </a>
                     <span className="p-toolbar-separator" />
                     <a className="p-toolbar-button">
                         <i className="fa fa-times" />
                         <span>Cancel</span>
                     </a>
                     <span className="p-toolbar-separator" />
                     <a className="p-toolbar-button">
                         <i className="fa fa-trash" />
                         <span>Delete</span>
                     </a>
                     <div style={{ flex: 1}} />
                     <input type="text" />
                     <a className="p-toolbar-button">
                         <i className="fa fa-search" />
                         <span>Search</span>
                     </a>
                 </div>
                 <div className="p-window-buttons">
                     <a className="p-button">
                         <i className="fa fa-question" />
                         <span>Help</span>
                     </a>
                     <div style={{flex:1}} />
                     <a className="p-button" style={{marginRight: 5}}>
                         <i className="fa fa-list" />
                         <span>List</span>
                     </a>
                     <a className="p-button">
                         <i className="fa fa-times" />
                         <span>Close</span>
                     </a>
                 </div>

>>>>>>> 5e4075ac19ec99d1671e7ea026093f99610fb30a
                 <div style={{padding: 10}}>
                     <div style={{marginBottom: 6}}>
                         <div style={{ display: 'table-cell', width: 100}}>
                         Customer Id:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                             <input placeholder="#C12563" type="text" style={{ height: 20,marginLeft:5,width:100}}  />
                         </div>
                     </div>
                     <div style={{marginBottom: 6}}>
                         <div style={{ display: 'table-cell', width: 100}}>
                         Name:
                         </div>
                         <div style={{ display: 'table-cell'}}>
                             <input placeholder="#C12563" type="text" style={{ height: 20,marginLeft:5,width:300}}  />
                         </div>
                     </div>
                     <TabPanel style={{border:'solid 1px #D4d4D4', marginTop: 10, height: 300}}>
                         <Tab title="General">
                         </Tab>
                         <Tab title="Details">
                         </Tab>
                         <Tab title="History">
                         </Tab>
                     </TabPanel>
                 </div>
<<<<<<< HEAD
=======


>>>>>>> 5e4075ac19ec99d1671e7ea026093f99610fb30a
                 </div>
             );
     }
 }
