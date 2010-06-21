{
    "jQuery.proxy": [{
        added: "1.4",
        arg: [{
            name: "function",
            type: "Function"
        }, {
            name: "scope",
            type: "Object",
            optional: true
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "scope",
            type: "Object"
        }, {
            name: "name",
            type: "String"
        }]
    }],
    focusout: [{
        added: "1.4",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }],
    focusin: [{
        added: "1.4",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }],
    has: [{
        added: "1.4",
        arg: [{
            name: "selector",
            type: "String"
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "contained",
            type: "Element"
        }]
    }, {
        added: "1.1.4"
    }],
    "jQuery.contains": [{
        added: "1.4",
        arg: [{
            name: "container",
            type: "Element"
        }, {
            name: "contained",
            type: "Element"
        }]
    }],
    "jQuery.noop": [{
        added: "1.4"
    }],
    delay: [{
        added: "1.4",
        arg: [{
            name: "duration",
            type: "Integer"
        }, {
            name: "queueName",
            type: "String",
            optional: true
        }]
    }],
    parentsUntil: [{
        added: "1.4",
        arg: [{
            name: "selector",
            type: "Selector",
            optional: true
        }]
    }],
    prevUntil: [{
        added: "1.4",
        arg: [{
            name: "selector",
            type: "Selector",
            optional: true
        }]
    }],
    nextUntil: [{
        added: "1.4",
        arg: [{
            name: "selector",
            type: "Selector",
            optional: true
        }]
    }],
    "event.isImmediatePropagationStopped": [{
        added: "1.3"
    }],
    "event.stopImmediatePropagation": [{
        added: "1.3"
    }],
    "event.isPropagationStopped": [{
        added: "1.3"
    }],
    "event.stopPropagation": [{
        added: "1.0"
    }],
    "event.isDefaultPrevented": [{
        added: "1.3"
    }],
    "event.preventDefault": [{
        added: "1.0"
    }],
    "event.timeStamp": [{
        added: "1.2.6"
    }],
    "event.result": [{
        added: "1.3"
    }],
    "event.which": [{
        added: "1.1.3"
    }],
    "event.pageY": [{
        added: "1.0.4"
    }],
    "event.pageX": [{
        added: "1.0.4"
    }],
    "event.currentTarget": [{
        added: "1.3"
    }],
    "event.relatedTarget": [{
        added: "1.1.4"
    }],
    "event.data": [{
        added: "1.1"
    }],
    "event.target": [{
        added: "1.0"
    }],
    "event.type": [{
        added: "1.0"
    }],
    "jQuery.fx.off": [{
        added: "1.3"
    }],
    each: [{
        added: "1.0",
        arg: [{
            name: "function(index, Element)",
            type: "Function"
        }, {
            name: 'args',
            type: 'Array',
            optional: true
        }]
    }],
    "jQuery.pushStack": [{
        added: "1.0",
        arg: [{
            name: "elements",
            type: "Array"
        }]
    }, {
        added: "1.3",
        arg: [{
            name: "elements",
            type: "Array"
        }, {
            name: "name",
            type: "String"
        }, {
            name: "arguments",
            type: "Array"
        }]
    }],
    "jQuery.globalEval": [{
        added: "1.0.4",
        arg: [{
            name: "code",
            type: "String"
        }]
    }],
    "jQuery.isXMLDoc": [{
        added: "1.1.4",
        arg: [{
            name: "node",
            type: "Element"
        }]
    }],
    "jQuery.removeData": [{
        added: "1.2.3",
        arg: [{
            type: 'Element',
            name: 'elem'
        }, {
            name: "name",
            type: "String",
            optional: true
        }]
    }],
    "jQuery.data": [{
        added: "1.2.3",
        arg: [{
            name: "element",
            type: "Element"
        }, {
            name: "key",
            type: "String"
        }, {
            name: "value",
            type: "*"
        }]
    }, {
        added: "1.2.3",
        arg: [{
            name: "element",
            type: "Element"
        }, {
            name: "key",
            type: "String"
        }]
    }, {
        added: "1.4",
        arg: [
            {
                name: 'element',
                type: 'Element'
            }
        ]
    }],
    "jQuery.dequeue": [{
        added: "1.3",
        arg: [{
            name: "queueName",
            type: "String",
            optional: true
        }]
    }],
    "jQuery.queue": [{
        added: "1.3",
        arg: [{
            type: 'Element',
            name: 'elem'
        }, {
            name: "queueName",
            type: "String",
            optional: true
        }]
    }, {
        added: "1.3",
        arg: [{
            type: 'Element',
            name: 'elem'
        }, {
            name: "queueName",
            type: "String",
            optional: true
        }, {
            name: "newQueue",
            type: "Array"
        }]
    }, {
        added: "1.3",
        arg: [{
            type: 'Element',
            name: 'elem'
        }, {
            name: "queueName",
            type: "String",
            optional: true
        }, {
            name: "callback()",
            type: "Function"
        }]
    }],
    clearQueue: [{
        added: "1.4",
        arg: [{
            name: "queueName",
            type: "String",
            optional: true
        }]
    }],
    toArray: [{
        added: "1.4"
    }],
    "jQuery.isEmptyObject": [{
        added: "1.4",
        arg: [{
            name: "object",
            type: "Object"
        }]
    }],
    "jQuery.isPlainObject": [{
        added: "1.4",
        arg: [{
            name: "object",
            type: "Object"
        }]
    }],
    keydown: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.0"
    }],
    index: [{
        added: "1.4"
    }, {
        added: "1.4",
        arg: [{
            name: "selector",
            type: "Selector"
        }]
    }, {
        added: "1.0",
        arg: [{
            name: "element",
            type: "Element, jQuery"
        }]
    }],
    removeData: [{
        added: "1.2.3",
        arg: [{
            name: "name",
            type: "String",
            optional: true
        }]
    }],
    data: [{
        added: "1.2.3",
        arg: [{
            name: "key",
            type: "String"
        }, {
            name: "value",
            type: "*"
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "obj",
            type: "Object"
        }]
    }, {
        added: "1.2.3",
        arg: [{
            name: "key",
            type: "String"
        }]
    }, {
        added: "1.4"
    }],
    get: [{
        added: "1.0",
        arg: [{
            name: "index",
            type: "Number",
            optional: true
        }]
    }],
    size: [{
        added: "1.0"
    }],
    "jQuery.noConflict": [{
        added: "1.0",
        arg: [{
            name: "removeAll",
            type: "Boolean",
            optional: true
        }]
    }],
    selected: [{
        added: "1.0"
    }],
    checked: [{
        added: "1.0"
    }],
    disabled: [{
        added: "1.0"
    }],
    enabled: [{
        added: "1.0"
    }],
    file: [{
        added: "1.0"
    }],
    button: [{
        added: "1.0"
    }],
    reset: [{
        added: "1.0"
    }],
    image: [{
        added: "1.0"
    }],
    submit: [{
        added: "1.0"
    }, {
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.0"
    }],
    checkbox: [{
        added: "1.0"
    }],
    radio: [{
        added: "1.0"
    }],
    password: [{
        added: "1.0"
    }],
    text: [{
        added: "1.0"
    }, {
        added: "1.0"
    }, {
        added: "1.0",
        arg: [{
            name: "textString",
            type: "String"
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "function(index, text)",
            type: "Function"
        }]
    }],
    input: [{
        added: "1.0"
    }],
    "only-child": [{
        added: "1.1.4"
    }],
    "last-child": [{
        added: "1.1.4"
    }],
    "first-child": [{
        added: "1.1.4"
    }],
    "nth-child": [{
        added: "1.1.4",
        arg: [{
            name: "index",
            type: "Number/String"
        }]
    }],
    attributeContainsPrefix: [{
        added: "1.0",
        arg: [{
            name: "attribute",
            type: "String"
        }, {
            name: "value",
            type: "String"
        }]
    }],
    attributeContainsWord: [{
        added: "1.0",
        arg: [{
            name: "attribute",
            type: "String"
        }, {
            name: "value",
            type: "String"
        }]
    }],
    attributeMultiple: [{
        added: "1.0",
        arg: [{
            name: "attributeFilter1",
            type: "Selector"
        }, {
            name: "attributeFilter2",
            type: "Selector"
        }, {
            name: "attributeFilterN",
            type: "Selector",
            optional: true
        }]
    }],
    attributeContains: [{
        added: "1.0",
        arg: [{
            name: "attribute",
            type: "String"
        }, {
            name: "value",
            type: "String"
        }]
    }],
    attributeEndsWith: [{
        added: "1.0",
        arg: [{
            name: "attribute",
            type: "String"
        }, {
            name: "value",
            type: "String"
        }]
    }],
    attributeStartsWith: [{
        added: "1.0",
        arg: [{
            name: "attribute",
            type: "String"
        }, {
            name: "value",
            type: "String"
        }]
    }],
    attributeNotEqual: [{
        added: "1.0",
        arg: [{
            name: "attribute",
            type: "String"
        }, {
            name: "value",
            type: "String"
        }]
    }],
    attributeEquals: [{
        added: "1.0",
        arg: [{
            name: "attribute",
            type: "String"
        }, {
            name: "value",
            type: "String"
        }]
    }],
    attributeHas: [{
        added: "1.0",
        arg: [{
            name: "attribute",
            type: "String"
        }]
    }],
    visible: [{
        added: "1.0"
    }],
    hidden: [{
        added: "1.0"
    }],
    parent: [{
        added: "1.0"
    }, {
        added: "1.0",
        arg: [{
            name: "selector",
            type: "Selector",
            optional: true
        }]
    }],
    empty: [{
        added: "1.0"
    }, {
        added: "1.0"
    }],
    contains: [{
        added: "1.1.4"
    }],
    animated: [{
        added: "1.2"
    }],
    header: [{
        added: "1.2"
    }],
    lt: [{
        added: "1.0",
        arg: [{
            name: "index",
            type: "Number"
        }]
    }],
    gt: [{
        added: "1.0"
    }],
    eq: [{
        added: "1.0",
        arg: [{
            name: "index",
            type: "Number"
        }]
    }, {
        added: "1.1.2",
        arg: [{
            name: "index",
            type: "Integer"
        }]
    }],
    odd: [{
        added: "1.0"
    }],
    even: [{
        added: "1.0"
    }],
    not: [{
        added: "1.0",
        arg: [{
            name: "selector",
            type: "Selector"
        }]
    }, {
        added: "1.0",
        arg: [{
            name: "selector",
            type: "Selector"
        }]
    }, {
        added: "1.0",
        arg: [{
            name: "elements",
            type: "Elements"
        }]
    }, {
        added: "1.0",
        arg: [{
            name: "function(index)",
            type: "Function"
        }]
    }],
    last: [{
        added: "1.0"
    }, {
        added: "1.2"
    }],
    first: [{
        added: "1.0"
    }, {
        added: "1.2"
    }],
    "next siblings": [{
        added: "1.0",
        arg: [{
            name: "prev",
            type: "Selector"
        }, {
            name: "siblings",
            type: "Selector"
        }]
    }],
    "next adjacent": [{
        added: "1.0",
        arg: [{
            name: "prev",
            type: "Selector"
        }, {
            name: "next",
            type: "Selector"
        }]
    }],
    child: [{
        added: "1.0",
        arg: [{
            name: "parent",
            type: "Selector"
        }, {
            name: "child",
            type: "Selector"
        }]
    }],
    descendant: [{
        added: "1.0",
        arg: [{
            name: "ancestor",
            type: "Selector"
        }, {
            name: "descendant",
            type: "Selector"
        }]
    }],
    multiple: [{
        added: "1.0",
        arg: [{
            name: "selector1",
            type: "Selector"
        }, {
            name: "selector2",
            type: "Selector"
        }, {
            name: "selectorN",
            type: "Selector",
            optional: true
        }]
    }],
    all: [{
        added: "1.0"
    }],
    "class": [{
        added: "1.0",
        arg: [{
            name: "class",
            type: "String"
        }]
    }],
    element: [{
        added: "1.0",
        arg: [{
            name: "element",
            type: "String"
        }]
    }],
    id: [{
        added: "1.0",
        arg: [{
            name: "id",
            type: "String"
        }]
    }],
    scroll: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.0"
    }],
    resize: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.0"
    }],
    dequeue: [{
        added: "1.2",
        arg: [{
            name: "queueName",
            type: "String",
            optional: true
        }]
    }],
    queue: [{
        added: "1.2",
        arg: [{
            name: "queueName",
            type: "String",
            optional: true
        }]
    }, {
        added: "1.2",
        arg: [{
            name: "queueName",
            type: "String",
            optional: true
        }, {
            name: "newQueue",
            type: "Array"
        }]
    }, {
        added: "1.2",
        arg: [{
            name: "queueName",
            type: "String",
            optional: true
        }, {
            name: "callback( next )",
            type: "Function"
        }]
    }],
    keyup: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.0"
    }],
    keypress: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.0"
    }],
    select: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.0"
    }],
    change: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.0"
    }],
    blur: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.0"
    }],
    focus: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.0"
    }],
    mousemove: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.0"
    }],
    hover: [{
        added: "1.0",
        arg: [{
            name: "handlerIn(eventObject)",
            type: "Function"
        }, {
            name: "handlerOut(eventObject)",
            type: "Function"
        }]
    }, {
        added: '1.4',
        arg: [{
            name: 'handlerInOut(eventObject)',
            type: 'Function'
        }]
    }],
    mouseleave: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.0"
    }],
    mouseenter: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.0"
    }],
    mouseout: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.0"
    }],
    mouseover: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.0"
    }],
    dblclick: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.0"
    }],
    click: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.0"
    }],
    mouseup: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.0"
    }],
    mousedown: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.0"
    }],
    error: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }],
    unload: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }],
    load: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.0",
        arg: [{
            name: "url",
            type: "String"
        }, {
            name: "data",
            type: "Map, String",
            optional: true
        }, {
            name: "success(responseText, textStatus, XMLHttpRequest)",
            type: "Function",
            optional: true
        }]
    }],
    ready: [{
        added: "1.0",
        arg: [{
            name: "handler",
            type: "Function"
        }]
    }],
    die: [{
        added: "1.3",
        arg: [{
            name: "eventType",
            type: "String"
        }, {
            name: "handler",
            type: "String",
            optional: true
        }]
    }],
    "jQuery.browser": [{
        added: "1.0"
    }],
    "jQuery.browser.version": [{
        added: "1.1.3"
    }],
    live: [{
        added: "1.3",
        arg: [{
            name: "eventType",
            type: "String"
        }, {
            name: "handler",
            type: "Function"
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "eventType",
            type: "String"
        }, {
            name: "eventData",
            type: "Object",
            optional: true
        }, {
            name: "handler",
            type: "Function"
        }]
    }],
    triggerHandler: [{
        added: "1.2",
        arg: [{
            name: "eventType",
            type: "String"
        }, {
            name: "extraParameters",
            type: "Array",
            optional: true
        }]
    }],
    trigger: [{
        added: "1.0",
        arg: [{
            name: "eventType",
            type: "String"
        }, {
            name: "extraParameters",
            type: "Array",
            optional: true
        }]
    }],
    ajaxComplete: [{
        added: "1.0",
        arg: [{
            name: "handler(event, XMLHttpRequest, ajaxOptions)",
            type: "Function"
        }]
    }],
    one: [{
        added: "1.1",
        arg: [{
            name: "eventType",
            type: "String"
        }, {
            name: "eventData",
            type: "notFunction",
            optional: true
        }, {
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "events",
            type: "Object"
        }]
    }],
    serializeArray: [{
        added: "1.2"
    }],
    serialize: [{
        added: "1.0"
    }],
    "jQuery.ajaxSetup": [{
        added: "1.1",
        arg: [{
            name: "options",
            type: "Options"
        }]
    }],
    ajaxSuccess: [{
        added: "1.0",
        arg: [{
            name: "handler(event, XMLHttpRequest, ajaxOptions)",
            type: "Function"
        }]
    }],
    ajaxStop: [{
        added: "1.0",
        arg: [{
            name: "handler()",
            type: "Function"
        }]
    }],
    ajaxStart: [{
        added: "1.0",
        arg: [{
            name: "handler()",
            type: "Function"
        }]
    }],
    ajaxSend: [{
        added: "1.0",
        arg: [{
            name: "handler(event, XMLHttpRequest, ajaxOptions)",
            type: "Function"
        }]
    }],
    ajaxError: [{
        added: "1.0",
        arg: [{
            name: "handler(event, XMLHttpRequest, ajaxOptions, thrownError)",
            type: "Function"
        }]
    }],
    unbind: [{
        added: "1.0",
        arg: [{
            name: "eventType",
            type: "String"
        }, {
            name: "handler(eventObject)",
            type: "Function",
            optional: true
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "events",
            type: "Object"
        }]
    }],
    bind: [{
        added: "1.0",
        arg: [{
            name: "eventType",
            type: "String"
        }, {
            name: "eventData",
            type: "notFunction",
            optional: true
        }, {
            name: "handler(eventObject)",
            type: "Function"
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "events",
            type: "Object"
        }]
    }],
    slice: [{
        added: "1.1.4",
        arg: [{
            name: "start",
            type: "Integer"
        }, {
            name: 'end',
            type: 'Integer',
            optional: true
        }]
    }, {
        added: "1.1.4",
        arg: [{
            name: "end",
            type: "Integer",
            optional: true
        }]
    }],
    jQuery: [{
        added: "1.0",
        arg: [{
            name: "selector",
            type: "selector"
        }, {
            name: "context",
            type: "Element, jQuery",
            optional: true
        }]
    }, {
        added: "1.0",
        arg: [{
            name: "element",
            type: "Element"
        }]
    }, {
        added: "1.0",
        arg: [{
            name: "elementArray",
            type: "Array"
        }]
    }, {
        added: "1.0",
        arg: [{
            name: "jQuery object",
            type: "Object"
        }]
    }, {
        added: "1.4"
    }, {
        added: "1.0",
        arg: [{
            name: "html",
            type: "String"
        }, {
            name: "ownerDocument",
            type: "document",
            optional: true
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "html",
            type: "String"
        }, {
            name: "props",
            type: "Object"
        }]
    }, {
        added: "1.0",
        arg: [{
            name: "callback",
            type: "Function"
        }]
    }],
    stop: [{
        added: "1.2",
        arg: [{
            name: "clearQueue",
            type: "Boolean",
            optional: true
        }, {
            name: "jumpToEnd",
            type: "Boolean",
            optional: true
        }]
    }],
    end: [{
        added: "1.0"
    }],
    andSelf: [{
        added: "1.2"
    }],
    siblings: [{
        added: "1.0",
        arg: [{
            name: "selector",
            type: "Selector",
            optional: true
        }]
    }],
    animate: [{
        added: "1.0",
        arg: [{
            name: "properties",
            type: "Options"
        }, {
            name: "duration",
            type: "String,Number",
            optional: true
        }, {
            name: "easing",
            type: "String",
            optional: true
        }, {
            name: "callback",
            type: "Callback",
            optional: true
        }]
    }, {
        added: "1.0",
        arg: [{
            name: "properties",
            type: "Options"
        }, {
            name: "options",
            type: "Options"
        }]
    }],
    prevAll: [{
        added: "1.2",
        arg: [{
            name: "selector",
            type: "Selector",
            optional: true
        }]
    }],
    prev: [{
        added: "1.0",
        arg: [{
            name: "selector",
            type: "Selector",
            optional: true
        }]
    }],
    fadeTo: [{
        added: "1.0",
        arg: [{
            name: "duration",
            type: "String,Number"
        }, {
            name: "opacity",
            type: "Number"
        }, {
            name: "callback",
            type: "Callback",
            optional: true
        }]
    }],
    fadeOut: [{
        added: "1.0",
        arg: [{
            name: "duration",
            type: "String,Number",
            optional: true
        }, {
            name: "callback",
            type: "Callback",
            optional: true
        }]
    }],
    parents: [{
        added: "1.0",
        arg: [{
            name: "selector",
            type: "Selector",
            optional: true
        }]
    }],
    fadeIn: [{
        added: "1.0",
        arg: [{
            name: "duration",
            type: "String,Number",
            optional: true
        }, {
            name: "callback",
            type: "Callback",
            optional: true
        }]
    }],
    offsetParent: [{
        added: "1.26"
    }],
    slideToggle: [{
        added: "1.0",
        arg: [{
            name: "duration",
            type: "String,Number",
            optional: true
        }, {
            name: "callback",
            type: "Callback",
            optional: true
        }]
    }],
    "jQuery.post": [{
        added: "1.0",
        arg: [{
            name: "url",
            type: "String"
        }, {
            name: "data",
            type: "Map, String",
            optional: true
        }, {
            name: "success(data, textStatus)",
            type: "Function",
            optional: true
        }, {
            name: "dataType",
            type: "String",
            optional: true
        }]
    }],
    slideUp: [{
        added: "1.0",
        arg: [{
            name: "duration",
            type: "String,Number",
            optional: true
        }, {
            name: "callback",
            type: "Callback",
            optional: true
        }]
    }],
    nextAll: [{
        added: "1.2",
        arg: [{
            name: "selector",
            type: "String",
            optional: true
        }]
    }],
    next: [{
        added: "1.0",
        arg: [{
            name: "selector",
            type: "Selector",
            optional: true
        }]
    }],
    slideDown: [{
        added: "1.0",
        arg: [{
            name: "duration",
            type: "String,Number",
            optional: true
        }, {
            name: "callback",
            type: "Callback",
            optional: true
        }]
    }],
    find: [{
        added: "1.0",
        arg: [{
            name: "selector",
            type: "Selector"
        }]
    }],
    "jQuery.getScript": [{
        added: "1.0",
        arg: [{
            name: "url",
            type: "String"
        }, {
            name: "success(data, textStatus)",
            type: "Function",
            optional: true
        }]
    }],
    contents: [{
        added: "1.2"
    }],
    closest: [{
        added: "1.3",
        arg: [{
            name: "selector",
            type: "Selector"
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "selector",
            type: "Selector"
        }, {
            name: "context",
            type: "Element",
            optional: true
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "selectors",
            type: "Array"
        }, {
            name: "context",
            type: "Element",
            optional: true
        }]
    }],
    "jQuery.getJSON": [{
        added: "1.0",
        arg: [{
            name: "url",
            type: "String"
        }, {
            name: "data",
            type: "Map",
            optional: true
        }, {
            name: "callback(data, textStatus)",
            type: "Function",
            optional: true
        }]
    }],
    "jQuery.get": [{
        added: "1.0",
        arg: [{
            name: "url",
            type: "String"
        }, {
            name: "data",
            type: "Map, String",
            optional: true
        }, {
            name: "callback(data, textStatus, XMLHttpRequest)",
            type: "Function",
            optional: true
        }, {
            name: "dataType",
            type: "String",
            optional: true
        }]
    }],
    "jQuery.ajax": [{
        added: "1.0",
        arg: [{
            name: "settings",
            type: "Map"
        }]
    }],
    length: [{
        added: "1.0"
    }],
    children: [{
        added: "1.0",
        arg: [{
            name: "selector",
            type: "Selector",
            optional: true
        }]
    }],
    selector: [{
        added: "1.3"
    }],
    add: [{
        added: "1.0",
        arg: [{
            name: "selector",
            type: "Selector"
        }]
    }, {
        added: "1.0",
        arg: [{
            name: "elements",
            type: "Elements"
        }]
    }, {
        added: "1.0",
        arg: [{
            name: "html",
            type: "HTML"
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "selector",
            type: "Selector"
        }, {
            name: "context",
            type: "Element"
        }]
    }],
    context: [{
        added: "1.3"
    }],
    outerWidth: [{
        added: "1.2.6",
        arg: [{
            name: "includeMargin",
            type: "Boolean",
            optional: true
        }]
    }],
    outerHeight: [{
        added: "1.2.6",
        arg: [{
            name: "includeMargin",
            type: "Boolean",
            optional: true
        }]
    }],
    toggle: [{
        added: "1.0",
        arg: [{
            name: "handler(eventObject)",
            type: "Function"
        }, {
            name: "handler(eventObject)",
            type: "Function"
        }, {
            name: "handler(eventObject)",
            type: "Function",
            optional: true
        }]
    }, {
        added: "1.0",
        arg: [{
            name: "duration",
            type: "String,Number",
            optional: true
        }, {
            name: "callback",
            type: "Callback",
            optional: true
        }]
    }, {
        added: "1.3",
        arg: [{
            name: "showOrHide",
            type: "Boolean"
        }]
    }],
    innerWidth: [{
        added: "1.2.6"
    }],
    innerHeight: [{
        added: "1.2.6"
    }],
    "jQuery.param": [{
        added: "1.2",
        arg: [{
            name: "obj",
            type: "Array, Object"
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "obj",
            type: "Array, Object"
        }, {
            name: "traditional",
            type: "Boolean"
        }]
    }],
    hide: [{
        added: "1.0"
    }, {
        added: "1.0",
        arg: [{
            name: "duration",
            type: "String,Number"
        }, {
            name: "callback",
            type: "",
            optional: true
        }]
    }],
    width: [{
        added: "1.0"
    }, {
        added: "1.0",
        arg: [{
            name: "value",
            type: "String, Number"
        }]
    }],
    height: [{
        added: "1.0"
    }, {
        added: "1.0",
        arg: [{
            name: "value",
            type: "String, Number"
        }]
    }],
    show: [{
        added: "1.0"
    }, {
        added: "1.0",
        arg: [{
            name: "duration",
            type: "String,Number"
        }, {
            name: "callback",
            type: "Callback",
            optional: true
        }]
    }],
    scrollLeft: [{
        added: "1.2.6"
    }, {
        added: "1.2.6",
        arg: [{
            name: "value",
            type: "Number"
        }]
    }],
    "jQuery.trim": [{
        added: "1.0"
    }],
    "jQuery.isFunction": [{
        added: "1.2"
    }],
    "jQuery.isArray": [{
        added: "1.3",
        arg: [{
            name: "obj",
            type: "Object"
        }]
    }],
    "jQuery.unique": [{
        added: "1.1.3",
        arg: [{
            name: "array",
            type: "Array"
        }]
    }],
    "jQuery.merge": [{
        added: "1.0",
        arg: [{
            name: "first",
            type: "Array"
        }, {
            name: "second",
            type: "Array"
        }]
    }],
    "jQuery.inArray": [{
        added: "1.2",
        arg: [{
            name: "value",
            type: "Any"
        }, {
            name: "array",
            type: "Array"
        }]
    }],
    "jQuery.map": [{
        added: "1.0",
        arg: [{
            name: "array",
            type: "Array"
        }, {
            name: "callback(elementOfArray, indexInArray)",
            type: "Function"
        }]
    }],
    "jQuery.makeArray": [{
        added: "1.2",
        arg: [{
            name: "obj",
            type: "Object"
        }]
    }],
    "jQuery.grep": [{
        added: "1.0",
        arg: [{
            name: "array",
            type: "Array"
        }, {
            name: "function(elementOfArray, indexInArray)",
            type: "Function"
        }, {
            name: "invert",
            type: "Boolean",
            optional: true
        }]
    }],
    "jQuery.extend": [{
        added: "1.0",
        arg: [{
            name: "target",
            type: "Object"
        }, {
            name: "object1",
            type: "Object",
            optional: true
        }, {
            name: "objectN",
            type: "Object",
            optional: true
        }]
    }, {
        added: "1.1.4",
        arg: [{
            name: "deep",
            type: "Boolean",
            optional: true
        }, {
            name: "target",
            type: "Object"
        }, {
            name: "object1",
            type: "Object"
        }, {
            name: "objectN",
            type: "Object",
            optional: true
        }]
    }],
    "jQuery.each": [{
        added: "1.0",
        arg: [{
            name: "object",
            type: "Object, Array"
        }, {
            name: "callback(indexInArray, valueOfElement)",
            type: "Function"
        }, {
            name: 'args',
            type: 'Array',
            optional: true
        }]
    }],
    "jQuery.boxModel": [{
        added: "1.0"
    }],
    scrollTop: [{
        added: "1.2.6"
    }, {
        added: "1.2.6",
        arg: [{
            name: "value",
            type: "Number"
        }]
    }],
    "jQuery.support": [{
        added: "1.3"
    }],
    position: [{
        added: "1.2"
    }],
    offset: [{
        added: "1.2"
    }, {
        added: "1.4",
        arg: [{
            name: "coordinates",
            type: "Object"
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "function(index, coords)",
            type: "Function"
        }]
    }],
    css: [{
        added: "1.0",
        arg: [{
            name: "propertyName",
            type: "String"
        }]
    }, {
        added: "1.0",
        arg: [{
            name: "propertyName",
            type: "String"
        }, {
            name: "value",
            type: "String, Number"
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "propertyName",
            type: "String"
        }, {
            name: "function(index, value)",
            type: "Function"
        }]
    }, {
        added: "1.0",
        arg: [{
            name: "map",
            type: "Map"
        }]
    }],
    unwrap: [{
        added: "1.4"
    }],
    detach: [{
        added: "1.4",
        arg: [{
            name: "selector",
            type: "Selector",
            optional: true
        }]
    }],
    clone: [{
        added: "1.0",
        arg: [{
            name: "withDataAndEvents",
            type: "Boolean",
            optional: true
        }]
    }],
    remove: [{
        added: "1.0",
        arg: [{
            name: "selector",
            type: "String",
            optional: true
        }]
    }],
    replaceAll: [{
        added: "1.2"
    }],
    replaceWith: [{
        added: "1.2",
        arg: [{
            name: "newContent",
            type: "String, Element, jQuery"
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "function",
            type: "Function"
        }]
    }],
    wrapInner: [{
        added: "1.2",
        arg: [{
            name: "wrappingElement",
            type: "String"
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "wrappingFunction",
            type: "Function"
        }]
    }],
    wrapAll: [{
        added: "1.2",
        arg: [{
            name: "wrappingElement",
            type: "String, Selector, Element, jQuery"
        }]
    }],
    wrap: [{
        added: "1.0",
        arg: [{
            name: "wrappingElement",
            type: "String, Selector, Element, jQuery"
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "wrappingFunction",
            type: "Function"
        }]
    }],
    insertBefore: [{
        added: "1.0",
        arg: [{
            name: "target",
            type: "Selector, Element, jQuery"
        }]
    }],
    before: [{
        added: "1.0",
        arg: [{
            name: "content",
            type: "String, Element, jQuery"
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "function",
            type: "Function"
        }]
    }],
    insertAfter: [{
        added: "1.0",
        arg: [{
            name: "target",
            type: "Selector, Element, jQuery"
        }]
    }],
    after: [{
        added: "1.0",
        arg: [{
            name: "content",
            type: "String, Element, jQuery"
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "function",
            type: "Function"
        }]
    }],
    prependTo: [{
        added: "1.0",
        arg: [{
            name: "target",
            type: "Selector, Element, jQuery"
        }]
    }],
    prepend: [{
        added: "1.0",
        arg: [{
            name: "content",
            type: "String, Element, jQuery",
            multiple: true
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "function(index, html)",
            type: "Function"
        }]
    }],
    appendTo: [{
        added: "1.0",
        arg: [{
            name: "target",
            type: "Selector, Element, jQuery"
        }]
    }],
    append: [{
        added: "1.0",
        arg: [{
            name: "content",
            type: "String, Element, jQuery",
            multiple: true
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "function(index, html)",
            type: "Function"
        }]
    }],
    val: [{
        added: "1.0"
    }, {
        added: "1.0",
        arg: [{
            name: "value",
            type: "String"
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "function",
            type: "Function"
        }]
    }],
    html: [{
        added: "1.0"
    }, {
        added: "1.0",
        arg: [{
            name: "htmlString",
            type: "String"
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "function(index, html)",
            type: "Function"
        }]
    }],
    map: [{
        added: "1.2",
        arg: [{
            name: "callback(index, domElement)",
            type: "Function"
        }]
    }],
    is: [{
        added: "1.0",
        arg: [{
            name: "selector",
            type: "Selector"
        }]
    }],
    filter: [{
        added: "1.0",
        arg: [{
            name: "selector",
            type: "Selector"
        }]
    }, {
        added: "1.0",
        arg: [{
            name: "function(index)",
            type: "Function"
        }]
    }],
    toggleClass: [{
        added: "1.0",
        arg: [{
            name: "className",
            type: "String"
        }]
    }, {
        added: "1.3",
        arg: [{
            name: "className",
            type: "String"
        }, {
            name: "switch",
            type: "Boolean"
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "function(index, class)",
            type: "Function"
        }, {
            name: "switch",
            type: "Boolean",
            optional: true
        }]
    }],
    removeClass: [{
        added: "1.0",
        arg: [{
            name: "className",
            type: "String",
            optional: true
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "function(index, class)",
            type: "Function"
        }]
    }],
    hasClass: [{
        added: "1.2",
        arg: [{
            name: "className",
            type: "String"
        }]
    }],
    removeAttr: [{
        added: "1.0",
        arg: [{
            name: "attributeName",
            type: "String"
        }]
    }],
    attr: [{
        added: "1.0",
        arg: [{
            name: "attributeName",
            type: "String"
        }]
    }, {
        added: "1.0",
        arg: [{
            name: "attributeName",
            type: "String"
        }, {
            name: "value",
            type: "*"
        }]
    }, {
        added: "1.0",
        arg: [{
            name: "map",
            type: "Map"
        }]
    }, {
        added: "1.1",
        arg: [{
            name: "attributeName",
            type: "String"
        }, {
            name: "function(index, attr)",
            type: "Function"
        }]
    }],
    addClass: [{
        added: "1.0",
        arg: [{
            name: "className",
            type: "String"
        }]
    }, {
        added: "1.4",
        arg: [{
            name: "function(index, class)",
            type: "Function"
        }]
    }]
}