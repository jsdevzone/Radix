
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from 'eventemitter3';
import { DetailPanel } from 'ux/panel/detailPanel';
import { FormToolbar } from 'ux/toolbar/formToolbar';
import { TextField } from 'ux/forms/TextField';
import { EntityList } from 'app/list/EntityList';
import { ComboField } from 'ux/forms/ComboField';
import { EntityManager } from 'core/EntityManager';
/**
 * Custom Class Header
 *
 * @class Quotation
 * @extends React.Component
 */
 export class Quotation extends React.Component {
     /**
      * @constructor
      */
     constructor(args) {
        super(args);

        /**
         * @state
         */
         this.state = {
             quotation: {}
         };
         var query = new breeze.EntityQuery.from('Customer');
         EntityManager.executeQuery(query).then(data=>{this.setState({ customers: data })})
     }

     componentDidMount() {
         var query = new breeze.EntityQuery.from('Customer');
         EntityManager.executeQuery(query).then(data=>{
             this.setState({ customers: data.results })
         })

         var contactQuery = new breeze.EntityQuery.from('CustomerContact');
         EntityManager.executeQuery(contactQuery).then(data=>{
             this.setState({ CustomerContacts: data.results })
         })

         var executiveQuery = new breeze.EntityQuery.from('SalesExecutive');
         EntityManager.executeQuery(executiveQuery).then(data=>{
             this.setState({ SalesExecutives: data.results })
         })

         var paymentQuery = new breeze.EntityQuery.from('PaymentTerm');
         EntityManager.executeQuery(paymentQuery).then(data=>{
             this.setState({ PaymentTerms: data.results })
         })

     }

     changeValues(value, field) {
        let quotation = this.state.quotation;
        quotation[field] = value;
        this.setState({ quotation: quotation });
     }

     saveMaterial() {
         if(this.state.quotation.entityAspect){
             this.state.quotation.entityAspect.entityState = breeze.EntityState.Modified;
         }
         else{
             let data = this.state.quotation;
             data.quotationDetails = null
             let quotation = EntityManager.createEntity('QuotationMaster', data);
             EntityManager.addEntity(quotation);
         }
         EntityManager.saveChanges().then(abc=> {
             this.setState({ quotation: abc.entities[0]})
         })
     }

     onDelete() {
         if(this.state.quotation.entityAspect) {
             this.state.quotation.entityAspect.setDeleted();
             EntityManager.saveChanges().then(()=>{
                 this.setState({ quotation: {}});
             })
         }
     }

     onList() {
         Window.show(<EntityList />, { title: 'Quotation', height: 500, width: 400 });
     }

     /**
      * @render
      * @return {View} view
      */
      render() {
          return (
              <div style={{backgroundColor: '#F8F8F8', height:'100%'}}>
                <FormToolbar />
                 <div style={{padding: 10, margin: 5, border: 'solid 1px #D1D1D1'}}>
                      <div style={{display: 'table'}}>
                          <div style={{marginBottom: 6, display:'table-cell'}}>
                              <TextField label="Number" width={200} placeholder="0001" />
                          </div>
                          <div style={{marginBottom: 6, display:'table-cell', paddingLeft: 10}}>
                              <TextField label="Created On" width={200} labelWidth={70} placeholder="dd-mm-yy" />
                          </div>
                      </div>
                      <ComboField data={this.state.customers} displayField='Name' valueField="CustomerId" label="Customer" width={645} />
                        <div style={{display: 'table'}}>
                            <div style={{marginBottom: 6, display:'table-cell'}}>
                                <ComboField data={this.state.CustomerContacts} displayField='Name' valueField="CustomerContactId" label="Contact Name" width={330} />
                            </div>
                            <div style={{marginBottom: 6, display:'table-cell', paddingLeft: 10}}>
                                <TextField label="Customer PO" width={305} labelWidth={100} />
                            </div>
                        </div>
                        <div style={{display: 'table'}}>
                            <div style={{marginBottom: 6, display:'table-cell'}}>
                                <TextField label="Lead Time" width={330} />
                            </div>
                            <div style={{marginBottom: 6, display:'table-cell', paddingLeft: 10}}>
                                <ComboField data={this.state.SalesExecutives} displayField='Name' valueField="ExecutiveId" label="Executive" width={305} labelWidth={100} />
                            </div>
                        </div>
                        <div style={{display: 'table'}}>
                            <div style={{marginBottom: 6, display:'table-cell'}}>
                                <ComboField data={this.state.PaymentTerms} displayField='Name' valueField="PaymentTermsId" label="Delivery Terms" width={330} />
                            </div>
                            <div style={{marginBottom: 6, display:'table-cell', paddingLeft: 10}}>
                                <ComboField label="Payment Terms" width={305} labelWidth={100} />
                            </div>
                        </div>
                        <div style={{display: 'table'}}>
                            <div style={{marginBottom: 6, display:'table-cell'}}>
                                <TextField label="Valid Through" width={330} />
                            </div>
                            <div style={{marginBottom: 6, display:'table-cell', paddingLeft: 10}}>
                                <TextField label="Delivery Period" width={305} labelWidth={100} />
                            </div>
                        </div>
                        <DetailPanel>
                        </DetailPanel>
                        <div style={{display: 'table', paddingTop: 10}}>
                            <div style={{display:'table-cell'}}>
                                <TextField label="Freight" width={170} />
                            </div>
                            <div style={{display:'table-cell', paddingLeft: 5}}>
                                <TextField label="Customs" width={170} labelWidth={80} />
                            </div>
                            <div style={{display:'table-cell', paddingLeft: 200}}>
                                <TextField label="Total Amount" width={200} />
                            </div>
                        </div>
                        <TextField label="Amount In Words" width={340} />
                  </div>
            </div>
        );
    }
}
