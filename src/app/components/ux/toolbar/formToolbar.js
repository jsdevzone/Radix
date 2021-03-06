 'use strict';


 import React from 'react';
 import ReactDOM from 'react-dom';
 /**
  * @class FormToolbar
  * @extends React.Component
  */
 export class FormToolbar extends React.Component {

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
           <div>
           <div className="p-toolbar">
               <a className="p-toolbar-button">
                   <i className="fa fa-th" />
                   <span>Add New</span>
               </a>
               <span className="p-toolbar-separator" />
               <a className="p-toolbar-button">
                   <i className="fa fa-pencil" />
                   <span>Edit</span>
               </a>
               <span className="p-toolbar-separator" />
               <a className="p-toolbar-button" onClick={this.props.onSave}>
                   <i className="fa fa-floppy-o" />
                   <span>Save</span>
               </a>
               <span className="p-toolbar-separator" />
               <a className="p-toolbar-button">
                   <i className="fa fa-times" />
                   <span>Cancel</span>
               </a>
               <span className="p-toolbar-separator" />
               <a className="p-toolbar-button" onClick={this.props.onDelete}>
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
               <a className="p-button" style={{marginRight: 5}} onClick={this.props.onList}>
                   <i className="fa fa-list" />
                   <span>List</span>
               </a>
               <a className="p-button">
                   <i className="fa fa-times" />
                   <span>Close</span>
               </a>
           </div>
        </div>
         );
     }
 }
