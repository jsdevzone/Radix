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
 * Application's  Sidebar
 * @class Application
 * @extends React.Component
 */
export class ApplicationSidebar extends React.Component {

    /**
     * @render
     * @return {HTMLDivElement} container
     */
    render() {
        return (
            <div className="page-sidebar">
                <UserProfile />
                <Sidebar />
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
