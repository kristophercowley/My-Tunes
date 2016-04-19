//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList){
  for(var i = 0; i < songList.length; i++){
    var currentSong = songList[i];
  document.getElementById('song-list').innerHTML +=
  '<li class="list-group-item">' + 
  '<h2>' + currentSong.artist + '</h2>' + 
  '<img src="' + currentSong.albumArt + '">' + 
  '<h3>Song: ' + currentSong.title + '</h3>' +
  '<h3>Album: ' + currentSong.collection + '</h3>' +
  // '<h3>Player here: '+ currentSong.preview + '</h3>' +
  '<h3>Price: ' + currentSong.price + '</h3>' + 
  '</li>'
  }
  // for(var j = 0; j < 10; j++){
  //     document.getElementById('song-list').innerText = j

  // }
  console.log(songList);
  
}