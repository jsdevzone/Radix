Ext.define("Radix.view.ux.Tile", {
    extend: 'Ext.Component',
    xtype: 'tile',

    initComponent: function() {
        var self = this;
        self.autoEl = {
            tag: 'div',
            cls: 'p-tile',
            children: [
                {
                    tag: 'i',
                    cls: 'fa '+ this.iconCls + ' p-tile-icon'
                },
                {
                    tag: 'div',
                    html: this.text
                }
            ]
        };
        self.callParent(arguments);
    }
})
