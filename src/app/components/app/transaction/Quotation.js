
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
         EntityManager.executeQuery(query)
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
                      <TextField label="Customer" width={645} />
                        <div style={{display: 'table'}}>
                            <div style={{marginBottom: 6, display:'table-cell'}}>
                                <ComboField label="Contact Name" width={330} />
                            </div>
                            <div style={{marginBottom: 6, display:'table-cell', paddingLeft: 10}}>
                                <TextField label="Customer PO" width={305} labelWidth={80} />
                            </div>
                        </div>
                        <div style={{display: 'table'}}>
                            <div style={{marginBottom: 6, display:'table-cell'}}>
                                <TextField label="Project" width={330} />
                            </div>
                            <div style={{marginBottom: 6, display:'table-cell', paddingLeft: 10}}>
                                <TextField label="Executive" width={305} labelWidth={80} />
                            </div>
                        </div>
                        <DetailPanel>
                        </DetailPanel>
                  </div>
            </div>
        );
    }
}
