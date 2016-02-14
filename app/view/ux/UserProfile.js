Ext.define('Radix.view.ux.UserProfile', {
    extend: 'Ext.container.Container',
    xtype: 'userprofile',
    cls: 'p-user-profile',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    padding: 10,
    items: [
        {
            xtype: 'container',
            flex: 1,
            layout: {
                type: 'hbox',
                align: 'center',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'image',
                    src: 'http://localhost:3001/assets/images/theme/avatars/John-Smith.jpg',
                    style: {
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%'
                    }
                },
                {
                    xtype: 'component',
                    cls: 'p-user-info',
                    autoEl: {
                        tag: 'div',
                        children: [
                            {
                                tag: 'span',
                                html: 'Welcome,',
                                cls: 'p-welcome-text'
                            },
                            {
                                tag: 'a',
                                cls: 'user-name',
                                html: 'Muhammed Jasim'
                            }
                        ]
                    }
                }
            ]
        },
        {
            xtype: 'container',
            padding: 3,
            layout: {
                type: 'hbox',
                align: 'center',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'component',
                    autoEl: {
                        tag: 'span',
                        cls: 'p-user-profile-action',
                        html: '<i class="fa fa-cog"></i>'
                    }
                },
                {
                    xtype: 'component',
                    autoEl: {
                        tag: 'span',
                        cls: 'p-user-profile-action',
                        html: '<i class="fa fa-power-off"></i>'
                    }
                },
                {
                    xtype: 'component',
                    autoEl: {
                        tag: 'span',
                        cls: 'p-user-profile-action',
                        html: '<i class="fa fa-user"></i>'
                    }
                },
                {
                    xtype: 'component',
                    autoEl: {
                        tag: 'span',
                        cls: 'p-user-profile-action',
                        html: '<i class="fa fa-key"></i>'
                    }
                }
            ]
        }
    ]
})
