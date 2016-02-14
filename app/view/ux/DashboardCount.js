Ext.define('Radix.view.ux.DashboardCount', {
    extend: 'Ext.Component',
    xtype: 'dashboardcount',
    autoEl: {
        cls: 'p-dashboard-count',
        children: [
            {
                tag: 'span',
                cls: 'p-title',
                children: [
                    {
                        tag: 'i',
                        cls: 'fa fa-dot-circle-o'
                    },
                    {
                        tag: 'span',
                        html: 'Total Profit'
                    }
                ]
            },
            {
                tag: 'h3',
                html: '$36.45'
            },
            {
                tag: 'span',
                children: {
                    tag: 'b',
                    cls: 'p-color-down',
                    style: 'margin-right: 5px',
                    children: [
                        {
                            tag: 'i',
                            cls: 'fa fa-caret-down'
                        },
                        {
                            tag: 'span',
                            html: '26%'
                        }
                    ]
                }
            },
            {
                tag: 'span',
                html: 'From Yestarday'
            }
        ]
    }

})
