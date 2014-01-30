var yourURL = ''; 

var get = function(){
  $.ajax({
      url: 'http://127.0.0.1:8080',
      data: yourURL, 
      success: function(data){
        console.log("GET SUCCESS ", yourURL)
      },
  });
};


// fill in input with url
var enterWebsite = function(){
    yourURL = $('#yourURL').val();
    console.log(yourURL, "AHHHHHHHHH")
    if (yourURL.length){
        get();
    } else {
      console.log("error, field is blank");
    }
   
}

$('#submit').on('click', function(){
    console.log($('#yourURL').val())
    enterWebsite();
});

// DON'T NEED POST FOR THIS, RIGHT?
// var post = function(){
//     $.ajax({
//       url: 'http://127.0.0.1:8080',
//       type: 'POST',
//       data: JSON.stringify(yourURL),
//       contentType: 'application/json',
//       success: function (data) {
//         console.log('SUCCESS: your URL', data);
//       },
//       error: function (data) {
//         console.error('Failed to send url');
//       }
//     });
// };


