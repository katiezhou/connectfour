# Project 1: Connect Four

### Technology
In my Connect Four game, I used a combination of preset HTML elements and element attributes like IDs and classes, CSS styling, basic jQuery DOM accessing and manipulation, and JavaScript logic and functions. 

### Approach
My code visually appears a little intimidating at first glance because of the many variables and arrays that are used in the JS file and because of all 42 of the divs that are in the HTML. However, this is just because my Connect Four game takes more of a data-heavy approach so that the logic/math end (the pure JavasCript) is actually much more concise and coherent. 

For example, instead of setting classes on HTML "row" elements and using jQuery to access them, like I did, I could have made a for-loop or nested loop that creates 42 divs (6 x 7) and populates an arbitrary "rows" array with 6 elements of 7 sub-elements each. But since this hypothetical array isn't connected to the HTML file, every time a player makes a move, there would have to be a new action to find and change the corresponding element in the array. 

You'll see that the "checkForWin" function is only about 10 lines long and I can check the entire board for a win after every move by calling it three times, each time passing a different argument. This is an approach that I definitely wanted to try after finishing my Tic Tac Toe game, in which the checkForWin function was a mess of "if" statements and all win possibilities laid out.

### Strugs
The major turning point for me in this project - the main obstacle I had to overcome - was when I decided to use column, row, and diagonal classes on all 42 divs in the HTML document. Before that point, I had pseudo-coded the same idea of having a simpler win checker function that would check row, column, and diagonal arrays, but I was stuck on how to actually put the right spots in the right arrays without hard-coding it all out in JavaScript. Another related issue was the jQuery syntax that needed to be used to access the elements in the classes I created. I kept getting "fn.init" whenever I tried to make an array, so I then ran ```jQuery.makeArray()``` and it seemed to work after that.

I'm also getting a lot more comfortable with CSS, but sometimes even with div containers around everything (literally everything in my HTML), the alignment doesn't really work exactly how I want it to.

### Unsolved Problems
meh
None that I can think of... all issues have been successfully debugged

installation instructions
etc.
