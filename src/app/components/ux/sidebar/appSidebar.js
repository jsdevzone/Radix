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

    componentDidMount() {
        $(".sidebar-toggler").on("click", function() {
      return $("#sidebar").toggleClass("hide"),
      $(".sidebar-toggler").toggleClass("active"),
      !1
  });
  var n = $("#sidebar").hasClass("menu-compact");
  $("#sidebar-collapse").on("click", function() {
      if ($("#sidebar").is(":visible") || $("#sidebar").toggleClass("hide"),
      $("#sidebar").toggleClass("menu-compact"),
      $(".sidebar-collapse").toggleClass("active"),
      n = $("#sidebar").hasClass("menu-compact"),
      $(".sidebar-menu").closest("div").hasClass("slimScrollDiv") && ($(".sidebar-menu").slimScroll({
          destroy: !0
      }),
      $(".sidebar-menu").attr("style", "")),
      n)
          $(".open > .submenu").removeClass("open");
      else if ($(".page-sidebar").hasClass("sidebar-fixed")) {
          var t = readCookie("rtl-support") || location.pathname == "/index-rtl-fa.html" || location.pathname == "/index-rtl-ar.html" ? "right" : "left";
          $(".sidebar-menu").slimscroll({
              height: "auto",
              position: t,
              size: "3px",
              color: themeprimary
          })
      }
  });
  $(".sidebar-menu").on("click", function(t) {
      var i = $(t.target).closest("a"), u, r, f;
      if (i && i.length != 0) {
          if (!i.hasClass("menu-dropdown"))
              return n && i.get(0).parentNode.parentNode == this && (u = i.find(".menu-text").get(0),
              t.target != u && !$.contains(u, t.target)) ? !1 : void 0;
          if (r = i.next().get(0),
          !$(r).is(":visible")) {
              if (f = $(r.parentNode).closest("ul"),
              n && f.hasClass("sidebar-menu"))
                  return;
              f.find("> .open > .submenu").each(function() {
                  this == r || $(this.parentNode).hasClass("active") || $(this).slideUp(200).parent().removeClass("open")
              })
          }
          return n && $(r.parentNode.parentNode).hasClass("sidebar-menu") ? !1 : ($(r).slideToggle(200).parent().toggleClass("open"),
          !1)
      }
  })
    }

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
                        <a href="#">
                            <i className="menu-icon glyphicon glyphicon-tasks"></i>
                            <span className="menu-text"> Dashboard </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="menu-icon fa fa-th"></i>
                            <span className="menu-text"> Vendor </span>
                        </a>
                    </li>
                    <li className="active open">
                        <a href="#">
                            <i className="menu-icon fa fa-picture-o"></i>
                            <span className="menu-text"> Purchases </span>
                        </a>
                        <ul className="submenu">
                            <li>
                                <a href="#">
                                    <span className="menu-text">Form Layouts</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <span className="menu-text">Form Inputs</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <span className="menu-text">Data Pickers</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#">
                                    <span className="menu-text">Wizard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="menu-text">Validation</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="menu-text">Editors</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className="menu-icon fa fa-bar-chart-o"></i>
                            <span className="menu-text"> Sales </span>
                        </a>
                        <ul className="submenu">
                            <li>
                                <a href="#">
                                    <span className="menu-text">Form Layouts</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <span className="menu-text">Form Inputs</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <span className="menu-text">Data Pickers</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#">
                                    <span className="menu-text">Wizard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="menu-text">Validation</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="menu-text">Editors</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className="menu-icon fa fa-pencil"></i>
                            <span className="menu-text"> Reports </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="menu-icon fa fa-pencil"></i>
                            <span className="menu-text"> Reports </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="menu-icon fa fa-pencil"></i>
                            <span className="menu-text"> Reports </span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
