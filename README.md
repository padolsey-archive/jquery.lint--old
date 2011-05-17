jQuery Lint
===
Tested in jQuery 1.4, 1.5 and 1.6 - 1.3.2 is currently not working fine

---
***UPDATE*** (21-06-2010) - The code-base has been refactored, and some of the API has been deprecated -- this should only affect those of you who have extended jQuery Lint. Please download the new version as it does include bug fixes and various other improvements.

---
**IMPORTANT** - If you encounter a bug, please [raise an issue](http://github.com/jamespadolsey/jQuery-Lint/issues). Likely bugs could include:

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

  