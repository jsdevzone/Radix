
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
 * @class Product
 * @extends React.Component
 */
 export class Product extends React.Component {
     /**
      * @constructor
      */
     constructor(args) {
        super(args);

        /**
         * @state
         */
         this.state = {
            product: {}
         };
         var query = new breeze.EntityQuery.from('Customer');
         EntityManager.executeQuery(query)
     }

     changeValues(value, field) {
        let product = this.state.product;
        product[field] = value;
        this.setState({ product: product });
     }

     saveProduct() {
         if(this.state.product.entityAspect){
             this.state.product.entityAspect.entityState = breeze.EntityState.Modified;
         }
         else{
              let product = EntityManager.createEntity('Product', this.state.product);
              EntityManager.addEntity(product);
         }
         EntityManager.saveChanges().then(abc=> {
             this.setState({ product: abc.entities[0]})
         })
     }

     onDelete() {
         if(this.state.product.entityAspect) {
             this.state.product.entityAspect.setDeleted();
             EntityManager.saveChanges().then(()=>{
                 this.setState({ product:{}})
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
               <FormToolbar onSave={this.saveProduct.bind(this)} onDelete={this.onDelete.bind(this)} />
               <div style={{height: 60, backgroundColor:'#FFF', borderBottom: 'solid 1px #D1D1D1'}}>
               </div>
                <div style={{padding: 10, margin: 10, border: 'solid 1px #D1D1D1'}}>

                     <div style={{marginBottom: 6}}>
                         <TextField value={this.state.product.Name} onChange={(value) => { this.changeValues(value, 'Name') }} label="Product Name" width={420} />
                     </div>
                 </div>
                 </div>
             );
     }
 }
