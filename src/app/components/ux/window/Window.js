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
import Draggabilly from 'imports?$=jquery!draggabilly/dist/draggabilly.pkgd';
import KendoWindow from 'imports?$=jquery!kendo-ui-core/src/kendo.window';
import { Toolbar, ToolbarItem, ToolbarSeparator } from 'ux/toolbar/toolbar';
import { TabPanel, Tab } from 'ux/tab/tabPanel';

import './window.scss';

var initialIndex = 1;

/**
 * Dialog Window
 *
 * @class Window
 * @extends React.Component
 */
export class Window extends React.Component {
    constructor() {
        super();
        this.state = { name: 'Name State' };
    }
    componentWillMount() {
        console.log(this.refs, 'From Will');
    }
    componentDidMount() {
        this.el = this.refs['x-window'];
        new Draggabilly( this.el, {});
    }
    render() {
        return (
            <div className="x-window x-unselectable" tabIndex="-1" ref="x-window" onClick={()=>{
                this.el.style.zIndex = ++WindowManagerStore.zindex;
            }}>
                <div className="x-window-title x-unselectable" ref="x-window-title">
                    { this.props.title || "Folder Access Denied" }
                    <div className="x-tool-wrap">
                        <i className="fa fa-close x-tool" ref="x-tool-close"></i>
                    </div>
                </div>
                <div>
                <div id="vbv" className="x-unselectable" tabIndex="-1" ref="x-window">
                    <div className="toolbar-wrapper">
                        <Toolbar>
                            <ToolbarItem text="File" icon="fa-th" />
                            <ToolbarSeparator />
                            <ToolbarItem text="Master" icon="fa-table" />
                            <ToolbarSeparator />
                            <ToolbarItem text="Transactions" icon="fa-calendar" />
                            <ToolbarSeparator />
                            <ToolbarItem text="Reports" icon="fa-twitter" />
                            <ToolbarSeparator />
                            <ToolbarItem text="Settings" icon="fa-cog" />
                            <ToolbarSeparator />
                            <ToolbarItem  text="Users & Roles" icon="fa-user" />
                            <ToolbarSeparator />
                            <ToolbarItem text="Help" icon="fa-question" />
                        </Toolbar>
                    </div>
                    <div style={{ padding: 10 }}>
                        <table>
                            <tr><td>Customer Id</td><td>:</td><td><input type="text" style={{ width: 50 }} className="form-control" /></td></tr>
                            <tr><td>Customer Name</td><td>:</td><td><input type="text" style={{ width: 250 }} className="form-control" /></td></tr>
                        </table>
                        <div style={{marginTop: 10}}>
                        <TabPanel ref="tab">
                            <Tab title="Basic Information" icon="fa-user">
                            <div>
                            <table>
                                <tr>
                                    <td>Bill To Contact</td>
                                    <td>:</td>
                                    <td><input type="text" style={{ width: 200 }} className="form-control" /> </td>
                                    <td>Customer Type</td>
                                    <td>:</td>
                                    <td>
                                        <select type="text" style={{ width: 75 }} >
                                            <option>Type One</option>
                                            <option>Type Two</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Account Number</td>
                                    <td>:</td>
                                    <td><input type="text" style={{ width: 200 }} className="form-control" /> </td>
                                </tr>
                                <tr>
                                    <td>Billing Address</td>
                                    <td>:</td>
                                    <td><input type="text" style={{ width: 200 }} className="form-control" /> </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td><input type="text" style={{ width: 200 }} className="form-control" /> </td>
                                </tr>
                                <tr>
                                    <td>City, St, Zip</td>
                                    <td>:</td>
                                    <td>
                                        <input type="text" style={{ width: 60, display:'table-cell' }} className="form-control" />
                                        <input type="text" style={{ width: 30,marginLeft:10, marginRight: 10, display:'table-cell' }} className="form-control" />
                                        <input type="text" style={{ width: 39, display:'table-cell' }} className="form-control" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Country</td>
                                    <td>:</td>
                                    <td><input type="text" style={{ width: 200 }} className="form-control" /> </td>
                                </tr>
                                <tr>
                                    <td>Sales Tax</td>
                                    <td>:</td>
                                    <td><input type="text" style={{ width: 200 }} className="form-control" /> </td>
                                </tr>
                            </table>
                            </div></Tab>
                            <Tab title="Two" icon="fa-th"><div>two</div></Tab>
                            <Tab title="Three" icon="fa-twitter"><div>three</div></Tab>
                        </TabPanel>


                                <div>sdjfhsd</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        );
    }
}

/*
<div className="x-window x-unselectable" tabIndex="-1" ref="x-window">
    <div className="x-window-title x-unselectable" ref="x-window-title">
        <image src={src} />
        { this.props.title || "Folder Access Denied" }
        <div className="x-tool-wrap">
            <i className="fa fa-close x-tool" ref="x-tool-close"></i>
        </div>
    </div>
    <div>
        {this.props.children}
    </div>
</div>
*/


/**
 * Dialog Window
 *
 * @class Window
 * @extends React.Component
 */
export class WindowManager extends React.Component {
    constructor(){
        super();
        this.state = {
            windows: []
        };
        WindowManagerStore.on('change', (c)=>{
            let ax= this.state.windows;
            ax.push(c)
            this.setState({ windows: ax})
        })
    }
    render() {
        return (
            <div>
{this.state.windows.map((item)=>{
    return item.component
})}
            </div>
        );
    }
}

/**
 * @class WindowManagerStore
 * @extends React.Component
 */
export var WindowManagerStore = Object.assign({}, EventEmitter.prototype, {

    wid: 1,

    zindex: 999,

    add: function(c) {
        this.emit('change', {
            component: c,
            wid: ++this.wid
        });
    }
});
