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
  * @class TileBar
  * @extends React.Component
  */
 export class TileBar extends React.Component {

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
             <div className="row">
         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
             <div className="row">
                 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <div className="databox bg-white radius-bordered">
                         <div className="databox-left bg-themesecondary">
                             <div className="databox-piechart">
                                 <div className="easyPieChart block-center"
                                  style={{width: 47, height: 47, lineHeight: 47}}>
                                  <span className="white font-90">50%</span></div>
                             </div>
                         </div>
                         <div className="databox-right">
                             <span className="databox-number themesecondary">28</span>
                             <div className="databox-text darkgray">NEW TASKS</div>
                             <div className="databox-stat themesecondary radius-bordered">
                                 <i className="stat-icon icon-lg fa fa-tasks"></i>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <div className="databox bg-white radius-bordered">
                         <div className="databox-left bg-themethirdcolor">
                             <div className="databox-piechart">
                                 <div className="easyPieChart " style={{width: 47, height: 47, lineHeight: 47}}><span className="white font-90">15%</span><canvas  style={{width: 47, height: 47, lineHeight: 47}}></canvas></div>
                             </div>
                         </div>
                         <div className="databox-right">
                             <span className="databox-number themethirdcolor">5</span>
                             <div className="databox-text darkgray">NEW MESSAGE</div>
                             <div className="databox-stat themethirdcolor radius-bordered">
                                 <i className="stat-icon  icon-lg fa fa-envelope-o"></i>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <div className="databox bg-white radius-bordered">
                         <div className="databox-left bg-themeprimary">
                             <div className="databox-piechart">
                                 <div className="easyPieChart block-center"
                                 ui-jq="easyPieChart"  style={{width: 47, height: 47, lineHeight: 47}}>
                                 <span className="white font-90">76%</span><canvas width="94" height="94" style={{width: 47, height: 47, lineHeight: 47}}></canvas></div>
                             </div>
                         </div>
                         <div className="databox-right">
                             <span className="databox-number themeprimary">92</span>
                             <div className="databox-text darkgray">NEW USERS</div>
                             <div className="databox-state bg-themeprimary">
                                 <i className="fa fa-check"></i>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <div className="databox bg-white radius-bordered">
                         <div className="databox-left no-padding">
                             <img src="assets/img/avatars/John-Smith.jpg" style={{height: 65, width: 65}} />
                         </div>
                         <div className="databox-right padding-top-20">
                             <div className="databox-stat palegreen">
                                 <i className="stat-icon icon-xlg fa fa-phone"></i>
                             </div>
                             <div className="databox-text darkgray">JOHN SMITH</div>
                             <div className="databox-text darkgray">TOP RESELLER</div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
         );
     }
 }
