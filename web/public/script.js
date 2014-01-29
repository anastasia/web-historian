var allRooms = {};
var get = function(){
  $.ajax({
      url: 'http://127.0.0.1:8080/blah',
      // data: , 
      success: function(data){
       
      },
  });
};


get();

var yourURL = {
  'url': 'www.google.com', 
}; 


//Format for POST
var post = function(){
    $.ajax({
      url: 'http://127.0.0.1:8080/blah',
      type: 'POST',
      data: JSON.stringify(yourURL),
      contentType: 'application/json',
      success: function (data) {
        console.log('your URL', data);
      },
      error: function (data) {
        console.error('Failed to send url');
      }
    });
};


// fill in input with url
var enterWebsite = function(){
    yourURL.url = $('#yourURL').value;
    console.log(yourURL)
    if (yourURL.url.length){
        post();
    } else {
      console.log("error, field is blank");
    }
   
}
$('#submit').on('click', function(){
    console.log($('#yourURL').value)
    enterWebsite();
});

// $(document).keypress(function(e){
//     if(e.which === 13){
//         enterWebsite();
//     }
// })
