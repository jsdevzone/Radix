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
