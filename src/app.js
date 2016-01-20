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

import { Window, WindowManager, WindowManagerStore } from 'ux/window/Window';
import { Navbar } from 'ux/navbar/navbar';
import { ApplicationMenu } from 'ux/appmenu/applicationMenu';
import { ApplicationSidebar } from 'ux/sidebar/appSidebar';
import { TileView } from 'ux/tile/tileView';
import { TransactionTileView } from 'ux/tile/transactionTileView'
import { TileBar } from 'ux/tile/tileBar';
import { Toolbar, ToolbarItem, ToolbarSeparator } from 'ux/toolbar/toolbar';
import { Menu, MenuItem } from 'ux/toolbar/menu';
import { TabPanel, Tab } from 'ux/tab/tabPanel';
import { CollapsibleSidebar } from 'ux/sidebar/collapsibleSidebar';

/**
 * Load common style sheet
 * @bootstrap
 * @font-awesome
 * @application
 */
import 'bootstrap/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'animatecss';
import 'styles/app.less';

/**
 * Application's Entry point
 * @class Application
 * @extends React.Component
 */
class Application extends React.Component {

    componentDidMount() {

    }

    /**
     * @render
     * @return {HTMLDivElement} container
     */
    render() {
        return (
            <div className="ptrix-container">
                <Navbar />
                <ApplicationMenu />
                <div className="x-app-container">
                    <ApplicationSidebar />
                    <div style={{ flex: 1, display:'flex', flexDirection: 'column'}}>
                        <div style={{ paddingLeft: 10, paddingBottom: 0, backgroundColor: 'white', borderBottom: 'solid 1px #D4D4D4'}}>
                            <ul className="p-dashboard-statitics clearfix">
                                <li>
                                    <span className="title">
                                        <i className="fa fa-dot-circle-o"></i> Today Profit dfgdfgdfg
                                    </span>
                                    <h3>$36.45</h3>
                                    <span className="diff">
                                        <b className="color-down">
                                            <i className="fa fa-caret-down"></i> 26%</b> from yesterday</span>
                                </li>
                                <li>
                                    <span className="title">
                                        <i className="fa fa-calendar-o"></i> Today Profit
                                    </span>
                                    <h3>$36.45</h3>
                                    <span className="diff">
                                        <b className="color-up">
                                            <i className="fa fa-caret-down"></i> 26%</b> from last week
                                    </span>
                                </li>
                                <li>
                                    <span className="title">
                                        <i className="fa fa fa-shopping-cart"></i> Total Sales
                                    </span>
                                    <h3 className="color-up">696</h3>
                                    <span className="diff">
                                        <b className="color-down">
                                            <i className="fa fa-caret-up"></i> 26%</b> from last month
                                    </span>
                                </li>
                                <li>
                                    <span className="title">
                                        <i className="fa fa-clock-o"></i> Visitors</span>
                                    <h3>960</h3>
                                    <span className="diff">
                                        <b className="color-down">
                                            <i className="fa fa-caret-down"></i> 26%</b>
                                            from yesterday
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <TabPanel>
                            <Tab title="Welcome">

                                <div style={{ backgroundColor: '#ECEEF1',    padding: 0, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'row' }}>
                                    <div className="p-welcome" style={{ flex: 1}}>
                                        <div className="welcome-logo">
                                            <img src="assets/images/theme/cloud9_logo.png " />
                                            <div className="welcome-heading">Welcome</div>
                                            <div className="presets">
                                                <h3>Select an action</h3>
                                                <div className="preset-container">

                                                    <TileView>
                                                    </TileView>
                                                </div>
                                            </div>
                                            <div className="presets" style = {{marginTop: '-18px'}}>
                                            <h3>Select an action</h3>
                                            <div className="preset-container">

                                              <TransactionTileView>
                                              </TransactionTileView>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-panel">
                                    <div className="p-scroller">
                                    <div className="p-frame">
                                        <div className="p-title">
                                            <i className="fa fa-angle-right" />
                                            <span>Recent Purchasr Orders</span>
                                        </div>
                                        <div className="p-body">
                                            <div className="p-table">
                                                <div className="p-headings">
                                                    <span className="p-column " style={{ width: '50%'}}>Customer</span>
                                                    <span className="p-column " style={{ width: '30%'}}>Date</span>
                                                    <span className="p-column " style={{ width: '20%'}}>Amount</span>
                                                </div>
                                                <div>
                                                    <div className="p-row">
                                                    <span className="p-column " style={{ width: '50%'}}>Carey Leffler</span>
                                                    <span className="p-column " style={{ width: '30%'}}>10/12/2014</span>
                                                    <span className="p-column " style={{ width: '20%'}}>$100.00</span>
                                                    </div>
                                                    <div className="p-row">
                                                    <span className="p-column " style={{ width: '50%'}}>Russel Esmedilla</span>
                                                    <span className="p-column " style={{ width: '30%'}}>10/10/2014</span>
                                                    <span className="p-column " style={{ width: '20%'}}>$450.00</span>
                                                    </div>
                                                    <div className="p-row">
                                                    <span className="p-column " style={{ width: '50%'}}>Brennan Hagenes</span>
                                                    <span className="p-column " style={{ width: '30%'}}>10/05/2015</span>
                                                    <span className="p-column " style={{ width: '20%'}}>$120.00</span>
                                                    </div>
                                                    <div className="p-row">
                                                    <span className="p-column " style={{ width: '50%'}}>Nikolas Rau</span>
                                                    <span className="p-column " style={{ width: '30%'}}>10/02/2014</span>
                                                    <span className="p-column " style={{ width: '20%'}}>$250.00</span>
                                                    </div>
                                                    <div className="p-row">
                                                    <span className="p-column " style={{ width: '50%'}}>Brandyn Larkin</span>
                                                    <span className="p-column " style={{ width: '30%'}}>05/05/2013</span>
                                                    <span className="p-column " style={{ width: '20%'}}>$375.25</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-frame">
                                        <div className="p-title">
                                            <i className="fa fa-angle-right" />
                                            <span>Recent Invoices</span>
                                        </div>
                                        <div className="p-body">
                                        <div className="p-table">
                                            <div className="p-headings">
                                                <span className="p-column " style={{ width: '50%'}}>Customer</span>
                                                <span className="p-column " style={{ width: '30%'}}>Date</span>
                                                <span className="p-column " style={{ width: '20%'}}>Amount</span>
                                            </div>
                                            <div>
                                                <div className="p-row">
                                                <span className="p-column " style={{ width: '50%'}}>Carey Leffler</span>
                                                <span className="p-column " style={{ width: '30%'}}>10/12/2014</span>
                                                <span className="p-column " style={{ width: '20%'}}>$100.00</span>
                                                </div>
                                                <div className="p-row">
                                                <span className="p-column " style={{ width: '50%'}}>Russel Esmedilla</span>
                                                <span className="p-column " style={{ width: '30%'}}>10/10/2014</span>
                                                <span className="p-column " style={{ width: '20%'}}>$450.00</span>
                                                </div>
                                                <div className="p-row">
                                                <span className="p-column " style={{ width: '50%'}}>Brennan Hagenes</span>
                                                <span className="p-column " style={{ width: '30%'}}>10/05/2015</span>
                                                <span className="p-column " style={{ width: '20%'}}>$120.00</span>
                                                </div>
                                                <div className="p-row">
                                                <span className="p-column " style={{ width: '50%'}}>Nikolas Rau</span>
                                                <span className="p-column " style={{ width: '30%'}}>10/02/2014</span>
                                                <span className="p-column " style={{ width: '20%'}}>$250.00</span>
                                                </div>
                                                <div className="p-row">
                                                <span className="p-column " style={{ width: '50%'}}>Brandyn Larkin</span>
                                                <span className="p-column " style={{ width: '30%'}}>05/05/2013</span>
                                                <span className="p-column " style={{ width: '20%'}}>$375.25</span>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="p-frame">
                                        <div className="p-title">
                                            <i className="fa fa-angle-right" />
                                            <span>Bank Statements</span>
                                        </div>
                                        <div className="p-body">
                                        <div className="p-table">
                                            <div className="p-headings">
                                                <span className="p-column " style={{ width: '50%'}}>Customer</span>
                                                <span className="p-column " style={{ width: '30%'}}>Date</span>
                                                <span className="p-column " style={{ width: '20%'}}>Amount</span>
                                            </div>
                                            <div>
                                                <div className="p-row">
                                                <span className="p-column " style={{ width: '50%'}}>Carey Leffler</span>
                                                <span className="p-column " style={{ width: '30%'}}>10/12/2014</span>
                                                <span className="p-column " style={{ width: '20%'}}>$100.00</span>
                                                </div>
                                                <div className="p-row">
                                                <span className="p-column " style={{ width: '50%'}}>Russel Esmedilla</span>
                                                <span className="p-column " style={{ width: '30%'}}>10/10/2014</span>
                                                <span className="p-column " style={{ width: '20%'}}>$450.00</span>
                                                </div>
                                                <div className="p-row">
                                                <span className="p-column " style={{ width: '50%'}}>Brennan Hagenes</span>
                                                <span className="p-column " style={{ width: '30%'}}>10/05/2015</span>
                                                <span className="p-column " style={{ width: '20%'}}>$120.00</span>
                                                </div>
                                                <div className="p-row">
                                                <span className="p-column " style={{ width: '50%'}}>Nikolas Rau</span>
                                                <span className="p-column " style={{ width: '30%'}}>10/02/2014</span>
                                                <span className="p-column " style={{ width: '20%'}}>$250.00</span>
                                                </div>
                                                <div className="p-row">
                                                <span className="p-column " style={{ width: '50%'}}>Brandyn Larkin</span>
                                                <span className="p-column " style={{ width: '30%'}}>05/05/2013</span>
                                                <span className="p-column " style={{ width: '20%'}}>$375.25</span>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>


                            </Tab>
                            <Tab title="Purchase Order List">
                            dvfsdfasdasdasdfasdf
                            </Tab>

                        </TabPanel>
                        <div className="p-tool-panel">
                            <div className="p-status-bar">
                                <div className="p-flexbox-repaint-hack"></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: 35, borderLeft: 'solid 1px #DDDDDD'}}>
<div className="p-module-sidebar p-right" >
<div className="p-module-sidebar-inner" >
<div className="p-module-button" >
<i className="fa fa-table"></i>
<span>Company</span></div>

<div className="p-module-button "><i className="fa fa-th" ></i><span >Purchase</span></div>
<div className="p-module-button " ><i className="fa fa-calendar"></i><span >Sales</span></div><div className="p-module-button " >
<i className="fa fa-money" ></i><span >Bank</span></div><div className="p-module-button " >
<i className="fa fa-cog"></i><span >Settings</span></div></div></div>
                    </div>
                </div>

            </div>
        );
    }
}

/**
 * Render to dom
 */
ReactDOM.render(<Application />, document.getElementById('app'));
