/**
 * Radix Accounting System
 * @author Jasim
 * @company Palmtrix Solutions, Cochin
 *
 * Copyright (C) 2015-2016 Palmtrix Solutions <info@palmtrix.com>
 *
 * Radix can not be copied and/or distributed without the express
 * permission of Palmtrix Solutions, Cochin.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Custom Tree View
 * @class TreeView
 * @extends React.Component
 */
export class TreeView extends React.Component {

    /**
     * @constructor
     */
     constructor() {
         super();

         /**
          * @state
          */
         this.state = {};

         /**
          * Custom Id Manager
          */
          this.id = 1;
     }

     renderChildren() {
         return React.Children.map(this.props.children, (child) => {
             return React.cloneElement(child, {
                 isSelected: true,
                 id : 'treenode - ' + (++this.id),
                 onNodeClick: this.props.onNodeClick
             });
         });
     }

    /**
     * @render
     * @return {HTMLDivElement} container
     */
    render() {
        return (
            <div className="sidebar-tree tree">
                { this.renderChildren() }
            </div>
        );
    }
}


/**
 * Single Node in Tree
 * @class TreeNode
 * @extends React.Component
 */
export class TreeNode extends React.Component {

    /**
     * @constructor
     */
    constructor() {
        super();

        /**
         * @state
         */
         this.state = {
             isExpanded: true
         };
    }

    /**
     * @eventlistener
     * On Node Click event handler
     */
    onNodeClick(e) {
        this.setState({ isExpanded: !this.state.isExpanded });
    }

    /**
     * @render
     * @return {HTMLDivElement} container
     */
    render() {
        console.log(this.props.id)
        /**
         * Loading spinner to be displayed on  load of child components.
         */
        let treeLoaderComponent = (
            <div tabIndex="-1" className="tree-loader" style={{ display: 'none' }} data-id={this.props.id}>
                <div className="tree-loading">
                    <i className="fa fa-rotate-right fa-spin blue"></i>
                </div>
            </div>
        );

        /**
         * When there is no child items default tree node will be rendered.
         */
        let component = (
            <div tabIndex="-1" 
            onClick={this.props.onNodeClick} data-id={this.props.id}
            className={ "tree-item " + (this.props.isSelected ? "tree-selected" : "") }>
                <i className="tree-dot"></i>
                <div className="tree-item-name">
                    <i className="fa fa-bell gold"></i>
                    { this.props.text }
                </div>
            </div>
        );

        let icon = this.state.isExpanded ? "fa-folder-open" : "fa-folder";

        if(this.props.children) {
            component = (
                <div className="tree-folder" data-id={this.props.id}>
                    <div className="tree-folder-header" onClick={this.onNodeClick.bind(this)}>
                        <i className={"blue fa " + icon}></i>
                        <div className="tree-folder-name">{this.props.text}</div>
                    </div>
                    <div className="tree-folder-content" style={{ display: this.state.isExpanded ? "block": "none" }}>
                        { this.renderChildren() }
                    </div>
                    { treeLoaderComponent }
                </div>
            );
        }

        return component;
    }

    renderChildren() {
        return React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                onNodeClick: this.props.onNodeClick
            });
        });
    }
}
