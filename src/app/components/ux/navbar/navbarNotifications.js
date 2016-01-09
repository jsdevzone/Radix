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


/**
 * Navbar Notification Bar
 *
 * @class NotificationBar
 * @extends React.Component
 */
export class NavbarNotifications extends React.Component {

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
            <div className="navbar-header pull-right">
                <div className="navbar-account">
                    <ul className="account-area">
                        <li>
                            <a className=" dropdown-toggle" data-toggle="dropdown" title="Notifications" href="#" aria-expanded="false">
                                <i className="icon fa fa-warning"></i>
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-toggle" data-toggle="dropdown" title="Mails" href="#" aria-expanded="false">
                                <i className="icon fa fa-envelope"></i>
                                <span className="badge">3</span>
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-toggle" data-toggle="dropdown" title="Tasks" href="#" aria-expanded="false">
                                <i className="icon fa fa-tasks"></i>
                                <span className="badge">4</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
