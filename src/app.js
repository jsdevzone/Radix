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
                    <ApplicationMenu />
                    <div className="x-app-container">
                        <ApplicationSidebar />
                        <div style={{ flex: 1, display:'flex', flexDirection: 'column'}}>
                            <TabPanel>
                                <Tab title="Welcome">
                                dvfsdfasdfasdf
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
                    </div>

            </div>
        );
    }
}

/**
 * Render to dom
 */
ReactDOM.render(<Application />, document.getElementById('app'));
