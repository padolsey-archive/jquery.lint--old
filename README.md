jQuery Lint
===
Tested in jQuery 1.3.2 and 1.4

---
**IMPORTANT** - This is a very young project. There are likely to be a few strange bugs. If you encounter one, please [raise an issue](http://github.com/jamespadolsey/jQuery-Lint/issues). Likely bugs could include:

 * Reporting correct argument lists as incorrect.
 * Nested errors as a result of other oversights - e.g. you call `css()` incorrectly which might internally make a call to another method, which may then raise an error.


###Intro

*jQuery Lint* is a simple script you can download and use with jQuery. It works over the top of jQuery and diligently reports errors and any incorrect usage of jQuery. It will also, to some extent, offer guidance on best practices and performance concerns.

Include it, **after jQuery** like this:

    <script src="jquery.js"></script>
    <script src="jquery.lint.js"></script>
    
Now, just use jQuery as you normally would. When you do something that jQuery Lint deems incorrect or a bad practice then you'll receive a warning in the console. Currently, it only works with Firebug (in Firefox). You can easily define another reporting mechanism within the script itself, but there's little reason to; the errors it reports are browser-agnostic, so you may as well do your testing in Firefox w/ Firebug.

###Screenshot

![jquery.lint.js preview](http://img13.imageshack.us/img13/9527/lint.png)

##What will lint report on?

The reporting level can be set to anywhere between zero (everything off) to three (everything on), via `jQuery.LINT.level`. 

###Level 0 reports:

 * Nothing.

###Level 1 reports:

 * Incorrect argument signatures. The correct argument signatures are defined by the API -- jQuery Lint includes a skinny version of the API which it references to determine whether or not you're passing the correct arguments.
 * Errors thrown by calls to jQuery methods -- usually as a result of incorrect argument signatures.
 
###Level 2 reports:

 * Everything above.
 * Using the same selector twice, and the returned collection being the same both times. If you use the same selector more than once, and the returned collection is the same both times then you should probably be caching the first selection, instead of making subsequent identical selections.
 * Using selectors that don't return anything. jQuery operates fine with empty collections, but Lint will still bring up a warning if this happens.
 
###Level 3 reports:

 * Everything above.
 * Not taking advantage of combined property definitions, via `css({...})` or `attr({...})` or even `bind({...})` (in 1.4):
        
        $('a').css('color','red').css('padding', 20);
        
   Lint would suggest that you use this instead:
   
        $('a').css({color:'red', padding: 20});
        
###Special checks

You can define **your own special checks** via `jQuery.LINT.special`. For example, if you wanted to provide a new check on the main `jQuery` function, to occur on an error reporting level of `1`, this is how you'd define it:

    jQuery.LINT.special[1].jQuery = function(selector, context) {
        
        if (selector === '*') {
            return "Don't use the universal selector!";
        }
        
        // Everything is fine... don't return anything (or return true)
        
    };
    
Other examples:

    jQuery.LINT.special[3]['jQuery.proxy'] = function(deep, o) {
        if (!deep) {
            for (var i in o) {
                if ( jQuery.isPlainObject(o[i]) ) {
                    return "You're calling .extend() without the deep flag, yet the passed object has child objects";
                }
            }
        }
    };
    
    jQuery.LINT.special[2].animate = function(o) {
        if (jQuery.isEmptyObject(o)) {
            return 'You called .animate() with NO properties!??';
        }
    };
    
**Currently, no "special checks" are included in the Lint script. I'm open to including a couple, so please message me with your suggestions.**
 
###License

Unless otherwise specified within any of the plugins, you can assume the following license:

    * Dual licensed under the MIT and GPL licenses.
    *    - http://www.opensource.org/licenses/mit-license.php
    *    - http://www.gnu.org/copyleft/gpl.html

  