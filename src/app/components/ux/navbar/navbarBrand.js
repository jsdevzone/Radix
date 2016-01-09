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

/**
 * Application Brand
 *
 * @class NavbarBrand
 * @extends React.Component
 */
export class NavbarBrand extends React.Component {
    /**
     * @render
     * @return {View} view
     */
    render() {
        return (
            <div className="navbar-header pull-left">
                <a href="#" className="navbar-brand">
                    <small>
                        <img src="../assets/images/theme/logo.png" alt="" />
                    </small>
                </a>
            </div>
        );
    }
}
