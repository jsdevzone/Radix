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
                    <ToolbarItem text="Party Master" icon="fa-th">
                        <div className="x-menu">
                            <div className="x-menu-item">
                                <u> </u>
                                <span className="x-menu-text">Company</span>
                                <span className="shortcut">⌘ ⌥ P</span>
                            </div>
                            <div className="x-menu-item">
                                <u> </u>
                                <span className="x-menu-text">Financial Year</span>
                                <span className="shortcut">⌘ ⌥ P</span>
                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u><i className="fa fa-user" style={{ color: '#62B2FF'}} /> </u>
                                <span className="x-menu-text">Customer</span>
                                <span className="shortcut" >Ctrl + C</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u><i className="fa fa-th" style={{ color: '#DF5138'}} /> </u>
                                <span className="x-menu-text">Product</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Stock</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-divider"/>
                                <div className="x-menu-item">

                                    <u> </u>
                                    <span className="x-menu-text">Tax</span>
                                    <span className="shortcut" >⌘ ⌥ P</span>

                                </div>
                            </div>
                    </ToolbarItem>
                    <ToolbarSeparator />
                    <ToolbarItem text="Master" icon="fa-table">
                        <div className="x-menu">
                            <div className="x-menu-item">
                                <u> </u>
                                <span className="x-menu-text">Process List</span>
                                <span className="shortcut">⌘ ⌥ P</span>
                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                            <u> </u>
                            <span className="x-menu-text">Edit your configuration</span>
                            <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                            <u> </u>
                            <span className="x-menu-text">File</span>
                            <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                            <u> </u>
                            <span className="x-menu-text">Configuration</span>
                            <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            </div>
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
