$("form").submit(function (e) {
      e.preventDefault();
};

var yourURL = ''; 

var get = function(){
  $.ajax({
      data: yourURL, 
      success: function(data){
        console.log("GET SUCCESS ", yourURL)
      },
      error: function(data){
        console.log("THERE WAS AN ERROR IN YOUR ", data);
      }
  });
};


// fill in input with url
var enterWebsite = function(){
    yourURL = $('#yourURL').val();
    console.log(yourURL, "AHHHHHHHHH")
    if (yourURL.length){
        post();
    } else {
      console.log("error, field is blank");
    }
   
}

$('#submit').on('click', function(){
    console.log($('#yourURL').val())
    enterWebsite();
});

// DON'T NEED POST FOR THIS, RIGHT?
var post = function(){
    $.ajax({
      // url: 'http://127.0.0.1:8080',
      type: 'POST',
      data: JSON.stringify(yourURL),
      contentType: 'application/json',
      success: function (data) {
        console.log('SUCCESS: your URL', data, yourURL);
      },
      error: function (data) {
        console.error('Failed to send url');
      }
    });
};


