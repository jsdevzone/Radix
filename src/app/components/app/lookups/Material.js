
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
 * @class Material
 * @extends React.Component
 */
 export class Material extends React.Component {
     /**
      * @constructor
      */
     constructor(args) {
        super(args);

        /**
         * @state
         */
         this.state = {
            material: {}
         };
     }

     changeValues(value, field) {
        let material = this.state.material;
        material[field] = value;
        this.setState({ material: material });
        //console.log(this.state.customer)
     }

     saveMaterial() {
         var service = "http://localhost:5107/breeze/Radix";
         var EntityManager = new breeze.EntityManager(service);
         var material = EntityManager.createEntity('Materials', this.state.material);
         EntityManager.addEntity(material);
         EntityManager.saveChanges();
     }

     /**
      * @render
      * @return {View} view
      */
     render() {
         return (
             <div style={{backgroundColor: '#F8F8F8', height:'100%'}}>
               <FormToolbar onSave={this.saveMaterial.bind(this)} />
               <div style={{height: 60, backgroundColor:'#FFF', borderBottom: 'solid 1px #D1D1D1'}}>
               </div>
                <div style={{padding: 10, margin: 10, border: 'solid 1px #D1D1D1'}}>
                     <div style={{marginBottom: 6}}>
                         <TextField value={this.state.material.MaterialCode} onChange={(value) => { this.changeValues(value, 'MaterialId') }} label="Material Code" width={220} placeholder="0001" />
                     </div>
                     <div style={{marginBottom: 6}}>
                         <TextField value={this.state.material.Name} onChange={(value) => { this.changeValues(value, 'Name') }} label="Material Name" width={420} placeholder="Material Name" />
                     </div>
                 </div>
                 </div>
             );
     }
 }
