
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
    warn: function(a) {
        //window.console.warn.apply(null, arguments);
        ok(true);
    }
};

test('jQuery()', function(){
    
    expect(3);
    jQuery.LINT.level = 1;
    
    if (jQuery.fn.jquery >= '1.4') jQuery();
    jQuery('#k928372');
    jQuery('.k928372');
    
    jQuery(1234);
    jQuery(/a/);
    
    jQuery.LINT.level = 3;
    jQuery('a');
    
});

test('css()', function(){
    
    expect(2);
    
    jQuery('<a/>').css('color','red').css('padding', 20);
    jQuery('<a/>').css('a','b','c','d');
    
    jQuery('<a/>').css({});
    jQuery('<a/>').css('background', '#FFF');
    
});

test('selectors', function(){
    
    expect(1);
    
    var struct = $('<div><a/><a/></div>');
    
    $('a', struct);
    $('a', struct);
    
});

test('jQuery.get()/post()', function(){
    
    expect(10);
    
    var _ajax = $.ajax;
    $.ajax=function(){};
    
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
    
    $.ajax = _ajax;
    
});

})();