/**
 * jQuery Lint
 * ---
 * VERSION 0.2
 * ---
 * jQuery lint creates a thin blanket over jQuery that'll
 * report any potentially erroneous activity the console.
 * ---
 * Idea from:
 *      http://markmail.org/message/wzkosk2s5jklpkv4
 *      http://groups.google.com/group/jquery-dev/browse_thread/thread/9a15cca62ceb2444
 * ---
 * @author James Padolsey
 * @contributors ...
 * ---
 * Dual licensed under the MIT and GPL licenses.
 *    - http://www.opensource.org/licenses/mit-license.php
 *    - http://www.gnu.org/copyleft/gpl.html
 */

(function(){
    
    var alias = 'jQuery',
        
        // Define console if not defined
        // Feel free to edit this
        _console = {
            warn: window.console && console.warn || function(){},
            group: window.console && console.group || function(){},
            groupEnd: window.console && console.groupEnd || function(){},
            groupCollapsed: window.console && console.groupCollapsed || function(){},
            log: window.console && console.log || function(){}
        },
        
        langs = {
            en: {
                incorrectCall: '%0(...) called incorrectly',
                specialCheckFailed: '%0(...) special check failed',
                moreInfo: 'More info:',
                youPassed: 'You passed: ',
                collection: 'Collection:',
                availableSigsInclude: 'Available signatures include: ',
                errorThrown: 'When I called %0(...) with your args, an error was thrown!',
                repeatSelector: 'You\'ve used the same selector more than once.',
                info: 'Info',
                selector: 'Selector: ',
                selectorAdvice: 'You should only use the same selector more than once when you know the returned collection will be different. For example, if you\'ve added more elements to the page that may comply with the selector',
                noElementsFound: 'No elements were found with the selector: "%0"',
                combineCalls: 'Why not combine these calls by passing an object? E.g. \n%0(%1)',
                methodTwice: 'You\'ve called %0(...) more than once on the same jQuery object',
                triggeredBy: 'Triggered by %0 event',
                event: 'Event:',
                handler: 'Handler:',
                location: 'Location:'
            }
        },
        
        // Add specific checks
        // This is the best place to bring up bad practices
        specialChecks = [
            {/* Level 0 */},
            {/* Level 1 */},
            {/* Level 2 */},
            {/* Level 3 */}
        ],
        
        // Local scope jQuery
        _jQuery = window[alias],
        
        lint = {
            level: 3,
            special: specialChecks,
            lang: 'en',
            langs: langs,
            console: _console
        },
        
        // Only cover certain fns under the jQ namespace
        jQNameSpace = /^(ajax|get|post|proxy|each|map|queue|ajax.+|removeData|data|pushStack)$/,
        
        // API data, only with what we need
        api = {"jQuery.proxy":[{added:"1.4",arg:[{name:"function",type:"Function"},{name:"scope",type:"Object"}]},{added:"1.4",arg:[{name:"scope",type:"Object"},{name:"name",type:"String"}]}],focusout:[{added:"1.4",arg:[{name:"handler(eventObject)",type:"Function"}]}],focusin:[{added:"1.4",arg:[{name:"handler(eventObject)",type:"Function"}]}],has:[{added:"1.4",arg:[{name:"selector",type:"String"}]},{added:"1.4",arg:[{name:"contained",type:"Element"}]},{added:"1.1.4"}],"jQuery.contains":[{added:"1.4",arg:[{name:"container",type:"Element"},{name:"contained",type:"Element"}]}],"jQuery.noop":[{added:"1.4"}],delay:[{added:"1.4",arg:[{name:"duration",type:"Integer"},{name:"queueName",type:"String",optional:true}]}],parentsUntil:[{added:"1.4",arg:[{name:"selector",type:"Selector",optional:true}]}],prevUntil:[{added:"1.4",arg:[{name:"selector",type:"Selector",optional:true}]}],nextUntil:[{added:"1.4",arg:[{name:"selector",type:"Selector",optional:true}]}],"event.isImmediatePropagationStopped":[{added:"1.3"}],"event.stopImmediatePropagation":[{added:"1.3"}],"event.isPropagationStopped":[{added:"1.3"}],"event.stopPropagation":[{added:"1.0"}],"event.isDefaultPrevented":[{added:"1.3"}],"event.preventDefault":[{added:"1.0"}],"event.timeStamp":[{added:"1.2.6"}],"event.result":[{added:"1.3"}],"event.which":[{added:"1.1.3"}],"event.pageY":[{added:"1.0.4"}],"event.pageX":[{added:"1.0.4"}],"event.currentTarget":[{added:"1.3"}],"event.relatedTarget":[{added:"1.1.4"}],"event.data":[{added:"1.1"}],"event.target":[{added:"1.0"}],"event.type":[{added:"1.0"}],"jQuery.fx.off":[{added:"1.3"}],each:[{added:"1.0",arg:[{name:"function(index, Element)",type:"Function"}]}],"jQuery.pushStack":[{added:"1.0",arg:[{name:"elements",type:"Array"}]},{added:"1.3",arg:[{name:"elements",type:"Array"},{name:"name",type:"String"},{name:"arguments",type:"Array"}]}],"jQuery.globalEval":[{added:"1.0.4",arg:[{name:"code",type:"String"}]}],"jQuery.isXMLDoc":[{added:"1.1.4",arg:[{name:"node",type:"Element"}]}],"jQuery.removeData":[{added:"1.2.3",arg:[{name:"name",type:"String",optional:true}]}],"jQuery.data":[{added:"1.2.3",arg:[{name:"element",type:"Element"},{name:"key",type:"String"},{name:"value",type:"Object"}]},{added:"1.2.3",arg:[{name:"element",type:"Element"},{name:"key",type:"String"}]},{added:"1.4"}],"jQuery.dequeue":[{added:"1.3",arg:[{name:"queueName",type:"String",optional:true}]}],"jQuery.queue":[{added:"1.3",arg:[{name:"queueName",type:"String",optional:true}]},{added:"1.3",arg:[{name:"queueName",type:"String",optional:true},{name:"newQueue",type:"Array"}]},{added:"1.3",arg:[{name:"queueName",type:"String",optional:true},{name:"callback()",type:"Function"}]}],clearQueue:[{added:"1.4",arg:[{name:"queueName",type:"String",optional:true}]}],toArray:[{added:"1.4"}],"jQuery.isEmptyObject":[{added:"1.4",arg:[{name:"object",type:"Object"}]}],"jQuery.isPlainObject":[{added:"1.4",arg:[{name:"object",type:"Object"}]}],keydown:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]},{added:"1.0"}],index:[{added:"1.4"},{added:"1.4",arg:[{name:"selector",type:"Selector"}]},{added:"1.0",arg:[{name:"element",type:"Element, jQuery"}]}],removeData:[{added:"1.2.3",arg:[{name:"name",type:"String",optional:true}]}],data:[{added:"1.2.3",arg:[{name:"key",type:"String"},{name:"value",type:"Object"}]},{added:"1.4",arg:[{name:"obj",type:"Object"}]},{added:"1.2.3",arg:[{name:"key",type:"String"}]},{added:"1.4"}],get:[{added:"1.0",arg:[{name:"index",type:"Number",optional:true}]}],size:[{added:"1.0"}],"jQuery.noConflict":[{added:"1.0",arg:[{name:"removeAll",type:"Boolean",optional:true}]}],selected:[{added:"1.0"}],checked:[{added:"1.0"}],disabled:[{added:"1.0"}],enabled:[{added:"1.0"}],file:[{added:"1.0"}],button:[{added:"1.0"}],reset:[{added:"1.0"}],image:[{added:"1.0"}],submit:[{added:"1.0"},{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]},{added:"1.0"}],checkbox:[{added:"1.0"}],radio:[{added:"1.0"}],password:[{added:"1.0"}],text:[{added:"1.0"},{added:"1.0"},{added:"1.0",arg:[{name:"textString",type:"String"}]},{added:"1.4",arg:[{name:"function(index, text)",type:"Function"}]}],input:[{added:"1.0"}],"only-child":[{added:"1.1.4"}],"last-child":[{added:"1.1.4"}],"first-child":[{added:"1.1.4"}],"nth-child":[{added:"1.1.4",arg:[{name:"index",type:"Number/String"}]}],attributeContainsPrefix:[{added:"1.0",arg:[{name:"attribute",type:"String"},{name:"value",type:"String"}]}],attributeContainsWord:[{added:"1.0",arg:[{name:"attribute",type:"String"},{name:"value",type:"String"}]}],attributeMultiple:[{added:"1.0",arg:[{name:"attributeFilter1",type:"Selector"},{name:"attributeFilter2",type:"Selector"},{name:"attributeFilterN",type:"Selector",optional:true}]}],attributeContains:[{added:"1.0",arg:[{name:"attribute",type:"String"},{name:"value",type:"String"}]}],attributeEndsWith:[{added:"1.0",arg:[{name:"attribute",type:"String"},{name:"value",type:"String"}]}],attributeStartsWith:[{added:"1.0",arg:[{name:"attribute",type:"String"},{name:"value",type:"String"}]}],attributeNotEqual:[{added:"1.0",arg:[{name:"attribute",type:"String"},{name:"value",type:"String"}]}],attributeEquals:[{added:"1.0",arg:[{name:"attribute",type:"String"},{name:"value",type:"String"}]}],attributeHas:[{added:"1.0",arg:[{name:"attribute",type:"String"}]}],visible:[{added:"1.0"}],hidden:[{added:"1.0"}],parent:[{added:"1.0"},{added:"1.0",arg:[{name:"selector",type:"Selector",optional:true}]}],empty:[{added:"1.0"},{added:"1.0"}],contains:[{added:"1.1.4"}],animated:[{added:"1.2"}],header:[{added:"1.2"}],lt:[{added:"1.0",arg:[{name:"index",type:"Number"}]}],gt:[{added:"1.0"}],eq:[{added:"1.0",arg:[{name:"index",type:"Number"}]},{added:"1.1.2",arg:[{name:"index",type:"Integer"}]}],odd:[{added:"1.0"}],even:[{added:"1.0"}],not:[{added:"1.0",arg:[{name:"selector",type:"Selector"}]},{added:"1.0",arg:[{name:"selector",type:"Selector"}]},{added:"1.0",arg:[{name:"elements",type:"Elements"}]},{added:"1.0",arg:[{name:"function(index)",type:"Function"}]}],last:[{added:"1.0"},{added:"1.2"}],first:[{added:"1.0"},{added:"1.2"}],"next siblings":[{added:"1.0",arg:[{name:"prev",type:"Selector"},{name:"siblings",type:"Selector"}]}],"next adjacent":[{added:"1.0",arg:[{name:"prev",type:"Selector"},{name:"next",type:"Selector"}]}],child:[{added:"1.0",arg:[{name:"parent",type:"Selector"},{name:"child",type:"Selector"}]}],descendant:[{added:"1.0",arg:[{name:"ancestor",type:"Selector"},{name:"descendant",type:"Selector"}]}],multiple:[{added:"1.0",arg:[{name:"selector1",type:"Selector"},{name:"selector2",type:"Selector"},{name:"selectorN",type:"Selector",optional:true}]}],all:[{added:"1.0"}],"class":[{added:"1.0",arg:[{name:"class",type:"String"}]}],element:[{added:"1.0",arg:[{name:"element",type:"String"}]}],id:[{added:"1.0",arg:[{name:"id",type:"String"}]}],scroll:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]},{added:"1.0"}],resize:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]},{added:"1.0"}],dequeue:[{added:"1.2",arg:[{name:"queueName",type:"String",optional:true}]}],queue:[{added:"1.2",arg:[{name:"queueName",type:"String",optional:true}]},{added:"1.2",arg:[{name:"queueName",type:"String",optional:true},{name:"newQueue",type:"Array"}]},{added:"1.2",arg:[{name:"queueName",type:"String",optional:true},{name:"callback( next )",type:"Function"}]}],keyup:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]},{added:"1.0"}],keypress:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]},{added:"1.0"}],select:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]},{added:"1.0"}],change:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]},{added:"1.0"}],blur:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]},{added:"1.0"}],focus:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]},{added:"1.0"}],mousemove:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]},{added:"1.0"}],hover:[{added:"1.0",arg:[{name:"handlerIn(eventObject)",type:"Function"},{name:"handlerOut(eventObject)",type:"Function"}]}],mouseleave:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]},{added:"1.0"}],mouseenter:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]},{added:"1.0"}],mouseout:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]},{added:"1.0"}],mouseover:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]},{added:"1.0"}],dblclick:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]},{added:"1.0"}],click:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]},{added:"1.0"}],mouseup:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]},{added:"1.0"}],mousedown:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]},{added:"1.0"}],error:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]}],unload:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]}],load:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"}]},{added:"1.0",arg:[{name:"url",type:"String"},{name:"data",type:"Map, String",optional:true},{name:"success(responseText, textStatus, XMLHttpRequest)",type:"Function",optional:true}]}],ready:[{added:"1.0",arg:[{name:"handler",type:"Function"}]}],die:[{added:"1.3",arg:[{name:"eventType",type:"String"},{name:"handler",type:"String",optional:true}]}],"jQuery.browser":[{added:"1.0"}],"jQuery.browser.version":[{added:"1.1.3"}],live:[{added:"1.3",arg:[{name:"eventType",type:"String"},{name:"handler",type:"Function"}]},{added:"1.4",arg:[{name:"eventType",type:"String"},{name:"eventData",type:"Object",optional:true},{name:"handler",type:"Function"}]}],triggerHandler:[{added:"1.2",arg:[{name:"eventType",type:"String"},{name:"extraParameters",type:"Array",optional:true}]}],trigger:[{added:"1.0",arg:[{name:"eventType",type:"String"},{name:"extraParameters",type:"Array"}]}],ajaxComplete:[{added:"1.0",arg:[{name:"handler(event, XMLHttpRequest, ajaxOptions)",type:"Function"}]}],one:[{added:"1.1",arg:[{name:"eventType",type:"String"},{name:"eventData",type:"Object",optional:true},{name:"handler(eventObject)",type:"Function"}]}],serializeArray:[{added:"1.2"}],serialize:[{added:"1.0"}],"jQuery.ajaxSetup":[{added:"1.1",arg:[{name:"options",type:"Options"}]}],ajaxSuccess:[{added:"1.0",arg:[{name:"handler(event, XMLHttpRequest, ajaxOptions)",type:"Function"}]}],ajaxStop:[{added:"1.0",arg:[{name:"handler()",type:"Function"}]}],ajaxStart:[{added:"1.0",arg:[{name:"handler()",type:"Function"}]}],ajaxSend:[{added:"1.0",arg:[{name:"handler(event, XMLHttpRequest, ajaxOptions)",type:"Function"}]}],ajaxError:[{added:"1.0",arg:[{name:"handler(event, XMLHttpRequest, ajaxOptions, thrownError)",type:"Function"}]}],unbind:[{added:"1.0",arg:[{name:"eventType",type:"String"},{name:"handler(eventObject)",type:"Function"}]},{added:"1.0",arg:[{name:"event",type:"Object"}]}],bind:[{added:"1.0",arg:[{name:"eventType",type:"String"},{name:"eventData",type:"Object",optional:true},{name:"handler(eventObject)",type:"Function"}]},{added:"1.4",arg:[{name:"events",type:"Object"}]}],slice:[{added:"1.1.4",arg:[{name:"start",type:"Integer"}]},{added:"1.1.4",arg:[{name:"end",type:"Integer",optional:true}]}],jQuery:[{added:"1.0",arg:[{name:"selector",type:"selector"},{name:"context",type:"Element, jQuery",optional:true}]},{added:"1.0",arg:[{name:"element",type:"Element"}]},{added:"1.0",arg:[{name:"elementArray",type:"Array"}]},{added:"1.0",arg:[{name:"jQuery object",type:"Object"}]},{added:"1.4"},{added:"1.0",arg:[{name:"html",type:"String"},{name:"ownerDocument",type:"document",optional:true}]},{added:"1.4",arg:[{name:"html",type:"String"},{name:"props",type:"Object"}]},{added:"1.0",arg:[{name:"callback",type:"Function"}]}],stop:[{added:"1.2",arg:[{name:"clearQueue",type:"Boolean",optional:true},{name:"jumpToEnd",type:"Boolean",optional:true}]}],end:[{added:"1.0"}],andSelf:[{added:"1.2"}],siblings:[{added:"1.0",arg:[{name:"selector",type:"Selector",optional:true}]}],animate:[{added:"1.0",arg:[{name:"properties",type:"Options"},{name:"duration",type:"String,Number",optional:true},{name:"easing",type:"String",optional:true},{name:"callback",type:"Callback",optional:true}]},{added:"1.0",arg:[{name:"properties",type:"Options"},{name:"options",type:"Options"}]}],prevAll:[{added:"1.2",arg:[{name:"selector",type:"Selector",optional:true}]}],prev:[{added:"1.0",arg:[{name:"selector",type:"Selector",optional:true}]}],fadeTo:[{added:"1.0",arg:[{name:"duration",type:"String,Number"},{name:"opacity",type:"Number"},{name:"callback",type:"Callback",optional:true}]}],fadeOut:[{added:"1.0",arg:[{name:"duration",type:"String,Number",optional:true},{name:"callback",type:"Callback",optional:true}]}],parents:[{added:"1.0",arg:[{name:"selector",type:"Selector",optional:true}]}],fadeIn:[{added:"1.0",arg:[{name:"duration",type:"String,Number",optional:true},{name:"callback",type:"Callback",optional:true}]}],offsetParent:[{added:"1.26"}],slideToggle:[{added:"1.0",arg:[{name:"duration",type:"String,Number",optional:true},{name:"callback",type:"Callback",optional:true}]}],"jQuery.post":[{added:"1.0",arg:[{name:"url",type:"String"},{name:"data",type:"Map, String",optional:true},{name:"success(data, textStatus)",type:"Function",optional:true},{name:"dataType",type:"String",optional:true}]}],slideUp:[{added:"1.0",arg:[{name:"duration",type:"String,Number",optional:true},{name:"callback",type:"Callback",optional:true}]}],nextAll:[{added:"1.2",arg:[{name:"selector",type:"String",optional:true}]}],next:[{added:"1.0",arg:[{name:"selector",type:"Selector",optional:true}]}],slideDown:[{added:"1.0",arg:[{name:"duration",type:"String,Number",optional:true},{name:"callback",type:"Callback",optional:true}]}],find:[{added:"1.0",arg:[{name:"selector",type:"Selector"}]}],"jQuery.getScript":[{added:"1.0",arg:[{name:"url",type:"String"},{name:"success(data, textStatus)",type:"Function",optional:true}]}],contents:[{added:"1.2"}],closest:[{added:"1.3",arg:[{name:"selector",type:"Selector"}]},{added:"1.4",arg:[{name:"selector",type:"Selector"},{name:"context",type:"Element",optional:true}]},{added:"1.4",arg:[{name:"selectors",type:"Array"},{name:"context",type:"Element",optional:true}]}],"jQuery.getJSON":[{added:"1.0",arg:[{name:"url",type:"String"},{name:"data",type:"Map",optional:true},{name:"callback(data, textStatus)",type:"Function",optional:true}]}],"jQuery.get":[{added:"1.0",arg:[{name:"url",type:"String"},{name:"data",type:"Map, String",optional:true},{name:"callback(data, textStatus, XMLHttpRequest)",type:"Function",optional:true},{name:"dataType",type:"String",optional:true}]}],"jQuery.ajax":[{added:"1.0",arg:[{name:"settings",type:"Map"}]}],length:[{added:"1.0"}],children:[{added:"1.0",arg:[{name:"selector",type:"Selector",optional:true}]}],selector:[{added:"1.3"}],add:[{added:"1.0",arg:[{name:"selector",type:"Selector"}]},{added:"1.0",arg:[{name:"elements",type:"Elements"}]},{added:"1.0",arg:[{name:"html",type:"HTML"}]},{added:"1.4",arg:[{name:"selector",type:"Selector"},{name:"context",type:"Element"}]}],context:[{added:"1.3"}],outerWidth:[{added:"1.2.6",arg:[{name:"includeMargin",type:"Boolean",optional:true}]}],outerHeight:[{added:"1.2.6",arg:[{name:"includeMargin",type:"Boolean",optional:true}]}],toggle:[{added:"1.0",arg:[{name:"handler(eventObject)",type:"Function"},{name:"handler(eventObject)",type:"Function"},{name:"handler(eventObject)",type:"Function",optional:true}]},{added:"1.0",arg:[{name:"duration",type:"String,Number",optional:true},{name:"callback",type:"Callback",optional:true}]},{added:"1.3",arg:[{name:"showOrHide",type:"Boolean"}]}],innerWidth:[{added:"1.2.6"}],innerHeight:[{added:"1.2.6"}],"jQuery.param":[{added:"1.2",arg:[{name:"obj",type:"Array, Object"}]},{added:"1.4",arg:[{name:"obj",type:"Array, Object"},{name:"traditional",type:"Boolean"}]}],hide:[{added:"1.0"},{added:"1.0",arg:[{name:"duration",type:"String,Number"},{name:"callback",type:"",optional:true}]}],width:[{added:"1.0"},{added:"1.0",arg:[{name:"value",type:"String, Number"}]}],height:[{added:"1.0"},{added:"1.0",arg:[{name:"value",type:"String, Number"}]}],show:[{added:"1.0"},{added:"1.0",arg:[{name:"duration",type:"String,Number"},{name:"callback",type:"Callback",optional:true}]}],scrollLeft:[{added:"1.2.6"},{added:"1.2.6",arg:[{name:"value",type:"Number"}]}],"jQuery.trim":[{added:"1.0"}],"jQuery.isFunction":[{added:"1.2"}],"jQuery.isArray":[{added:"1.3",arg:[{name:"obj",type:"Object"}]}],"jQuery.unique":[{added:"1.1.3",arg:[{name:"array",type:"Array"}]}],"jQuery.merge":[{added:"1.0",arg:[{name:"first",type:"Array"},{name:"second",type:"Array"}]}],"jQuery.inArray":[{added:"1.2",arg:[{name:"value",type:"Any"},{name:"array",type:"Array"}]}],"jQuery.map":[{added:"1.0",arg:[{name:"array",type:"Array"},{name:"callback(elementOfArray, indexInArray)",type:"Function"}]}],"jQuery.makeArray":[{added:"1.2",arg:[{name:"obj",type:"Object"}]}],"jQuery.grep":[{added:"1.0",arg:[{name:"array",type:"Array"},{name:"function(elementOfArray, indexInArray)",type:"Function"},{name:"invert",type:"Boolean",optional:true}]}],"jQuery.extend":[{added:"1.0",arg:[{name:"target",type:"Object"},{name:"object1",type:"Object",optional:true},{name:"objectN",type:"Object",optional:true}]},{added:"1.1.4",arg:[{name:"deep",type:"Boolean",optional:true},{name:"target",type:"Object"},{name:"object1",type:"Object"},{name:"objectN",type:"Object",optional:true}]}],"jQuery.each":[{added:"1.0",arg:[{name:"object",type:"Object"},{name:"callback(indexInArray, valueOfElement)",type:"Function"}]}],"jQuery.boxModel":[{added:"1.0"}],scrollTop:[{added:"1.2.6"},{added:"1.2.6",arg:[{name:"value",type:"Number"}]}],"jQuery.support":[{added:"1.3"}],position:[{added:"1.2"}],offset:[{added:"1.2"},{added:"1.4",arg:[{name:"coordinates",type:"Object"}]},{added:"1.4",arg:[{name:"function(index, coords)",type:"Function"}]}],css:[{added:"1.0",arg:[{name:"propertyName",type:"String"}]},{added:"1.0",arg:[{name:"propertyName",type:"String"},{name:"value",type:"String, Number"}]},{added:"1.4",arg:[{name:"propertyName",type:"String"},{name:"function(index, value)",type:"Function"}]},{added:"1.0",arg:[{name:"map",type:"Map"}]}],unwrap:[{added:"1.4"}],detach:[{added:"1.4",arg:[{name:"selector",type:"Selector",optional:true}]}],clone:[{added:"1.0",arg:[{name:"withDataAndEvents",type:"Boolean",optional:true}]}],remove:[{added:"1.0",arg:[{name:"selector",type:"String",optional:true}]}],replaceAll:[{added:"1.2"}],replaceWith:[{added:"1.2",arg:[{name:"newContent",type:"String, Element, jQuery"}]},{added:"1.4",arg:[{name:"function",type:"Function"}]}],wrapInner:[{added:"1.2",arg:[{name:"wrappingElement",type:"String"}]},{added:"1.4",arg:[{name:"wrappingFunction",type:"Function"}]}],wrapAll:[{added:"1.2",arg:[{name:"wrappingElement",type:"String, Selector, Element, jQuery"}]}],wrap:[{added:"1.0",arg:[{name:"wrappingElement",type:"String, Selector, Element, jQuery"}]},{added:"1.4",arg:[{name:"wrappingFunction",type:"Function"}]}],insertBefore:[{added:"1.0",arg:[{name:"target",type:"Selector, Element, jQuery"}]}],before:[{added:"1.0",arg:[{name:"content",type:"String, Element, jQuery"}]},{added:"1.4",arg:[{name:"function",type:"Function"}]}],insertAfter:[{added:"1.0",arg:[{name:"target",type:"Selector, Element, jQuery"}]}],after:[{added:"1.0",arg:[{name:"content",type:"String, Element, jQuery"}]},{added:"1.4",arg:[{name:"function",type:"Function"}]}],prependTo:[{added:"1.0",arg:[{name:"target",type:"Selector, Element, jQuery"}]}],prepend:[{added:"1.0",arg:[{name:"content",type:"String, Element, jQuery"}]},{added:"1.4",arg:[{name:"function(index, html)",type:"Function"}]}],appendTo:[{added:"1.0",arg:[{name:"target",type:"Selector, Element, jQuery"}]}],append:[{added:"1.0",arg:[{name:"content",type:"String, Element, jQuery"}]},{added:"1.4",arg:[{name:"function(index, html)",type:"Function"}]}],val:[{added:"1.0"},{added:"1.0",arg:[{name:"value",type:"String"}]},{added:"1.4",arg:[{name:"function",type:"Function"}]}],html:[{added:"1.0"},{added:"1.0",arg:[{name:"htmlString",type:"String"}]},{added:"1.4",arg:[{name:"function(index, html)",type:"Function"}]}],map:[{added:"1.2",arg:[{name:"callback(index, domElement)",type:"Function"}]}],is:[{added:"1.0",arg:[{name:"selector",type:"Selector"}]}],filter:[{added:"1.0",arg:[{name:"selector",type:"Selector"}]},{added:"1.0",arg:[{name:"function(index)",type:"Function"}]}],toggleClass:[{added:"1.0",arg:[{name:"className",type:"String"}]},{added:"1.3",arg:[{name:"className",type:"String"},{name:"switch",type:"Boolean"}]},{added:"1.4",arg:[{name:"function(index, class)",type:"Function"},{name:"switch",type:"Boolean",optional:true}]}],removeClass:[{added:"1.0",arg:[{name:"className",type:"String",optional:true}]},{added:"1.4",arg:[{name:"function(index, class)",type:"Function"}]}],hasClass:[{added:"1.2",arg:[{name:"className",type:"String"}]}],removeAttr:[{added:"1.0",arg:[{name:"attributeName",type:"String"}]}],attr:[{added:"1.0",arg:[{name:"attributeName",type:"String"}]},{added:"1.0",arg:[{name:"attributeName",type:"String"},{name:"value",type:"Object"}]},{added:"1.0",arg:[{name:"map",type:"Map"}]},{added:"1.1",arg:[{name:"attributeName",type:"String"},{name:"function(index, attr)",type:"Function"}]}],addClass:[{added:"1.0",arg:[{name:"className",type:"String"}]},{added:"1.4",arg:[{name:"function(index, class)",type:"Function"}]}]};
    
    if ( !_jQuery ) {
        return;
    }
    
    lint.api = api;
    
    // Correct API
    // Yes, it's ugly, but necessary...
    api['jQuery.data'][1].arg[1].optional = true; // Making $.data(.,THIS) optional
    api.each[0].arg[1] = api['jQuery.each'][0].arg[2] = {name:'args', type:'Array', optional:true};
    api['jQuery.data'][0].arg[2].type = '*';
    api.attr[1].arg[1].type = '*';
    api['jQuery.each'][0].arg[0].type += ', Array';
    // extraParam to trigger & triggerHandler IS optional
    api.trigger[0].arg[1].optional = true;
    api.triggerHandler[0].arg[1].optional = true;
    api.slice[0].arg[1] = {name:'end',type:'Integer',optional:true};
    // Add elem arg to start of args for jQuery.queue
    var jQQueue = api['jQuery.queue'];
    jQQueue[0].arg.unshift({type:'Element', name:'elem'});
    jQQueue[1].arg.unshift({type:'Element', name:'elem'});
    jQQueue[2].arg.unshift({type:'Element', name:'elem'}); 
    
    
    var version = _jQuery.fn.jquery,
        map = _jQuery.map,
        each = _jQuery.each,
        extend = _jQuery.extend,
        locale = langs[lint.lang],
        undefined,
        slice = function(a,s,e) {
            return Array.prototype.slice.call(a, s || 0, e || a.length);
        },
        compare = function(a,b) {
            
            // Compare two arrays
            
            var i = a.length;
            
            if (a.length !== b.length) {
                return false;
            }
            
            while (i--) {
                if (a[i] !== b[i]) {
                    return false;
                }
            }
            
            return true;
        
        },
        isFunction = function(obj) {
            return toString.call(obj) === "[object Function]";
        },
        isArray = function(obj) {
            return toString.call(obj) === "[object Array]";   
        },
        toString = Object.prototype.toString,
        typeToString = function(o) {
            
            if (typeof o === 'string') {
                return '"' + o.replace(/"/g,'\\"') + '"';
            }
            
            if (isFunction(o)) {
                return 'function(){...}';
            }
            
            return o.toString();
        },
        shaveArray = function(arr) {
            arr = Array.prototype.slice.call(arr);
            // Shave "undefined" off the end of args
            for (var i = arr.length; i--;) {
                if (arr[i] === undefined) {
                    arr.splice(i, 1);
                } else {
                    break;
                }
            }
            return arr;
        },
        // type map
        types = {
            '*': function() {
                return true;
            },
            selector: function(o) {
                return this.String(o);
            },
            Selector: function(o) {
                return this.selector(o);
            },
            Element: function(o) {
                return o && (!!o.nodeName || o === window);
            },
            Elements: function(o) {
                return this.jQuery(o) || this.Array(o);
            },
            Array: function(o) {
                // Just check that it's "array-like"
                return o && o.length !== undefined
                        && typeof o !== 'string' && !isFunction(o);
            },
            jQuery: function(o) {
                return o instanceof _jQuery;
            },
            Object: function(o) {
                return toString.call(o) === '[object Object]';
            },
            Function: function(o) {
                return isFunction(o);
            },
            Callback: function(o) {
                return isFunction(o);
            },
            String: function(o) {
                return typeof o === 'string';
            },
            Number: function(o) {
                return typeof o === 'number' && !isNaN(o);
            },
            Integer: function(o) {
                return this.Number(o) && ~~o === o;
            },
            Map: function(o) {
                return this.Object(o);
            },
            Options: function(o) {
                return this.Object(o);
            },
            'null': function(o) {
                return o === null;
            }
        },
        typeCheck = function typeCheck(type, arg) {
            
            // Check that argument is of the right type
            // The types are specified within the API data
            
            if ( types[type] ) {
                return arg !== undefined && types[type](arg);
            }
            
            if ( type.indexOf(',') ) {
                
                var split = type.split(/,\s?/g),
                    i = split.length;
                    
                while (i--) {
                    if (types[split[i]] && types[split[i]](arg)) {
                        return true;
                    }
                }
                
                return false;
            }
            
            return false;
                
        },
        complies = function complies(args, sig) {
            
            // Determine if argument list complies with
            // signature outlined in API.
            
            var matches = false,
                sigArg,
                argLength = args.length;
            
            if (version < sig.added) {
                // Too new
                return false;
            }
            
            if (!sig.arg) {
                return 0 === args.length;
            }
            
            if (!sig.arg[0] && (args.length > 1)) {
                return false;
            }
            
            for (
                    var sigIndex = 0,
                        argIndex = 0,
                        fullLength = Math.max(argLength,sig.arg.length||1);
                    sigIndex < fullLength || argIndex < argLength;
                    ++sigIndex
                ) {
                
                sigArg = sigIndex === 0 ? sig.arg[0] || sig.arg : sig.arg[sigIndex];
                
                if (!sigArg) {
                    // Too many args
                    return false;
                }
                
                matches = typeCheck(sigArg.type, args[argIndex]);
                
                if (!matches) {
                    if (sigArg.optional) {
                        if (args[argIndex] === undefined || args[argIndex] === null) {
                            ++argIndex;
                            matches = true;
                        }
                        continue;
                    } else {
                        // Sig isn't optional, return false
                        return false;
                    }
                }
                
                ++argIndex;
                
            }
            
            return matches;
            
        },
        logLocation = function() {
            try {
                throw new Error();
            } catch(e) {
                if (e.stack) {
                    lint.console.groupCollapsed(locale.location);
                    lint.console.log(e.stack.replace(
                        /^.+?\n|.+?(jquery\.lint\.js|http:\/\/ajax\.googleapis\.com\/ajax\/libs).+?(\n|$)|.+?(?=@)/g, ''
                    ));
                    lint.console.groupEnd();
                } else {
                    return null;
                }
            }
        },
        selectorCache = {},
        lastTriggeredEvent = {},
        logEvent = function() {
            if (lastTriggeredEvent && lastTriggeredEvent.event) {
                _console.groupCollapsed(locale.triggeredBy.replace(/%0/, lastTriggeredEvent.event.type));
                    _console.log(locale.event, lastTriggeredEvent.event);
                    _console.groupCollapsed(locale.handler);
                        _console.log(lastTriggeredEvent.handler);
                    _console.groupEnd();
                _console.groupEnd();
            }
        },
        internal = false;
    
    function coverMethod(name, meth, args) {
        
        args = shaveArray(args);
        
        var sigs = api[name],
            _console = lint.console,
            i = 0,
            sig,
            specialCheckResults = (function(){
                
                // Perform special checks for current level and
                // all levels below current level.
                
                var lvl = lint.level + 1,
                    checks = [];
                    
                while (lvl--) {
                    if (specialChecks[lvl] && specialChecks[lvl][name]) {
                        checks.push(
                            specialChecks[lvl][name].apply(this, args)
                        )
                    }
                }
                
                return checks;
                
            })(),
            signatureMatch = false,
            self = this,
            sliced = slice(this, 0, 10),
            withinEvent = lastTriggeredEvent ? lastTriggeredEvent.type : null;
        
        if (!sigs || !lint.level || internal) {
            return meth.apply(this, args);
        }
        
        if (this.length > 10) {
            sliced.push('...');
        }
        
        // Check for calls like css().css().css()
        // May as well use css({...})
        if (lint.level > 2 && args[1] && !isFunction(args[1]) && /^(css|attr)$/.test(name) || (name === 'bind' && version >= '1.4')) {
            
            if (this._lastMethodCalled === name) {
                _console.warn(locale.methodTwice.replace(/%0/, name));
                _console.groupCollapsed(locale.moreInfo);
                    logEvent();
                    if (this instanceof _jQuery) {
                        _console.log(locale.collection, sliced);
                    }
                    _console.log(
                        locale.combineCalls
                            .replace(/%0/, name)
                            .replace(/%1/, '{\n' +
                                map([args, this._lastMethodArgs], function(a){
                                    return '  "' + a[0] + '": ' + typeToString(a[1]);
                                }).join(',\n')
                            + '\n}')
                    );
                _console.groupEnd();
            }
            
            this._lastMethodCalled = name;
            this._lastMethodArgs = args;
            setTimeout(function(){
                self._lastMethodCalled = null;
                self._lastMethodArgs = null;
            });
            
        }
        
        // Check all arguments passed to method for compliance
        // against the corresponding signature.
        while ((sig = sigs[i++])) {
            if ( complies(args, sig) ) {
                signatureMatch = true;
                break;
            }
        }
        
        if (!signatureMatch) {
            
            try {
                
                // Args !== signature
                _console.warn(locale.incorrectCall.replace(/%0/, name));
                _console.groupCollapsed(locale.moreInfo);
                    logEvent();
                    if (this instanceof _jQuery) {
                        _console.log(locale.collection, sliced);
                    }
                    logLocation();
                    _console.log(locale.youPassed, args);
                    _console.group(locale.availableSigsInclude);
                        each(sigs, function(i, sig){
                            if (version < sig.added) {
                                return;
                            }
                            var sigArgs = sig.arg;
                            _console.log(
                                name + '(' +
                                (sigArgs ?
                                     sigArgs[0] ?
                                        map(sigArgs, function(sig){
                                            return sig ? sig.optional ? '[' + sig.name + ']' : sig.name : [];
                                        }).join(', ') :
                                        sigArgs.name
                                : '') + ')'
                            );
                        });
                    _console.groupEnd();
                _console.groupEnd();
                
            } catch(e) { }
            
        }
        
        try {
            if (specialCheckResults.length) {
                each(specialCheckResults, function(i, checkResult){
                    if (checkResult && checkResult !== true) {
                        _console.warn(locale.specialCheckFailed.replace(/%0/, name));
                        _console.groupCollapsed(locale.moreInfo);
                            if (this instanceof _jQuery) {
                                _console.log(locale.collection, sliced);
                            }
                            logLocation();
                            _console.log(checkResult);
                        _console.groupEnd();
                    }
                });
            }
        } catch(e) { }
        
        
        try {
            return meth.apply(this, args);
        } catch(e) {
            try {
                _console.warn(
                    locale.errorThrown.replace(/%0/, name), e
                );
                _console.groupCollapsed(locale.moreInfo);
                    logLocation();
                    _console.log(locale.youPassed, args);
                _console.groupEnd();
            } catch(e) { }
            return this;
        }
        
    }
    
    // "Cover" init constructor
    // Reports when no elements found, and when selector
    // used more than once to no effect.
    _jQuery.fn.init = (function(_init){
        
        return function(s,c) {
            
            var ret = coverMethod.call(this, 'jQuery', function(){
                
                    // Set internal flag to avoid incorrect internal method
                    // calls being reported by Lint.
                
                    internal = true;
                    var instance = new _init(s, c);
                    internal = false;
                    
                    return instance
                
                }, arguments),
                _console = lint.console;
                
            try{
                if (typeof s === 'string' && lint.level > 1) {
                    if (!ret[0]) {
                        // No elements returned
                        _console.warn(locale.noElementsFound.replace(/%0/, s));
                    } else {
                        // Check for identical collection already in cache.
                        if ( selectorCache[s] && compare(selectorCache[s], ret) ) {
                            
                            _console.warn(locale.repeatSelector);
                            _console.groupCollapsed(locale.info);
                                logEvent();
                                logLocation();
                                _console.log(locale.selector + '"' + s + '"');
                                _console.log(locale.selectorAdvice);
                            _console.groupEnd();
                            
                        }
                    }
                    selectorCache[s] = ret;
                }
            } catch(e) { }
            
            return ret;
        
        };
        
    })(_jQuery.fn.init);
    
    // Cover all methods, except init
    for (var i in _jQuery.fn) {
        if (i === 'init' || !isFunction(_jQuery.fn[i])) {
            continue;
        }
        _jQuery.fn[i] = (function(meth, name){
            return function() {
                return coverMethod.call(this, name, function(){
                    
                    // Set internal flag.
                    // Any subsequent method calls before this
                    // returns will be ignored. This is to stop
                    // errors being reported from incorrect usage
                    // of jQuery's API, internally.
                    
                    internal = true;
                    var ret = meth.apply(this, arguments);
                    internal = false;
                    
                    return ret;
                
                }, arguments);
            };
        })(_jQuery.fn[i], i);
    }
    
    // Cover some helper function under jQ namespace
    for (var i in _jQuery) {
        
        if ( !jQNameSpace.test(i) || !isFunction(_jQuery[i]) ) {
            continue;
        }
        
        _jQuery[i] = (function(meth, name){
            return function() {
                return coverMethod.call(this, 'jQuery.' + name, function(){
                    internal = true;
                    var ret = meth.apply(this, arguments);
                    internal = false;
                    return ret;
                }, arguments);
            };
        })(_jQuery[i], i);
    }
    
    _jQuery.LINT = lint;
    
    _jQuery.event.add = (function(_add){
        
        // Each triggered event gets assigned to lastTriggeredEvent,
        // Which is immediately nulled after a zero timeout.
        
        return function(elem, types, handler, data) {
            var _handler = handler;
            handler = function(e) {
                lastTriggeredEvent = {event: e, handler: _handler.toString()};
                setTimeout(function(){
                    lastTriggeredEvent = null
                }, 0);
                return _handler.apply(this, arguments);
            };
            return _add.call(this, elem, types, handler, data);
        };
        
    })(_jQuery.event.add);
    
   
})();