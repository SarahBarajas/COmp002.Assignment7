// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.

// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it

//  change balloon size
function changeBalloonSize(event) {
    let balloon = document.getElementById("balloon");
    let currentSize = window.getComputedStyle(balloon).fontSize;
    let newSize = parseFloat(currentSize);

    if (event.key === "ArrowUp") {
        newSize *= 1.1; // Increase size
    } else if (event.key === "ArrowDown") {
        newSize *= 0.9; // Decrease size
    }
    balloon.style.fontSize = newSize + "px";
    event.preventDefault(); // Prevent default arrow behavior
    // Add keydown listener
    window.addEventListener("keydown", changeBalloonSize);

    // Show selected tab, hide others
    function showTab(event) {
        event.preventDefault(); // Prevent default link behavior
    // Hide all tab contents
    document.querySelectorAll("#tabbed-contents > div").forEach(tab => tab.style.display = "none");
    // Remove 'active' class from all links
    document.querySelectorAll("#tabbed-layout ul li a").forEach(link => link.classList.remove("active"));
   // Show clicked tab's content
   let clickedTab = event.target.id.replace("Link", "");
   document.getElementById(clickedTab).style.display = "block"
// Add 'active' class to clicked link
    event.target.classList.add("active");
}
// Set up tab listeners
document.querySelectorAll("#tabbed-layout ul li a").forEach(link => {
    link.addEventListener("click", showTab);
});

// Show first tab by default
document.getElementById("tab1").style.display = "block";
document.getElementById("tab1Link").classList.add("active");


        