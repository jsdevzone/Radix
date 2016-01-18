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

 import './tabs.less';

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
             <div className="x-tabs-container">
                 <div className="x-tabs-container-inner">
                {
                    this.props.children.map((child, index) => {
                        let activeCls = this.state.selectedIndex == index ? "active" : "";
                        return (
                            <div key={index} className="x-tab x-closable  firstbtn  tab0 ">
                                        <div className="x-tab-shadow"></div>
                                        <div className="x-tab-middle">
                                            <div className="x-tab-title">Welcome</div>
                                        <strong> </strong></div>
                                    </div>
                        );
                    })
                }
            </div>
        </div>
         );
     }

     /**
      * @eventhandler
      * @param {Number} index
      * @return {Void} undefined
      */
     onTabClick(index) {
         this.setState({ selectedIndex: index });
     }

     /**
      * Transforms child elements
      * @return {HTMLDivElement} element
      */
     transformTabs() {
         return (
            <div className="x-tabs-container">
                <div className="x-tabs-container-inner">
                    {
                        this.props.children.map((child, index) => {
                            let isActive = this.state.selectedIndex == index;
                            return React.cloneElement(child, { isActive: isActive, key: index })
                        })
                    }
                </div>
            </div>
         );
     }

     /**
      * @render
      * @return {HTMLDivElement} container
      */
     render() {
         return (
            <div className="p-tab-panel">
                <ul style={{paddingLeft: 30}} className="p-list-inline p-tab-bar p-inset-panel" tabindex="-1">
                    <li className="p-tab">
                        <div className="p-title" >clientInfo.js</div>
                        <i className="close-icon fa fa-close"></i>
                    </li>
                    <li className="p-tab">
                        <div className="p-title" >clientInfo.js</div>
                        <i className="close-icon fa fa-close"></i>
                    </li>
                    <li className="p-tab">
                        <div className="p-title" >clientInfo.js</div>
                        <i className="close-icon fa fa-close"></i>
                    </li>
                    <li className="p-tab">
                        <div className="p-title" >clientInfo.js</div>
                        <i className="close-icon fa fa-close"></i>
                    </li>
                    <li className="p-tab p-active">
                        <div className="p-title" >clientInfo.js</div>
                        <i className="close-icon fa fa-close"></i>
                    </li>
                    <li className="p-tab">
                        <div className="p-title" >clientInfo.js</div>
                        <i className="close-icon fa fa-close"></i>
                    </li>
                    <li className="p-tab">
                        <div className="p-title" >clientInfo.js</div>
                        <i className="close-icon fa fa-close"></i>
                    </li>
                </ul>
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
