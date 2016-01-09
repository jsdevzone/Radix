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
            <div className="sidebar-header-wrapper">
                <div className="userprofile">
                    <div className="userprofile-body tabular">
                        <div className="tabular-row">
                            <div className="tabular-cell user-avatar">
                                <a href="#">
                                    <img src="/assets/images/theme/avatars/John-Smith.jpg" />
                                </a>
                            </div>
                            <div className="tabular-cell user-info">
                                <span className="welcome-text">Welcome,</span>
                                <a href="#" className="user-name">Muhammed Jasim</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
