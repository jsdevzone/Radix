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
                 id : 'treenode - ' + (++this.id)
             });
         });
     }

    /**
     * @render
     * @return {HTMLDivElement} container
     */
    render() {
        return (
            <div className="p-treepanel">
                <ol className="p-tree-view p-list-tree p-has-collapsable-children">
                    { this.renderChildren() }
                </ol>
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
        /**
         * When there is no child items default tree node will be rendered.
         */

         let className = this.props.children ? "p-entry p-list-nested-item" : 'p-file p-entry p-list-item ';
         let textClassName = this.props.children ? "icon-file-directory": "icon-file-text"
        let component = (
            <li className={className}>
                <div className="p-header p-list-item">
                    <span className={"name icon " + textClassName}>{this.props.text}</span>
                </div>
                {
                this.renderSubTree()
                }
            </li>
        );

        return component;
    }

    renderSubTree() {
        if(this.props.children) {
            return (
                <ol className="p-entries p-list-tree">
                    { this.renderChildren() }
                </ol>
            );
        }
    }

    renderChildren() {
        return React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                onNodeClick: this.props.onNodeClick,
                key: index
            });
        });
    }
}
