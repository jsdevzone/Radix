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
                <div className="main-container container-fluid">
                    <div className="page-container">
                        <ApplicationMenu />
                        <div style={{ height:'600px', paddingLeft: 50}}>

                        <CollapsibleSidebar>
                            <div title="Purchase">Purchase</div>
                            <div title="Sales">Sales</div>
                            <div title="Finance" >Finance</div>
                            <div title="Company">Company</div>
                        </CollapsibleSidebar>

                        <div style={{ paddingTop: 100, marginLeft: 400, width:400 , height: 300}}>
                        <TabPanel>
                        <Tab title="jkhjkhk"></Tab>
                        <Tab title="jkhjkhk"></Tab>
                        <Tab title="jkhjkhk"></Tab>
                        </TabPanel>
                        </div>
                        </div>
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
