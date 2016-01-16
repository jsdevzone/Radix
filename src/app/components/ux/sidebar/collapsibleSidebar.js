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

 import './sidebar.less';

 /**
  * @class CollapsibleSidebar
  * @extends React.Component
  */
 export class CollapsibleSidebar extends React.Component {

     /**
      * @constructor
      */
     constructor() {
         super();

         /**
          * @state
          */
         this.state = {
             activeIndex: 0
         };
     }

     /**
      * Change the tab
      *
      * @param {Number} index
      * @return {Void} undefined
      */
     onTabClick(index) {
         this.setState({ activeIndex: this.state.activeIndex == index ? -1 : index });
     }

     /**
      * Render the sidebar buttons
      *
      * @return {Array<HtmlElement>} div
      */
     renderButtons() {
         return this.props.children.map((item, index) => {
             /*
              * Check the active selected tab
              */
             let activeClass =  index == this.state.activeIndex ? "active" : "";

             /*
              * return the child tab
              */
             return (
                 <div key={index} className={ "x-sidebar-button " + activeClass } onClick={() => this.onTabClick(index)}>
                    <i className="fa fa-table"></i>
                    <span>{ item.props.title }</span>
                 </div>
             );
         });
     }

     renderPanelBody() {
         return this.props.children.map((item, index) => {
             /*
              * Check the active selected tab
              */
             let activeClass =  index == this.state.activeIndex ? "active" : "";

             /*
              * return the child tab
              */
             return React.cloneElement(item , { key: index, className: 'x-sidebar-panel-body ' + activeClass });
         });
     }

     /**
      * @render
      * @return {HTMLDivElement} container
      */
     render() {
         return (
             <div className="x-sidebar">
                <div className="x-sidebar-panel-bar">
                    { this.renderButtons() }
                </div>
                <div className= { "x-sidebar-panel " + (this.state.activeIndex == -1 ? " animated slideOutLeft" : "animated slideInLeft") }>
                    { this.renderPanelBody() }
                </div>
             </div>
         );
     }
 }
