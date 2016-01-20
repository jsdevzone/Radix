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
 * User profile to be displayed in the sidebar
 * @class UserProfile
 * @extends React.Component
 */
export class UserProfile extends React.Component {

    /**
     * @render
     * @return {HTMLDivElement} container
     */
    render() {
        return (
            <div className="p-user-profile">
                <div className="p-tabular-row">
                    <div className="p-tabular-cell p-user-avatar">
                        <a href="#">
                            <img src="/assets/images/theme/avatars/John-Smith.jpg" />
                        </a>
                    </div>
                    <div className="p-tabular-cell user-info">
                        <span className="welcome-text">Welcome,</span>
                        <a href="#" className="user-name">Muhammed Jasim</a>
                    </div>
                </div>
                <div style={{padding: 10, textAlign: 'center'}}>
                    <span className="p-user-profile-action">
                        <i className="fa fa-cog"></i>
                    </span>
                    <span className="p-user-profile-action">
                        <i className="fa fa-power-off"></i>
                    </span>
                    <span className="p-user-profile-action">
                        <i className="fa fa-user"></i>
                    </span>
                    <span className="p-user-profile-action">
                        <i className="fa fa-key"></i>
                    </span>
                </div>
            </div>
        );
    }
}
