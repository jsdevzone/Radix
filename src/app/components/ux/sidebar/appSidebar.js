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
                <ul className="nav sidebar-menu">
                    <li>
                        <a href="databoxes.html">
                            <i className="menu-icon glyphicon glyphicon-tasks"></i>
                            <span className="menu-text"> Dashboard </span>
                        </a>
                    </li>
                    <li>
                        <a href="databoxes.html">
                            <i className="menu-icon fa fa-th"></i>
                            <span className="menu-text"> Vendor </span>
                        </a>
                    </li>
                    <li className="active open">
                        <a href="databoxes.html">
                            <i className="menu-icon fa fa-picture-o"></i>
                            <span className="menu-text"> Purchases </span>
                        </a>
                        <ul className="submenu">
                            <li>
                                <a href="form-layouts.html">
                                    <span className="menu-text">Form Layouts</span>
                                </a>
                            </li>

                            <li>
                                <a href="form-inputs.html">
                                    <span className="menu-text">Form Inputs</span>
                                </a>
                            </li>

                            <li>
                                <a href="form-pickers.html">
                                    <span className="menu-text">Data Pickers</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="form-wizard.html">
                                    <span className="menu-text">Wizard</span>
                                </a>
                            </li>
                            <li>
                                <a href="form-validation.html">
                                    <span className="menu-text">Validation</span>
                                </a>
                            </li>
                            <li>
                                <a href="form-editors.html">
                                    <span className="menu-text">Editors</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="databoxes.html">
                            <i className="menu-icon fa fa-bar-chart-o"></i>
                            <span className="menu-text"> Sales </span>
                        </a>
                    </li>
                    <li>
                        <a href="databoxes.html">
                            <i className="menu-icon fa fa-pencil"></i>
                            <span className="menu-text"> Reports </span>
                        </a>
                    </li>
                    <li>
                        <a href="databoxes.html">
                            <i className="menu-icon fa fa-pencil"></i>
                            <span className="menu-text"> Reports </span>
                        </a>
                    </li>
                    <li>
                        <a href="databoxes.html">
                            <i className="menu-icon fa fa-pencil"></i>
                            <span className="menu-text"> Reports </span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
