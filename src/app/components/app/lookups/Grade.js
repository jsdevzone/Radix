
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
 * @class Grade
 * @extends React.Component
 */
 export class Grade extends React.Component {
     /**
      * @constructor
      */
     constructor(args) {
        super(args);

        /**
         * @state
         */
         this.state = {
            grade: {}
         };
     }

     changeValues(value, field) {
        let grade = this.state.grade;
        grade[field] = value;
        this.setState({ grade: grade });
     }

     saveGrade() {
         /*var service = "http://localhost:19377/breeze/radix/";
         var EntityManager = new breeze.EntityManager(service);
         var grade = EntityManager.createEntity('Grade', this.state.grade);
         EntityManager.addEntity(grade);
         EntityManager.saveChanges();*/
         var data = this.state.grade;
         $.ajax({
            url: 'http://localhost:10946/api/grade/save',
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
        });
     }

     /**
      * @render
      * @return {View} view
      */
     render() {
         return (
             <div style={{backgroundColor: '#F8F8F8', height:'100%'}}>
               <FormToolbar onSave={this.saveGrade.bind(this)} />
               <div style={{height: 60, backgroundColor:'#FFF', borderBottom: 'solid 1px #D1D1D1'}}>
               </div>
                <div style={{padding: 10, margin: 10, border: 'solid 1px #D1D1D1'}}>

                     <div style={{marginBottom: 6}}>
                         <TextField value={this.state.grade.Name} onChange={(value) => { this.changeValues(value, 'Name') }} label="Grade" width={420} />
                     </div>
                 </div>
                 </div>
             );
     }
 }
