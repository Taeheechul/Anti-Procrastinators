//accordion
$(document).ready(function(){
  
  
  $("#button").click(function() {
   
  var input = $("#input").val();
    console.log(input);


//  if (sessionStorage.getItem("userInput")) {
  
//   $("#t1").append(data)= sessionStorage.getItem("userInput");
//}
//  sessionStorage.setItem("userInput", input);
    
 
    
//    var data = sessionStorage.getItem("userInput");
//    $("#t1").append(data);
    
    
//On refresh, I want to load stored variables 

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


$( "#button1" ).click(function() {
  $( "#t1" ).empty();
});

$( "#button2" ).click(function() {
  $( "#t2" ).empty();
});

$( "#button3" ).click(function() {
  $( "#t3" ).empty();
});



$(".search").attr("webSearchQueryAddition","math");
    });
    
    

  
$('.Task').hide();
$('.title-task').click(function(){
    $(this).next().slideToggle('slow');
    
});


//else {
    //document.getElementById("task").innerHTML = "Sorry, your browser does not support Web Storage...";
//}



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


});

});