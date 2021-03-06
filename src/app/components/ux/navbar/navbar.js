'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from 'eventemitter3';

import { NavbarBrand } from './navbarBrand';
import { NavbarNotifications } from './navbarNotifications';

/**
 * Navigation Bar
 *
 * @class Navbar
 * @extends React.Component
 */
export class Navbar extends React.Component {
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
            <div className="navbar">
                <div className="navbar-inner">
                    <div className="navbar-container">
                        <NavbarBrand />
                        <div className="sidebar-collapse">
                            <i className="collapse-icon fa fa-bars"></i>
                        </div>
                        <NavbarNotifications />
                    </div>
                </div>
            </div>
        );
    }
}
