de.edirom.online.view.window.text.TextView.override({

    initComponent: function () {

        this.addEvents('annotationsVisibilityChange',
            'gotoChapter', 'contentLoaded');

        this.items = [
            {
                html: '<div id="' + this.id + '_textCont" class="textViewContent"></div>'
            }
        ];

        this.callParent();

        this.on('afterrender', this.createToolbarEntries, this, {single: true});
        this.window.on('loadInternalLink', this.loadInternalId, this);
    },
    
    setContent: function(text) {
        Ext.fly(this.id + '_textCont').update(text);
        this.fireEvent('contentLoaded', me);
        console.log('Event fired');
    }
});