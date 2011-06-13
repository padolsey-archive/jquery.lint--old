// TODO: TEST NESTED FUNCTION CALLS E.g. filter(function(){ .. some invalid call .. })
(function($){

jQuery.LINT.console = {
    group:function(a,b,c){
        //window.console.group.apply(null, arguments);
    },
    groupCollapsed:function(a,b,c){
        //window.console.groupCollapsed.apply(null, arguments);
    },
    groupEnd:function(a,b,c){
        //window.console.groupEnd.apply(null, arguments);
    },
    log:function(a,b,c){
        //window.console.log.apply(null, arguments);
    },
    warn: function(a, e) {
        if ((e instanceof Error) || /syntax error/i.test(e)) { return; }
        //window.console.warn.apply(null, arguments);
        ok(true, a);
    }
};

jQuery.ajaxSetup({
    xhr: function(){
        return {
            open: function(){},
            send: function(){
                this.onreadystatechange();
            },
            responseText: '',
            status: 200,
            readyState: 4,
            getResponseHeader: function(){},
            abort: function(){}
        };
    }
});

test('tabs()', function(){
    expect(1);
    $( '<div><ul><li><a href="#test"/></ul><div id="test" /></div>' ).tabs().tabs('destroy');

    $('#notexisting').tabs();
});

test('slider()', function(){
    expect(1);
    $('<div />').slider().slider('destroy');

    $('#notexisting').slider();
});


test('progressbar()', function(){
    expect(1);
    $('<div />').progressbar({value: 37}).progressbar('destroy');

    $('#notexisting').progressbar();
});


test('dialog()', function(){
    expect(1);
    $('<div />').dialog().dialog('destroy');

    $('#notexisting').dialog();
});

test('button()', function(){
    expect(1);
    $('<button />').button();

    $('#notexisting').button();
});

test('accordion()', function(){
    expect(1);
    $( '<div><h3><a/></h3><div><p/></div></div>' ).accordion().accordion('destroy');

    $('#notexisting').accordion();
});

test('datepicker()', function(){
    expect(1);
    $('<input/>').datepicker().datepicker('destroy');

    $('#notexisting').datepicker();
});

test('autocomplete()', function(){
    expect(1);
    var availableTags = [
        'ActionScript',
        'AppleScript',
    ];

    $('<input/>').autocomplete({
        source: availableTags
    });

    $('#notexisting').datepicker();
});


})(jQuery);