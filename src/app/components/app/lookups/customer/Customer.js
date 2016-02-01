
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
 * @class Customer
 * @extends React.Component
 */
 export class Customer extends React.Component {
     /**
      * @constructor
      */
     constructor(args) {
        super(args);

        /**
         * @state
         */
         this.state = {
            customer: {}
         };
     }

     changeValues(value, field) {
        let customer = this.state.customer;
        customer[field] = value;
        this.setState({ customer: customer });
        console.log(this.state.customer)
     }

     saveCustomer() {
        var service = "http://localhost:19377/breeze/radix/";
         var EntityManager = new breeze.EntityManager(service);
         EntityManager.fetchMetadata().then(function() {
            /* var customer = EntityManager.createEntity('Customers', this.state.customer);
             EntityManager.addEntity(customer);
             EntityManager.saveChanges();*/
             var query = breeze.EntityQuery.from('Customers');
             EntityManager.executeQuery(query).then(data=>{console.log(data)})
         })
        /* var data = this.state.customer;
         $.ajax({
            url: 'http://localhost:10946/api/customer/save',
            data : data,
            type: 'POST',
            dataType: 'json',
            crossDomain: true,
            success: function (data) {
                //WriteResponses(data);
                console.log(data);
            },
            error: function (x, y, z) {
                alert(x + '\n' + y + '\n' + z);
            }
        });*/

     }

     /**
      * @render
      * @return {View} view
      */
     render() {
         return (
             <div style={{backgroundColor: '#F8F8F8', height:'100%'}}>
               <FormToolbar onSave={this.saveCustomer.bind(this)} />
               <div style={{height: 60, backgroundColor:'#FFF', borderBottom: 'solid 1px #D1D1D1'}}>
               </div>
                <div style={{padding: 10, margin: 10, border: 'solid 1px #D1D1D1'}}>
                     <div style={{marginBottom: 6}}>
                         <TextField value={this.state.customer.CustomerId} onChange={(value) => { this.changeValues(value, 'CustomerId') }} label="CustomerId" width={220} placeholder="#CR256330" />
                     </div>
                     <div style={{marginBottom: 6}}>
                         <TextField value={this.state.customer.Name} onChange={(value) => { this.changeValues(value, 'Name') }} label="Name" width={420} placeholder="Customer Full Name" />
                     </div>

                     <div style={{display: 'table'}}>
                         <div style={{marginBottom: 6, display:'table-cell'}}>
                             <div style={{borderBottom: 'dashed 1px #D1D1D1', paddingTop: 10, paddingBottom: 5, marginBottom: 10}}>
                                 Address & Location
                             </div>
                             <TextField value={this.state.customer.Name} label="Address 1" width={350} placeholder="Address" />
                             <TextField label="Address 2" width={350} placeholder="Address" />
                             <TextField label="City" width={300} placeholder="City" />
                             <TextField label="Country" width={300} placeholder="Country" />
                             <div style={{borderBottom: 'dashed 1px #D1D1D1', paddingTop: 10, paddingBottom: 5, marginBottom: 10}}>
                                 Phone & Fax
                             </div>
                             <TextField label="Phone" width={230} placeholder="+91952636633" />
                             <TextField label="Fax" width={230} placeholder="+91952636633" />
                             <TextField label="Mobile" width={230} placeholder="+91952636633" />
                         </div>
                         <div style={{marginBottom: 6, display:'table-cell', paddingLeft: 20}}>
                             <div style={{borderBottom: 'dashed 1px #D1D1D1', paddingTop: 10, paddingBottom: 5, marginBottom: 10}}>
                                 Email & Social Media
                             </div>
                             <TextField label="Email"  placeholder="name@domain.com" />
                             <TextField label="Website"  width={350}  placeholder="http://www.customerdomain.com" />
                                 <div style={{borderBottom: 'dashed 1px #D1D1D1', paddingTop: 10, paddingBottom: 5, marginBottom: 10}}>
                                     Other Details
                                 </div>
                                 <TextField label="Opening Balance"  placeholder="name@domain.com" />
                                 <TextField label="Credit Limit" width={350}  placeholder="http://www.customerdomain.com" />
                         </div>
                     </div>
                 </div>
                 </div>
             );
     }
 }
