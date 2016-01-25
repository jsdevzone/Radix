<<<<<<< HEAD
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
=======
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
>>>>>>> 5e4075ac19ec99d1671e7ea026093f99610fb30a
