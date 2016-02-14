Ext.define('Radix.view.RadixViewport',  {
    extend: 'Ext.container.Container',
    requires: [
        'Radix.view.ux.navbar.Navbar',
        'Radix.view.ux.Tile',
        'Radix.view.ux.DashboardCount',
        'Radix.view.ux.UserProfile'
    ],
    initComponent: function() {
        var self = this;

        Ext.apply(self, {
            layout: self.prepareLayout(),
            items: [
                {
                    xtype: 'navbar'
                },
                {
                    xtype: 'toolbar',
                    height: 38,
                    cls: 'p-app-toolbar',
                    items: [
                        {
                            text: 'Party Master',
                            glyph: 0xf0ce,
                            menu: {
                                xtype: 'menu',
                                items: [
                                    {
                                        text: 'Customer Manager'
                                    },
                                    {
                                        text: 'Customer Manager'
                                    },
                                    {
                                        text: 'Customer Manager'
                                    },
                                    {
                                        text: 'Customer Manager'
                                    },
                                    {
                                        text: 'Customer Manager'
                                    },
                                    {
                                        text: 'Customer Manager'
                                    },
                                    {
                                        text: 'Customer Manager'
                                    },
                                    {
                                        text: 'Customer Manager'
                                    },
                                    {
                                        text: 'Customer Manager'
                                    },

                                ]
                            }
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            text: 'Transactions',
                            glyph: 0xf00a
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            text: 'Reports',
                            glyph: 0xf073
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            text: 'Accounts',
                            glyph: 0xf0d6
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            text: 'Settings',
                            glyph: 0xf085
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            text: 'Users & Roles',
                            glyph: 0xf007
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            text: 'Help',
                            glyph: 0xf059
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    layout: {
                        type: 'hbox',
                        align: 'stretch',
                        pack: 'start'
                    },
                    items: [
                        {
                            xtype: 'container',
                            width: 230,
                            style: 'border-right: solid 1px #D4D4D4',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'userprofile'
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'container',
                                            cls: 'p-module-sidebar',
                                            width: 40,
                                            items: [
                                                {
                                                    xtype: 'container',
                                                    cls: 'p-module-sidebar-inner',
                                                    items: [
                                                        {
                                                            xtype: 'box',
                                                            html: '<i class="fa fa-table"></i>Company',
                                                            cls: 'p-module-button p-active'
                                                        },
                                                        {
                                                            xtype: 'box',
                                                            html: '<i class="fa fa-th"></i>Purchase',
                                                            cls: 'p-module-button'
                                                        },
                                                        {
                                                            xtype: 'box',
                                                            html: '<i class="fa fa-calendar"></i>Sales',
                                                            cls: 'p-module-button'
                                                        },
                                                        {
                                                            xtype: 'box',
                                                            html: '<i class="fa fa-money"></i>Bank',
                                                            cls: 'p-module-button'
                                                        },
                                                        {
                                                            xtype: 'box',
                                                            html: '<i class="fa fa-cog"></i>Settings',
                                                            cls: 'p-module-button'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            flex: 1,
                                            style: {
                                              backgroundColor: '#FbFbFb'
                                            },
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            items: [
                                                {
                                                    xtype: 'box',
                                                    height: 40,
                                                    html: '<input type="text" placeholder="Search your actions..." style="width:98%;height:40px;border:solid 1px transparent;border-bottom:solid 1px #F4F4F4;padding:10px;" >'
                                                },
                                                {
                                            xtype: 'treepanel',
                                            flex: 1,
                                            border: false,
                                            rootVisible: false,
                                            bodyStyle: {
                                                borderTopWidth: 0,
                                                background: 'transparent'
                                            },
                                            store: {
                                                root: {
                                                    expanded: true,
                                                    children: [
                                                        { text: 'Master', expanded: true, children: [
                                                            { text: 'Customers', glyph:0xf244, leaf: true, iconCls: 'fa fa-home' },
                                                            { text: 'Vendor', leaf: true },
                                                            { text: 'Products', leaf: true },
                                                            { text: 'Stock', leaf: true },
                                                        ]},
                                                        { text: 'Transactions', expanded: true, children: [
                                                            { text: 'Purchase Order', leaf: true },
                                                            { text: 'Purchase Return', leaf: true },
                                                            { text: 'Purchase Invoice', leaf: true },
                                                            { text: 'Delivery Challan', leaf: true },
                                                            { text: 'Bill Printing', leaf: true }
                                                        ]},
                                                        {
                                                            text: 'Reports', expanded: true, children: [
                                                                { text: 'Purchase Register', leaf: true },
                                                                { text: 'Inward Register', leaf: true },
                                                                { text: 'Stock Register', leaf: true },
                                                                { text: 'Closing Register', leaf: true }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            }
                            	       }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                    {


                        xtype: 'container',
                        flex: 1,
                        layout: {
                            type: 'vbox',
                            align: 'stretch'
                        },
                        items: [
                            {
                                xtype: 'container',
                                height: 100,
                                style: 'background-color: white',
                                layout: {
                                    type: 'hbox',
                                    pack: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'dashboardcount'
                                    },
                                    {
                                        xtype: 'dashboardcount'
                                    },
                                    {
                                        xtype: 'dashboardcount'
                                    },
                                    {
                                        xtype: 'dashboardcount'
                                    }
                                ]
                            },
                           {
                               xtype: 'tabpanel',
                               activeTab: 0,
                               flex: 1,
                               cls: 'p-home-tabpanel',
                               items: [
                                   {
                                       xtype: 'panel',
                                       glyph: 0xf233,
                                       title: 'Welcome',
                                       bodyStyle: {
                                           backgroundColor: '#ECEEF1'
                                       },
                                       style: {
                                           borderRightWidth: 0,
                                           borderLeftWidth: 0
                                       },
                                       layout: {
                                           type: 'hbox',
                                           align: 'stretch'
                                       },
                                       items: [
                                           {
                                               xtype: 'container',
                                               flex: 1,
                                               layout: {
                                                   type: 'vbox',
                                                   align: 'stretch',

                                               },
                                               items: [
                                                   {
                                                       xtype: 'box',
                                                       flex: 1,
                                                       padding: 10,
                                                       html: '<img src="http://palmtrix.com/logobg.png" /> <h4 class="p-app-brand">Accounting Solutions</h4>'
                                                   },
                                                   {
                                                       xtype: 'container',
                                                       cls: 'p-welcome',
                                                       flex: 1,
                                                       items: [
                                                           {
                                                               xtype: 'box',
                                                               html: '<h3>Master </h3>'
                                                           },
                                                           {
                                                               xtype: 'container',
                                                               layout: 'hbox',
                                                               items: [
                                                                   {
                                                                       xtype: 'tile',
                                                                       iconCls: 'fa-th',
                                                                       text: 'Company'
                                                                   },
                                                                   {
                                                                       xtype: 'tile',
                                                                       iconCls: 'fa-table',
                                                                       text: 'Customer'
                                                                   },
                                                                   {
                                                                       xtype: 'tile',
                                                                       iconCls: 'fa-save',
                                                                       text: 'Products'
                                                                   },
                                                                   {
                                                                       xtype: 'tile',
                                                                       iconCls: 'fa-file-text',
                                                                       text: 'Stock'
                                                                   },
                                                                   {
                                                                       xtype: 'tile',
                                                                       iconCls: 'fa-calculator',
                                                                       text: 'Tax'
                                                                   },
                                                                   {
                                                                       xtype: 'tile',
                                                                       iconCls: 'fa-cog',
                                                                       text: 'Settings'
                                                                   }
                                                               ]
                                                           }
                                                       ]
                                                   },
                                                   {
                                                       xtype: 'container',
                                                       cls: 'p-welcome',
                                                       flex: 1,
                                                       items: [
                                                           {
                                                               xtype: 'box',
                                                               html: '<h3>Transactions </h3>'
                                                           },
                                                           {
                                                               xtype: 'container',
                                                               layout: 'hbox',
                                                               items: [
                                                                   {
                                                                       xtype: 'tile',
                                                                       text: 'Purchase Order',
                                                                       iconCls: 'fa-cart-arrow-down'
                                                                   },
                                                                   {
                                                                       xtype: 'tile',
                                                                       text: "Sales Order",
                                                                       iconCls: 'fa-suitcase'
                                                                   },
                                                                   {
                                                                       xtype: 'tile',
                                                                       text: 'Product Barcode',
                                                                       iconCls: 'fa-barcode'
                                                                   },
                                                                   {
                                                                       xtype: 'tile',
                                                                       text: 'Inward Material',
                                                                       iconCls: 'fa-arrow-circle-o-down'
                                                                   },
                                                                   {
                                                                       xtype: 'tile',
                                                                       text: 'Outward Material',
                                                                       iconCls: 'fa-arrow-circle-o-up'
                                                                   },
                                                                   {
                                                                       xtype: 'tile',
                                                                       text: 'Payment Voucher',
                                                                       iconCls: 'fa-credit-card'
                                                                   }
                                                               ]
                                                           }
                                                       ]
                                                   },
                                                           ]
                                                   },
                                           {
                                               xtype: 'container',
                                               width: 300,
                                               layout: {
                                                   type: 'vbox',
                                                   align: 'stretch'
                                               },
                                               items: [
                                                   {
                                                       title: 'ahsdgjagsd',
                                                       cls: 'p-dashboard-widget',
                                                       bodyPadding: 10,
                                                       items: [
                                                           {
                                                               xtype: 'box',
                                                               html: 'kjhkdfhgkfj'
                                                           }
                                                       ]
                                                   },
                                                   {
                                                       title: 'ahsdgjagsd',
                                                       cls: 'p-dashboard-widget',
                                                       bodyPadding: 10,
                                                       flex: 1,
                                                       items: [
                                                           {
                                                               xtype: 'box',
                                                               html: 'kjhkdfhgkfj'
                                                           }
                                                       ]
                                                   },
                                                   {
                                                       title: 'ahsdgjagsd',
                                                       cls: 'p-dashboard-widget',
                                                       bodyPadding: 10,
                                                       items: [
                                                           {
                                                               xtype: 'box',
                                                               html: 'kjhkdfhgkfj'
                                                           }
                                                       ]
                                                   }
                                               ]
                                           }
                                       ]
                                   },
                                    {
                                       xtype: 'panel',
                                       title: 'Welcome',
                                       closable: true
                                   }
                               ]
                           }
                        ]
                     },
                     {
                         xtype: 'container',
                         cls: 'p-module-sidebar-right',
                         width: 40,
                     }
                    ]
                }
            ]
        });

        self.callParent(arguments);
    },

    prepareLayout: function() {
        return {
            type: 'vbox',
            align: 'stretch'
        };
    }
})
