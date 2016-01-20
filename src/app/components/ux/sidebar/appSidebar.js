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

import { UserProfile } from './userProfile';
import { TreeView, TreeNode } from '../tree/treeView';

/**
 * Application Modules here
 */
const modules = [
    { name: 'Company', icon: 'fa-table' },
    { name: 'Purchase', icon: 'fa-th' },
    { name: 'Sales', icon: 'fa-calendar' },
    { name: 'Bank', icon: 'fa-money' },
    { name: 'Settings', icon: 'fa-cog' }
];

/**
 * Application's  Sidebar
 * @class Application
 * @extends React.Component
 */
export class ApplicationSidebar extends React.Component {

    /**
     * @constructor
     */
    constructor() {
        super();

        /**
         * @state
         */
        this.state = {
            selectedIndex: 0
        };
    }

    /**
     * renders the sidebar vertical modules bar
     * @return {HTMLElement} div
     */
    renderModuleSidebar() {
        return (
            <div className="p-module-sidebar">
                <div className="p-module-sidebar-inner">
                {
                    modules.map((item, index) => {
                    return <div key={index} onClick={() => { this.setState({ selectedIndex: index })}}
                                className={"p-module-button " + (this.state.selectedIndex == index ? "p-active": "")}>
                                <i className={"fa " + item.icon}></i>{item.name}
                              </div>
                           })
                }
                </div>
            </div>
        );
    }

    /**
     * @render
     * @return {HTMLDivElement} container
     */
    render() {
        return (
            <div className="p-sidebar">
                <UserProfile />
                <div className="p-modules">
                { this.renderModuleSidebar() }
                    <div className="p-modules-content">
                        <div style={{height:40, marginBottom: 10 }}>
                            <input type="text" placeholder="Search your actions..."  style={{
                                width: '98%',height: 40, border: 'solid 1px transparent',
                                borderBottom: 'solid 1px #F4F4F4', padding: 10 }}/>
                        </div>
                        <TreeView>
                            <TreeNode text="Master">
                                <TreeNode text="Customers" />
                                <TreeNode text="Vendors" />
                                <TreeNode text="Product" />
                                <TreeNode text="Stock" />
                            </TreeNode>
                            <TreeNode text="Transactions">
                                <TreeNode text="Purchase Order" />
                                <TreeNode text="Purchase Return " />
                                <TreeNode text="Purchase Invoice" />
                                <TreeNode text="Delivery Challan" />
                                <TreeNode text="Bill Printing" />
                            </TreeNode>
                            <TreeNode text="Reports">
                                <TreeNode text="Purchase Register" />
                                <TreeNode text="Inward Register" />
                                <TreeNode text="Stock Register" />
                                <TreeNode text="Closing Stock" />
                                <TreeNode text="Tax Wise Register" />
                            </TreeNode>
                        </TreeView>
                    </div>
                </div>
            </div>
        );
    }
}

/**
 * @class Sidebar
 * @extends React.Component
 */
export class Sidebar extends React.Component {

    /**
     * @constructor
     */
    constructor() {
        super();

        /**
         * @state
         */
        this.state = {};
    }

    /**
     * @render
     * @return {HTMLElement} container
     */
    render() {
        return (
            <ul className="nav sidebar-menu">
                <SidebarItem icon="fa-table" text="Vendor" />
                <SidebarItem icon="fa-th" text="Purchase" isActive={true}>
                    <ul className="submenu">
                        <SidebarItem icon="fa-twitter" text="Reports" />
                        <SidebarItem icon="fa-money" text="Accounts" />
                        <SidebarItem icon="fa-cog" text="Settings" />
                    </ul>
                </SidebarItem>
                <SidebarItem icon="fa-twitter" text="Reports" />
                <SidebarItem icon="fa-money" text="Accounts" />
                <SidebarItem icon="fa-cog" text="Settings" />
            </ul>
        );
    }
}


/**
 * @class SidebarItem
 * @extends React.Component
 */
export class SidebarItem extends React.Component {

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
         * font icon class to display
         * @param {String} icon
         */
         this.defaultIcon =  "fa-table";
    }

    /**
     * @eventhandler
     * @param {Event} Event
     * @return {Void} undefined;
     */
    onClick(evt) {
        if(this.props.onClick)
            this.props.onClick();
    }

    /**
     * @render
     * @return {HTMLDivElement} container
     */
    render() {
        let cls = this.props.isActive ? "active open": "";
        return (
            <li className={cls} onClick={this.onClick.bind(this)}>
                <a href="#">
                    <i className={ "menu-icon fa " + this.props.icon || this.defaultIcon }></i>
                    <span className="menu-text">{ this.props.text }</span>
                </a>
                { this.props.children }
            </li>
        );
    }
}
