function toggleUploadPanel() {
  var panel = document.getElementById('music-upload-panel');
  panel.style.display = (panel.style.display === 'none' || panel.style.display === '') ? 'block' : 'none';
}

function handleAudioUpload(event) {
  var file = event.target.files[0];
  if (file) {
    var audioPlayer = document.getElementById('bg-music');
    var objectUrl = URL.createObjectURL(file);
    
    // Ganti sumber audio secara langsung
    audioPlayer.src = objectUrl;
    audioPlayer.play().then(function() {
      isPlaying = true;
      document.getElementById('music-btn').innerHTML = '<i class="fas fa-music"></i>';
    });

    document.getElementById('audio-filename').innerText = "Aktif: " + file.name;
    alert("Musik latar berhasil diganti dengan: " + file.name);
  }
}