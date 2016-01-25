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
<<<<<<< HEAD
import { Window } from 'ux/window/window';
import { Toolbar, ToolbarItem, ToolbarSeparator } from 'ux/toolbar/toolbar';
import { Customer } from 'app/lookups/customer/customer';
import { Enquiry } from 'app/transaction/Enquiry';
import { Quotation } from 'app/transaction/Quotation';
import { SalesOrder } from 'app/transaction/SalesOrder';
import { DeliveryNote } from 'app/transaction/DeliveryNote';
import { Invoice } from 'app/transaction/Invoice';
import { ProFormaInvoice } from 'app/transaction/ProFormaInvoice';
import { PurchaseOrder } from 'app/purchase/PurchaseOrder'
=======

import { Window } from 'ux/window/window';
import { Toolbar, ToolbarItem, ToolbarSeparator } from 'ux/toolbar/toolbar';
import { Customer } from 'app/lookups/customer/customer';

>>>>>>> 5e4075ac19ec99d1671e7ea026093f99610fb30a
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

<<<<<<< HEAD
    onMenuClick(className) {
        Window.show(<PurchaseOrder />, { title: className, height: 500, width: 700 });
=======
    onMenuClick() {
        Window.show(<Customer/>, { title: 'Customer', height: 500, width: 700 });
>>>>>>> 5e4075ac19ec99d1671e7ea026093f99610fb30a
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
<<<<<<< HEAD
                            <div className="x-menu-item" onClick={this.onMenuClick.bind(this,"PurchaseOrder")}>
=======
                            <div className="x-menu-item">
>>>>>>> 5e4075ac19ec99d1671e7ea026093f99610fb30a
                                <u> </u>
                                <span className="x-menu-text">Company</span>
                                <span className="shortcut">Ctrl + C</span>
                            </div>
                            <div className="x-menu-item">
                                <u> </u>
                                <span className="x-menu-text">Financial Year</span>
                                <span className="shortcut">Ctrl + F</span>
                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item" onClick={this.onMenuClick.bind(this)}>
                                <u><i className="fa fa-user" style={{ color: '#62B2FF'}} /> </u>
                                <span className="x-menu-text">Customer</span>
                                <span className="shortcut" >Ctrl + O</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u><i className="fa fa-th" style={{ color: '#DF5138'}} /> </u>
                                <span className="x-menu-text">Product</span>

                            </div>
                            <div className="x-menu-item">
                                <u> </u>
                                <span className="x-menu-text">Stock</span>
                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Tax</span>
                                <span className="shortcut" >Ctrl + T</span>

                            </div>
                        </div>
                    </ToolbarItem>
                    <ToolbarSeparator />
                    <ToolbarItem text="Transactions" icon="fa-table">
                        <div className="x-menu">
                            <div className="x-menu-item">
                                <u> </u>
                                <span className="x-menu-text">Purchase</span>
                                <span className="shortcut" >Ctrl + P</span>
                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Sales</span>
                                <span className="shortcut" >Ctrl + S</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Inward Material</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Outward Material</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Product Barcode</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Label Printing</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Delivery Challan</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Bill Printing</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Receipt Voucher</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Payment Voucher</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Expense</span>
                                <span className="shortcut" >Ctrl +E</span>

                            </div>
                        </div>
                    </ToolbarItem>
                    <ToolbarSeparator />
                    <ToolbarItem text="Reports" icon="fa-calendar">

                        <div className="x-menu">
                            <div className="x-menu-item">
                                <u> </u>
                                <span className="x-menu-text">Purchase Register</span>
                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Sales Register</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Inward Register</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Outward Register</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Stock Register</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Closing Stock</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Godown Wise Register</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Tax Wise Register</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Product Wise Register</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Cash Book Register</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Expense Wise Register</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Party Wise Register</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Cash/Credit Sales</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Month wise Party wise Register</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Bank Book Register</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Attendance Register</span>
                                <span className="shortcut" >Ctrl + A</span>

                            </div>
                        </div>
                    </ToolbarItem>
                    <ToolbarSeparator />
                    <ToolbarItem text="Accounts" icon="fa-money">
                        <div className="x-menu">
                            <div className="x-menu-item">
                                <u> </u>
                                <span className="x-menu-text">Receipts</span>
                                <span className="shortcut">Ctrl + R</span>
                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Payments</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Cash/Bank</span>
                                <span className="shortcut" >Ctrl + C</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Journal</span>
                                <span className="shortcut" >Ctrl + J</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Bank Record</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Outstanding Reports</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Outstanding Debtors</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Outstanding Creditors</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Reports</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Trial Balance</span>

                            </div>
                            <div className="x-menu-divider"/>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Profile & Loss</span>

                            </div>
                            <div className="x-menu-item">

                                <u> </u>
                                <span className="x-menu-text">Balance Sheet</span>
                                <span className="shortcut" >Ctrl + B</span>

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
