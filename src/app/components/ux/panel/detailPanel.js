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
  * @class FormToolbar
  * @extends React.Component
  */
 export class DetailPanel extends React.Component {

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
            <div style={{border:'solid 1px #D4d4D4', marginTop: 10, height: 250}}>
                <div style={{backgroundImage:'-webkit-linear-gradient(top, #f3f3f3, #f3f3f3)',height: 30}}>
                <a className="p-button" style={{marginLeft : 5, marginTop: 3}}>
                    <i className="fa fa-plus" />
                    <span>Add New</span>
                </a>
                </div>

            </div>
           </div>
         );
     }
 }
