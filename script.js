//accordion
$(document).ready(function(){
  
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
  $("body").append(a[0].content + "<p>— " + a[0].title + "</p>")
});
  
  $("#button").click(function() {
   
   var input = $("#input").val();
    console.log(input);

    
  if ($("#t1").text() === "") {
    
    $("#t1").append(input);
    console.log($("#t1").text());
    
  } else if($("#t1").text() != "" && $("#t2").text() === ""){

   $("#t2").append(input);
    console.log($("#t2").text());
    
 } else if($("#t1").text() != "" && $("#t2").text() != "" && $("#t3").text() === ""){
   
    $("#t3").append(input);
    console.log($("#t3").text());
    
 }
    });
    

  
$('.Task').hide();
$('.title-task').click(function(){
    // console.log("wow");
    $(this).next().slideDown();
   
});
});

  

// google API

var myCallback = function() {
  if (document.readyState == 'complete') {
    // Document is ready when CSE element is initialized.
    // Render an element with both search box and search results in div with id 'test'.
    google.search.cse.element.render(
        {
          div: "test",
          tag: 'search'
         });
  } else {
    // Document is not ready yet, when CSE element is initialized.
    google.setOnLoadCallback(function() {
      // Render an element with both search box and search results in div with id 'test'.
        google.search.cse.element.render(
            {
              div: "test",
              tag: 'search'
            });
    }, true);
  }
};

// Insert it before the CSE code snippet so that cse.js can take the script
// parameters, like parsetags, callbacks.
window.__gcse = {
  parsetags: 'explicit',
  callback: myCallback
};

(function() {
  var cx = '016137450971275796276:raogc-nmava'; // Insert your own Custom Search engine ID here
  var gcse = document.createElement('script'); gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);

  console.log(s);
  


})();


localStorage.setItem('wow','okay');
var test = localStorage.getItem('wow');
console.log(test);


