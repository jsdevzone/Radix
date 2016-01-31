
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from 'eventemitter3';
import { TabPanel, Tab } from 'ux/tab/tabPanel';
import { FormToolbar } from 'ux/toolbar/formToolbar'
import { TextField } from 'ux/forms/TextField';
/**
 * Custom Class Header
 *
 * @class Make
 * @extends React.Component
 */
 export class Make extends React.Component {
     /**
      * @constructor
      */
     constructor(args) {
        super(args);

        /**
         * @state
         */
         this.state = {
            make: {}
         };
     }

     changeValues(value, field) {
        let make = this.state.itemSize;
        make[field] = value;
        this.setState({ make: make });
     }

     saveMake() {
         var service = "http://localhost:19377/breeze/radix/";
         var EntityManager = new breeze.EntityManager(service);
         var make = EntityManager.createEntity('Make', this.state.itemSize);
         EntityManager.addEntity(make);
         EntityManager.saveChanges();
     }

     /**
      * @render
      * @return {View} view
      */
     render() {
         return (
             <div style={{backgroundColor: '#F8F8F8', height:'100%'}}>
               <FormToolbar onSave={this.saveMake.bind(this)} />
               <div style={{height: 60, backgroundColor:'#FFF', borderBottom: 'solid 1px #D1D1D1'}}>
               </div>
                <div style={{padding: 10, margin: 10, border: 'solid 1px #D1D1D1'}}>

                     <div style={{marginBottom: 6}}>
                         <TextField value={this.state.make.Name} onChange={(value) => { this.changeValues(value, 'Name') }} label="make" width={420} />
                     </div>
                 </div>
                 </div>
             );
     }
 }
