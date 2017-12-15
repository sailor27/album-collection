// back-end logic
function Album (album, artist, art) {
  this.album = album;
  this.artist = artist;
  this.art = art;
};


// front-end logic

$('document').ready(function(){
  $('#form').submit(function(event){
    var art = $('#art').val();
    var album = $('#album').val();
    var artist = $('#art').val();
    var newAlbum = new Album(album, artist, art);
// testing area
    console.log(newAlbum);
    console.log("hello");
    event.preventDefault();
// create divs with background image set to inputted URL
    $('.gallery').append("<div class='card'></div>");

  });
});
