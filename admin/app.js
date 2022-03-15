/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SR.Admin.Application',

    name: 'SR.Admin',

    requires: [
        // This will automatically load all classes in the SR.Admin namespace
        // so that application classes do not need to require each other.
        'SR.Admin.*'
    ],

    // The name of the initial view to create.
    mainView: 'SR.Admin.view.main.Main'
});
