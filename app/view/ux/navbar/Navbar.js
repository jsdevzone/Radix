Ext.define('Radix.view.ux.navbar.Navbar', {
    extend: 'Ext.container.Container',
    xtype: 'navbar',
    
    initComponent: function() {
        var self = this;
        self.cls = 'p-navbar';
        self.height = 45;
        self.layout = self.prepareLayout();
        self.items = self.prepareChildrens();
        
        self.callParent(arguments);
    },
    
    prepareLayout: function() {
        return {
            type: 'hbox',
            align: 'stretch',
            pack: 'start'
        };
    },
    
    prepareChildrens: function() {
        var childrens = new Array();
        childrens.push(this.getBrandImage())
        childrens.push(this.getCollapseButton());
        childrens.push({ flex: 1, xtype: 'box' });
        childrens.push({ 
            xtype: 'box', cls: 'p-navbar-notification',
            html: '<i class="p-notification-icon fa fa-warning"></i>'
        });
        childrens.push({ 
            xtype: 'box', cls: 'p-navbar-notification',
            glyph: 0xf05a,
            html: '<i class="p-notification-icon fa fa-warning"></i>'
        });
        childrens.push({ 
            xtype: 'box', cls: 'p-navbar-notification',
            html: '<i class="p-notification-icon fa fa-warning"></i>'
        });
        return childrens;
    },
    
    getBrandImage: function() {
        return {
            xtype: 'image',
            src: 'http://localhost:3001/assets/images/theme/logo.png',
            height: 40,
            width: 177,
        };
    },
    
    getCollapseButton: function() {
        return {
            xtype: 'box',
            cls: 'p-sidebar-collapse',
            html: '<i class="p-collapse-icon fa fa-bars"></i>'
        };
    }
});