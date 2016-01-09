'use strict';
/**
 * Smart Reception System
 * @author Jasim
 * @company E-Gov LLC
 *
 */
import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from 'eventemitter3';

import KendoWindow from 'imports?$=jquery!kendo-ui-core/src/kendo.window';

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
        console.log($(this.el))
        $('#vbv').kendoWindow({
            draggable: true,
            position: { left: '30%', top: '30%' }
        });
    }
    render() {
        return (
            <div id="vbv" className="x-unselectable" tabIndex="-1" ref="x-window" >
            lkjhlhkjkjh
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
    render() {
        return <div />
    }
}

/**
 * @class WindowManagerStore
 * @extends React.Component
 */
export var WindowManagerStore = Object.assign({}, EventEmitter.prototype, {

});
