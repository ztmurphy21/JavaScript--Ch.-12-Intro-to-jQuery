/*
JavaScript 6th Edition
Chapter 12
Chapter case

Life on Rocks Wildlife Cruises
Author: Zach Murphy
Date:   4-29-2016

Filename: script.js
*/

//selects li elements w/i ul element with class name main menu
//then traverses to children of selected elements then adds
//the class name show to the child elements
//$("ul.mainmenu li").children("ul").addClass("show");

/*
This function takes a single parameter event which refs the event fired
to call the function
*/
function display(event){
    //$(event.currentTarget).children("ul").addClass("show");
    //$(event.currentTarget).children("ul").show();
    $(event.currentTarget).children("ul").slideDown("fast");
}

/*
This function uses removeClass() method to remove show class
and return submenu to default display prop val of none.
*/
function hide(event){
  //$(event.currentTarget).children("ul").removeClass("show");
  $(event.currentTarget).children("ul").hide();
}

$("ul.mainmenu li").hover(display, hide);
