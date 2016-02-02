
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
 * @class ItemSize
 * @extends React.Component
 */
 export class ItemSize extends React.Component {
     /**
      * @constructor
      */
     constructor(args) {
        super(args);

        /**
         * @state
         */
         this.state = {
            itemSize: {}
         };
         var query = new breeze.EntityQuery.from('ItemSize');
         EntityManager.executeQuery(query);
     }

     changeValues(value, field) {
        let itemSize = this.state.itemSize;
        itemSize[field] = value;
        this.setState({ itemSize: itemSize });
     }

     saveItemSize() {
         if(this.state.itemSize.entityAspect){
             this.state.itemSize.entityAspect.entityState = breeze.EntityState.Modified;
         }
         else{
              let itemSize = EntityManager.createEntity('ItemSize', this.state.itemSize);
              EntityManager.addEntity(itemSize);
         }
         EntityManager.saveChanges().then(abc=> {
             this.setState({ itemSize: abc.entities[0]})
         })
     }

     onDelete() {
         if(this.state.itemSize.entityAspect) {
             this.state.itemSize.entityAspect.setDeleted();
             EntityManager.saveChanges().then(()=>{
                 this.setState({ itemSize: {}})
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
               <FormToolbar onSave={this.saveItemSize.bind(this)} onDelete={this.onDelete.bind(this)} />
               <div style={{height: 60, backgroundColor:'#FFF', borderBottom: 'solid 1px #D1D1D1'}}>
               </div>
                <div style={{padding: 10, margin: 10, border: 'solid 1px #D1D1D1'}}>

                     <div style={{marginBottom: 6}}>
                         <TextField value={this.state.itemSize.Name} onChange={(value) => { this.changeValues(value, 'Name') }} label="ItemSize" width={420} />
                     </div>
                 </div>
                 </div>
             );
     }
 }
