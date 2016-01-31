 'use strict';

 import React from 'react';
 import ReactDOM from 'react-dom';

 /**
  * @class Tile
  * @extends React.Component
  */
 export class Tile extends React.Component {

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
      * Parse the scale attribute and find the corresponding css class.
      *
      * @param {String} scale
      * @return {String} cssClass
      */
     parseScale(scale) {
         let size = scale.substr(0, 1);
         let direction = scale.substr(1);

         switch(direction) {
             case 'h':
                direction = 'horizontal';
                break;
            case 'b':
                direction = "both";
                   break;
            case 'v':
                   direction = "vertical"
                      break;
         }

         return "scale-" + size + "-" + direction;
     }

     /**
      * @render
      * @return {HTMLDivElement} container
      */
     render() {
         let classNames = ["tile", "scale-1"];
         let scale = this.props.scale;

         /**
          * If the propery scale exists
          */
         if(scale)
            classNames.push(this.parseScale(scale));

         return (
             <div className={classNames.join(" ")}>
                { this.props.children }
             </div>
         );
     }
 }
