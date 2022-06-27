// M-1 for using JQuery. The JQuery CDN and Js <script> tag has to be in <Head> tag.
// $(document).ready(function(){
//     $("h1").css("color","red");
// })


// M-2 for using JQuery. The JQuery CDN and JS <Script> tag has to be in <body> tag at the last...............................
// $("h1").css("color","red");
// $("h1").css("font-size","3rem");

// JQuery by attaching css class.........
$("h1").addClass("big-title");
// $("h1").removeClass("big-title");   


// to add multiple classes(by putting space between classes)..........................
$("h1").addClass("big-title margin-50");


// to manupulate html elements using JQuery vs traditional JavaScript...............................................
$("h1").text("Hello World!");
document.querySelector("h1").textContent = "Hello Anupam!";

$("button").html("<em>Hey There</em>");
document.querySelector("button").innerHTML = "<strong>Good Bye!</strong>";

$("h1").css("font-size","3rem");
document.querySelector("h1").style.backgroundColor = "green";

console.log(document.querySelector("img").getAttribute("src"));
console.log($("img").attr("src"));

$("a").attr("href","https://www.yahoo.com");
document.querySelector("a").setAttribute("href","https://www.google.com");


// EventListeners using JQuery vs traditional vanilla JScript...........................................................................................
$("h1").click(function() {$("h1").css("color","purple")}); //JQuery syntax for changing `h1` element using click.
document.querySelector("h1").addEventListener("click",function() {document.querySelector("h1").style.backgroundColor="black"}); // JavaScript syntax.


$("button").click(function() {$("h1").css("color","blue")}) //JQuery syntax for changing `h1` element using button click
for(let i=0; i < document.querySelectorAll("button").length; i++) {  // JavaScript syntax
    document.querySelectorAll("button")[i].addEventListener("click", function() {document.querySelector("h1").style.color="yellow"});
}


$(document).keydown(function(event){  // Method-1 JQuery syntax for changing `h1` element using keypress
    $("h1").html(event.key);
})
$(document).on("keypress", function() {  // Method-2 JQuery syntax for changing `h1` element using keypress
    $("h1").css("color","aqua");
})
document.querySelector("html").addEventListener("keydown", function(event) {  // JavaScript Syntax.
    document.querySelector("h1").textContent = event.key
})


// Adding and removing elements using JQuery...............................................................................................................
/*
$("h1").before("<button>Before Button</button>");
$("h1").after("<button>After Button</button>");
$("h1").prepend("<button>Prepend Button</button>");
$("h1").append("<button>Append Button</button>");
// $("button").remove();
*/

// Some more useful functions.........................................................................................................................
/*
$(".1").on("click",function(){$("h1").fadeOut()});
$(".2").on("click",function(){$("h1").fadeIn()});
$(".3").on("click",function(){$("h1").fadeToggle()});
$(".4").on("click",function(){$("h1").hide()});
$(".5").click(function(){$("h1").show()});
$("button").on("click",function(){$("h1").slideDown()});
*/

// JQuery for performing multiple actions in one go....................................................................................................
$("button").on("click", function(){  
    $("h1").slideUp().slideDown().animate({opacity: 0.5})
});

