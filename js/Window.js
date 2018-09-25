de.edirom.online.view.window.Window.override({

    onWindowFinishedRendering: function() {
        var me = this;

        var viewToShow = me.views[0].view;

        for(var i = 0; i < me.views.length; i++) {
            var view = me.views[i].view;

            if(me.internalIdType == 'unknown' && view.defaultView)
                viewToShow = view;

            else if(me.type == 'text' && view.viewType == 'textView' && me.internalIdType !== 'unknown') {
                view.on('contentLoaded', Ext.bind(view.loadInternalId, view, [], false), view);
                viewToShow = view;

            }else if(me.internalIdType == 'annot' && view.viewType == 'annotationView') {
                view.on('show', Ext.bind(view.showSingleAnnotation, view, [me.internalId], false), view);
                viewToShow = view;

            }else if(me.internalIdType == 'zone' && view.viewType == 'sourceView') {
                view.on('show', Ext.bind(view.gotoZone, view, [me.internalId], false), view);
                viewToShow = view;

            }else if(me.internalIdType == 'measure' && view.viewType == 'sourceView') {
                view.on('show', Ext.bind(view.gotoMeasure, view, [me.internalId], false), view);
                viewToShow = view;

            }else if((me.internalIdType == 'surface' || me.internalIdType == 'graphic') && view.viewType == 'sourceView') {
                view.on('show', Ext.bind(view.showPage, view, [me.internalId], false), view);
                viewToShow = view;
            }
        }
        
        me.requestForActiveView(viewToShow);
    }

});