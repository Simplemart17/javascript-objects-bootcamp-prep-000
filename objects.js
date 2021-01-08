const playlist = {
  simi: 'ire ayo',
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  
  return playlist;
}

function removeFromPlayList(playlist, artistName) {
  delete playlist[artistName];
  
  return playlist;
}