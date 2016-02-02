

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from 'eventemitter3';
import { Window } from 'ux/window/window';
import { TextField } from 'ux/forms/TextField';
import { TabPanel, Tab } from 'ux/tab/tabPanel';
import { EntityManager } from 'core/EntityManager';
import { FormToolbar } from 'ux/toolbar/formToolbar'
import { EntityList } from 'app/list/EntityList';
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
         var query = new breeze.EntityQuery.from('Customer');
         EntityManager.executeQuery(query)
     }

     changeValues(value, field) {
        let material = this.state.material;
        material[field] = value;
        this.setState({ material: material });
     }

     saveMaterial() {
         if(this.state.material.entityAspect){
             this.state.material.entityAspect.entityState = breeze.EntityState.Modified;
         }
         else{
              let material = EntityManager.createEntity('Material', this.state.material);
              EntityManager.addEntity(material);
         }
         EntityManager.saveChanges().then(abc=> {
             this.setState({ material: abc.entities[0]})
         })
     }

     onDelete() {
         if(this.state.material.entityAspect) {
             this.state.material.entityAspect.setDeleted();
             EntityManager.saveChanges().then(()=>{
                 this.setState({ material: {}});
             })
         }
     }

     onList() {
         Window.show(<EntityList />, { title: 'Material', height: 500, width: 400 });
     }
     /**
      * @render
      * @return {View} view
      */
     render() {
         return (
             <div style={{backgroundColor: '#F8F8F8', height:'100%'}}>
               <FormToolbar onSave={this.saveMaterial.bind(this)} onDelete={this.onDelete.bind(this)} onList={this.onList.bind(this)} />
               <div style={{height: 60, backgroundColor:'#FFF', borderBottom: 'solid 1px #D1D1D1'}}>
               </div>
                <div style={{padding: 10, margin: 10, border: 'solid 1px #D1D1D1'}}>
                     <div style={{marginBottom: 6}}>
                         <TextField value={this.state.material.MaterialId} onChange={(value) => { this.changeValues(value, 'MaterialId') }} label="Material Code" width={220} placeholder="0001" />
                     </div>
                     <div style={{marginBottom: 6}}>
                         <TextField value={this.state.material.Name} onChange={(value) => { this.changeValues(value, 'Name') }} label="Material Name" width={420} placeholder="Material Name" />
                     </div>
                 </div>
                 </div>
             );
     }
 }
