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
import EventEmitter from 'eventemitter3';

import { Toolbar, ToolbarItem, ToolbarSeparator } from 'ux/toolbar/toolbar';

/**
 * Application Menu
 *
 * @class ApplicationMenu
 * @extends React.Component
 */
export class ApplicationMenu extends React.Component {
    /**
     * @constructor
     */
    constructor(args) {
        super(args);
    }

    /**
     * @render
     * @return {View} view
     */
    render() {
        return (
            <div className="page-header position-relative appmenu">
                <Toolbar>
                    <ToolbarItem text="File" icon="fa-th">
                        <ul>
                           <li>Tables & Chairs</li>
                           <li>Sofas</li>
                           <li>Occasional Furniture</li>
                           <li>Children's Furniture</li>
                           <li>Beds</li>
                       </ul>
                    </ToolbarItem>
                    <ToolbarSeparator />
                    <ToolbarItem text="Master" icon="fa-table">
                        <ul>
                           <li>Tables & Chairs</li>
                           <li>Sofas</li>
                           <li>Occasional Furniture</li>
                           <li>Children's Furniture</li>
                           <li>Beds</li>
                       </ul>
                    </ToolbarItem>
                    <ToolbarSeparator />
                    <ToolbarItem text="Transactions" icon="fa-calendar" />
                    <ToolbarSeparator />
                    <ToolbarItem text="Reports" icon="fa-twitter" />
                    <ToolbarSeparator />
                    <ToolbarItem text="Settings" icon="fa-cog" />
                    <ToolbarSeparator />
                    <ToolbarItem  text="Users & Roles" icon="fa-user" />
                    <ToolbarSeparator />
                    <ToolbarItem text="Help" icon="fa-question" />
                </Toolbar>
            </div>
        );
    }
}
