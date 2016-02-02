
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from 'eventemitter3';
import { TabPanel, Tab } from 'ux/tab/tabPanel';
import { FormToolbar } from 'ux/toolbar/formToolbar'
import { TextField } from 'ux/forms/TextField';
import { EntityManager } from 'core/EntityManager';
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
         var query = new breeze.EntityQuery.from('Customer');
         EntityManager.executeQuery(query)
     }

     changeValues(value, field) {
        let make = this.state.make;
        make[field] = value;
        this.setState({ make: make });
     }

     saveMake() {
         if(this.state.make.entityAspect){
             this.state.make.entityAspect.entityState = breeze.EntityState.Modified;
         }
         else{
              let make = EntityManager.createEntity('Make', this.state.make);
              EntityManager.addEntity(make);
         }
         EntityManager.saveChanges().then(abc=> {
             this.setState({ make: abc.entities[0]})
         })
     }

     onDelete() {
         if(this.state.make.entityAspect) {
             this.state.make.entityAspect.setDeleted();
             EntityManager.saveChanges().then(()=>{
                 this.setState({ make:{}})
             })
         }
     }
     /**
      * @render
      * @return {View} view
      */
     render() {
         return (
             <div style={{backgroundColor: '#F8F8F8', height:'100%'}}>
               <FormToolbar onSave={this.saveMake.bind(this)} onDelete={this.onDelete.bind(this)} />
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
