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
     constructor(props) {
         super();

         /**
          * @state
          */
         this.state = {
             selectedIndex: 0,
             items: []
         };

         if(props.children) {
             props.children.map((item, index) => {
                 this.state.items.push(item);
             });
         }
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
             <ul style={{paddingLeft: 30}} className="p-list-inline p-tab-bar p-inset-panel" tabIndex="-1">
             {
                    this.state.items.map((child, index) => {
                    let activeCls = this.state.selectedIndex == index ? "p-active" : "";
                        return (
                            <li className={ "p-tab " + activeCls } onClick={() => this.onTabClick(index)}>
                                <div className="p-title" >{child.props.title}</div>
                                <i className="close-icon fa fa-close" onClick={(event) =>{ event.stopPropagation(); event.preventDefault(); this.onTabClose(index)}} ></i>
                            </li>
                        );
                    })
                }
            </ul>
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
      * @eventhandler
      * @param {Number} index
      * @return {Void} undefined
      */
     onTabClose(index) {
         let items = this.state.items.splice(index, 1);
         this.setState({ items: this.state.items});
     }

     /**
      * Transforms child elements
      * @return {HTMLDivElement} element
      */
     transformTabs() {
         return (
            <div className="x-tabs-container" >
                <div className="x-tabs-container-inner">
                    {
                        this.state.items.map((child, index) => {
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
            <div className="p-tab-panel" style={this.props.style}>
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
          let cls = "p-tab-body";
          if(this.props.isActive)
            cls += " p-active";
          return (
              <div className={cls}>
                 { this.props.children }
              </div>
          );
      }
  }
