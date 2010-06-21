
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
    
    $('<a/>').css('color');
    $('<a/>').css('padding-top');
    $('<a/>').css({});
    $('<a/>').css('background', '#FFF');
    
});

test('attr()', function(){
    
    expect(2);
    
    $('<a/>').attr('rel','a').attr('href', '...');
    $('<a/>').attr('a','b','c','d');
    
    $('<a/>').attr('a');
    $('<a/>').attr('b');
    $('<a/>').attr({});
    $('<a/>').attr('b', 'd');
    
});

test('bind()', function(){
    
    expect(3);
    
    // Throws error in 1.3:
    $('<a/>').bind({});
    
    // Throws error in 1.4:
    $('<a/>').bind('a',function(){}).bind('b', function(){});
    
    
    // These throw errors in both 1.4 and 1.3
    $('<a/>').bind('a','b','c','d');
    $('<a/>').bind('b');
    
    // These should be fine
    $('<a/>').bind('a',function(){}).bind('b', {/*data*/}, function(){});
    $('<a/>').bind('click', {a:1}, function(){});
    
    
});

test('repeat selectors', function(){
    
    jQuery.LINT.enabledReports.noElementsFound = false;
    
    expect(1);
    
    var struct = $('<div><a/><a/></div>');
    
    $('a', struct);
    $('a', struct);
    
    jQuery.LINT.enabledReports.noElementsFound = true;
    
});

test('pseudo', function(){
    
    expect(3);
    
    jQuery.LINT.enabledReports.noElementsFound = false;
    
    // valid
    $('div:not(.foo:last):first');
    $(':first');
    $('div:contains(a) :input');
    
    // invalid
    $('div:foobar');
    $(':ttt:yyy');
    $('div:not(.foo:abcdefg):first');
    
    jQuery.LINT.enabledReports.noElementsFound = true;
    
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

test('DOM traversing methods', function(){
    
    jQuery.LINT.enabledReports.noElementsFound = false;
    
    expect(jQuery.fn.jquery >= '1.4' ? 27 : 24);
    
    var struct = jQuery('<div><a/><span/><a/><ul><li/></ul></div>')[0],
        $ = function(s) {
            return jQuery(s, struct);
        },
        ul = $('ul'),
        a = $('a'),
        li = $('li'),
        all = $('*');
    
    // Correct
    a.next('div,span');
    a.next();
    a.parents('div');
    a.parents();
    a.parent();
    a.closest('div');
    ul.find('li');
    ul.prevAll('a');
    ul.prev();
    ul.prev('a');
    ul.prevAll();
    ul.children();
    ul.children('li');
    ul.find('li').andSelf();
    ul.find('li').end();
    ul.filter(function(){return true});
    ul.filter('ul');
    if (jQuery.fn.jquery >= '1.4') {
        li.closest('ul', struct);
        a.parentsUntil('x');
        a.nextUntil('y');
        a.prevUntil('z');
    }
    ul.siblings();
    ul.siblings('a');
    all.slice(1,-1);
    
    // Incorrect
    a.next(/a/, {});
    a.next(1,2,3);
    a.parents(false);
    a.parents(function(){});
    a.parent('p',1,2,34);
    a.closest();
    li.closest('x', struct, {});
    ul.find('___', '+');
    ul.prevAll({});
    ul.prev(function(){}, {});
    ul.prev([]);
    ul.prevAll([], {}, [], 1);
    ul.children(1);
    ul.children(all);
    ul.find('j').andSelf({});
    ul.find();
    ul.find('m').end(1);
    ul.filter({});
    ul.filter();
    ul.filter(1);
    if (jQuery.fn.jquery >= '1.4') {
        a.parentsUntil(1,2, {});
        a.nextUntil(1,2, {});
        a.prevUntil(1,2, {});
    }
    ul.siblings(1);
    ul.siblings(function(){});
    all.slice(1,2,3);
    all.slice({});
    all.slice();
    
    jQuery.LINT.enabledReports.noElementsFound = true;
    
});

test('New plugin', function(){
    
    expect(4);
    
    jQuery.fn.foo = function(n){ return n + 2; };
    var x = jQuery.fn.foo.x = {};
    
    jQuery.LINT.registerMethod('foo', [
        {
            arg: [
                { name: 'firstArg', type: 'number' }
            ]
        }
    ]);
    
    ok(jQuery.fn.foo(1) === 3, 'Calling plugin');
    ok(jQuery.fn.foo.x === x, 'Properties copied over');
    
    // correct
    jQuery.fn.foo(144);
    
    // incorrect
    jQuery.fn.foo({});
    jQuery.fn.foo(1,2,3,4);
    
});

test('append/prepend', function(){
    
    expect(10);
    
    var d = jQuery('<div/>');
    
    // Correct
    d.append('a');
    d.append(d.clone()[0]);
    d.append(d.clone());
    d.append('a', d.clone(), d.clone()[0], 'b');
    d.append('a','b','c');
    d.prepend('a');
    d.prepend(d.clone()[0]);
    d.prepend(d.clone());
    d.prepend('a', d.clone(), d.clone()[0], 'b');
    d.prepend('a','b','c');
    
    // Incorrect
    d.append('a','c',[]);
    d.append(88);
    d.append({});
    d.append(d.clone(), undefined, 45);
    d.append();
    d.prepend('a','c',[]);
    d.prepend(88);
    d.prepend({});
    d.prepend(d.clone(), undefined, 45);
    d.prepend();
    
    
});

test('noElementsFound checks', function(){
    
    var meth = 'parents parent find children prev prevAll next nextAll closest'.split(' '),
        dom = $('<div/>');
        
    expect(meth.length);
    
    $.each(meth, function(){
        dom[this]('foo');
    });
    
    // Check for false positives
    //dom = jQuery('<div><a></a><a><span></span></a><a></a></div>').find('a:eq(1)');
    
    //$.each(meth, function(){
        //dom[this]('*');
    //});
    
});

})(jQuery);