jQuery Lint
===
Tested in jQuery 1.3.2 and 1.4

---
**IMPORTANT** - This is a very young project. There are likely to be a few strange bugs. If you encounter one, please [raise an issue](http://github.com/jamespadolsey/jQuery-Lint/issues). Likely bugs could include:

 * Reporting correct argument lists as incorrect.
 * Nested errors as a result of other oversights - e.g. you call `css()` incorrectly which might internally make a call to another method, which may then raise an error.


##Intro

*jQuery Lint* is a simple script you can download and use with jQuery. It works over the top of jQuery and diligently reports errors and any incorrect usage of jQuery. It will also, to some extent, offer guidance on best practices and performance concerns.

Include it, **after jQuery** like this:

    <script src="jquery.js"></script>
    <script src="jquery.lint.js"></script>
    
Now, just use jQuery as you normally would. When you do something that jQuery Lint deems incorrect or a bad practice then you'll receive a warning in the console. Currently, it only works with Firebug (in Firefox). You can easily define another reporting mechanism within the script itself, but there's little reason to; the errors it reports are browser-agnostic, so you may as well do your testing in Firefox w/ Firebug.

###Screenshot

![jquery.lint.js preview](http://img13.imageshack.us/img13/9527/lint.png)
        
**Read more about jQuery Lint in the [wiki](http://wiki.github.com/jamespadolsey/jQuery-Lint/)!**
 
###License

    * Dual licensed under the MIT and GPL licenses.
    *    - http://www.opensource.org/licenses/mit-license.php
    *    - http://www.gnu.org/copyleft/gpl.html

  