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
                    <ToolbarItem text="Transactions" icon="fa-table">
                        <div className="x-menu">
                            <div className="x-menu-item">
                                <u> </u>
                                <span className="x-menu-text">Purchase</span>
                                <span className="shortcut">⌘ ⌥ P</span>
                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Sales</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Inward Material</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Outward Material</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Product Barcode</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Label Printing</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Delivery Challan</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Bill Printing</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Receipt Voucher</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Payment Voucher</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Expense</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                        </div>
                    </ToolbarItem>
                    <ToolbarSeparator />
                    <ToolbarItem text="Reports" icon="fa-calendar">

                        <div className="x-menu">
                            <div className="x-menu-item">
                                <u> </u>
                                <span className="x-menu-text">Purchase Register</span>
                                <span className="shortcut">⌘ ⌥ P</span>
                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Sales Register</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Inward Register</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Outward Register</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Stock Register</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Closing Stock</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Godown Wise Register</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Tax Wise Register</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Product Wise Register</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Cash Book Register</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Expense Wise Register</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Party Wise Register</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Cash/Credit Sales</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Month wise Party wise Register</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Bank Book Register</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Attendance Register</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                        </div>
                    </ToolbarItem>
                    <ToolbarSeparator />
                    <ToolbarItem text="Accounts" icon="fa-money">
                        <div className="x-menu">
                            <div className="x-menu-item">
                                <u> </u>
                                <span className="x-menu-text">Receipts</span>
                                <span className="shortcut">⌘ ⌥ P</span>
                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Payments</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Cash/Bank</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Journal</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Bank Record</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Outstanding Reports</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Outstanding Debtors</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Outstanding Creditors</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Reports</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Trial Balance</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Profile & Loss</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Balance Sheet</span>
                                <span className="shortcut" >⌘ ⌥ P</span>

                            </div>
                        </div>
                    </ToolbarItem>
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
