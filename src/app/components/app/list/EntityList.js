'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from 'eventemitter3';
import { EntityManager } from 'core/EntityManager';
/**
 * Custom Class Header
 *
 * @class EntityList
 * @extends React.Component
 */
 export class EntityList extends React.Component {
     /**
      * @constructor
      */
     constructor(args) {
        super(args);

        /**
         * @state
         */
         this.state = {
             material:{}
         };
         var query = new breeze.EntityQuery.from('Customer');
         EntityManager.executeQuery(query)
     }

     componentDidMount() {
        var data = EntityQuery.from('Material');
        EntityManager.executeQuery(data).then(abc=>{
            this.setState({ material: abc.entities[0]})
        })
     }

     /**
      * @render
      * @return {View} view
      */
     render() {
         return (
            <div style={{backgroundColor: '#F8F8F8', height:'100%'}}>
                <table style={{width: '100%'}}>
                    <thead>
                        <tr>
                            <th>Item Code</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.material.MaterialCode}</td>
                            <td>{this.state.material.Name}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
         );
     }
 }
