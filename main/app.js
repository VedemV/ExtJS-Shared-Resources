/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SR.Main.Application',

    name: 'SR.Main',

    requires: [
        // This will automatically load all classes in the SR.Main namespace
        // so that application classes do not need to require each other.
        'SR.Main.*'
    ],

    // The name of the initial view to create.
    mainView: 'SR.Main.view.main.Main'
});
