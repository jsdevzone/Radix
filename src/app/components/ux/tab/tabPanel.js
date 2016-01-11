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
  * @class TabPanel
  * @extends React.Component
  */
 export class TabPanel extends React.Component {

     /**
      * @constructor
      */
     constructor() {
         super();

         /**
          * @state
          */
         this.state = {
             selectedIndex: 0
         };
     }

     renderChildren() {
         /*
          * Create new children array
          */
         let children = new Array();

         /*
          * Transform childrens
          */
         this.props.children.map(child => {
             console.log(child);
             children.push(child);
         });

         /*
          * Return children
          */
         return children;
     }

     /**
      * Calculate the childrens and create the tabs automatically
      * @return {HtmlElement} component
      */
     renderTabStripes() {
         return (
             <ul className="nav nav-tabs tabs-flat">
                {
                    this.props.children.map((child, index) => {
                        let activeCls = this.state.selectedIndex == index ? "active" : "";
                        return (
                            <li key={index} className={activeCls} onClick={()=>this.onTabClick(index)}>
                            <a href="#"  key={index}><i  key={index} className={"fa "+ child.props.icon}/>{child.props.title}</a>
                            </li>
                        );
                    })
                }
             </ul>
         );
     }

     onTabClick(index) {
         console.log('jhgjhg')
         this.setState({ selectedIndex: index });
     }

     transformTabs() {
         return (
            <div className="tab-content tabs-flat">
            {
                this.props.children.map((child, index) => {
                    let isActive = this.state.selectedIndex == index;
                    return React.cloneElement(child, { isActive: isActive, key: index })
                })
            }
             </div>
         );
     }

     /**
      * @render
      * @return {HTMLDivElement} container
      */
     render() {
         return (
             <div className="tab-panel">
                { this.renderTabStripes() }
                { this.transformTabs() }
             </div>
         );
     }
 }


  /**
   * @class Tab
   * @extends React.Component
   */
  export class Tab extends React.Component {

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
          let cls = "tab-pane";
          if(this.props.isActive)
            cls += " in active ";
          return (
              <div className={cls}>
                 { this.props.children }
              </div>
          );
      }
  }
