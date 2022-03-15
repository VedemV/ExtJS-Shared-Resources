/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SR.Mobile.Application',

    name: 'SR.Mobile',

    requires: [
        // This will automatically load all classes in the SR.Mobile namespace
        // so that application classes do not need to require each other.
        'SR.Mobile.*'
    ],

    // The name of the initial view to create.
    mainView: 'SR.Mobile.view.main.Main'
});
