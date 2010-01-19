
(function(){

var console = jQuery.LINT.console = {
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
        if (e instanceof Error) { return; }
        //window.console.warn.apply(null, arguments);
        ok(true);
    }
};

jQuery.ajaxSetup({
    xhr: function(){
        return {
            open: function(){},
            send: function(){},
            responseText: ''
        }
    }
});

test('jQuery()', function(){
    
    expect(3);
    $.LINT.level = 1;
    
    if ($.fn.jquery >= '1.4') jQuery();
    $('#k928372');
    $('.k928372');
    
    $(1234);
    $(/a/);
    
    $.LINT.level = 3;
    $('a');
    
});

test('css()', function(){
    
    expect(2);
    
    $('<a/>').css('color','red').css('padding', 20);
    $('<a/>').css('a','b','c','d');
    
    $('<a/>').css({});
    $('<a/>').css('background', '#FFF');
    
});

test('selectors', function(){
    
    expect(1);
    
    var struct = $('<div><a/><a/></div>');
    
    $('a', struct);
    $('a', struct);
    
});

test('jQuery.get()/post()', function(){
    
    expect(10);
    
    var xhrs = [
        
        // Incorrect
        $.get('a', 'b', 'c', 'd'),
        $.get(123456),
        $.get(function(){}),
        $.get('a', {}, function(){}, /a/),
        $.get(),
        $.post('a', 'b', 'c', 'd'),
        $.post(123456),
        $.post(function(){}),
        $.post('a', {}, function(){}, /a/),
        $.post(),
        
        // Correct
        $.get('a'),
        $.get('a', {}),
        $.get('a', ''),
        $.get('a', {}, function(){}),
        $.get('a', function(){}),
        $.get('a', {}, function(){}, ''),
        $.get('a', '', function(){}, ''),
        $.post('a'),
        $.post('a', {}),
        $.post('a', ''),
        $.post('a', {}, function(){}),
        $.post('a', function(){}),
        $.post('a', {}, function(){}, ''),
        $.post('a', '', function(){}, '')
    
    ];
    
});

test('each()', function(){
    
    expect(20);
    
    // Correct
    $.each([], function(){});
    $.each([], function(){}, []);
    $.each({}, function(){});
    $.each($.fn, function(){}, [1,2,3]);
    $([1,2,3]).each(function(){});
    $('<a/>').each(function(){});
    $([document.createElement('div')]).each(function(){});
    $({}).each(function(){});
    $([]).each(function(){}, [1,2,3])
    $($([])).each(function(){});
    
    // Incorrect
    $.each(123);
    $.each(1,2,3);
    $.each('a','b','c');
    $.each({}, {});
    $.each([], []);
    $.each([]);
    $.each({});
    $.each({}, function(){}, 123);
    $.each(1,2,3,4,5,6);
    $.each(function(){});
    $([]).each(function(){}, [], 1,2,3,4,5);
    $([]).each({});
    $([]).each(1,2,3);
    $([]).each();
    $({}).each(123);
    $({}).each(undefined, undefined);
    $({}).each({}, []);
    $({}).each([], {});
    $({}).each([], function(){});
    $({}).each(function(){}, function(){});
    
});

test('add()', function(){
    
    expect(jQuery.fn.jquery < '1.4' ? 4 : 2);
    
    var struct = $('<div><a/><a/></div>');
    
    $('<a/>').add($('<a/>'));
    $('<a/>').add('a', struct[0]); // should fail in <1.4
    $('<a/>').add();
    $('<a/>').add(undefined);
    
});

test('jQuery.ajax()', function(){
    
    expect(2);
    
    $.ajax({});
    $.ajax();
    $.ajax('a');
    
});

})();