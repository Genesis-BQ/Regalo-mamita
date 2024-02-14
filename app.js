document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');

    playPauseBtn.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    audio.addEventListener('ended', function () {
        // La canción ha terminado, reiniciar la reproducción
        audio.currentTime = 0.01; // Reiniciar el tiempo de reproducción
        audio.play().then(_ => {
            playPauseBtn.textContent = 'Pause';
        }).catch(error => {
            console.log("Error al intentar reproducir la canción:", error);
        });
    });
});


// Código de la carta

const envelope = document.querySelector('.envelope-wrapper');
    envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});

document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPause');

    playPauseBtn.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    audio.addEventListener('ended', function () {
        // La canción ha terminado, reiniciar la reproducción
        audio.currentTime = 0.01; // Reiniciar el tiempo de reproducción
        audio.play().then(_ => {
            playPauseBtn.textContent = 'Pause';
        }).catch(error => {
            console.log("Error al intentar reproducir la canción:", error);
        });
    });

    audio.addEventListener('play', function () {
        // Ocultar el botón cuando el audio está en reproducción
        playPauseBtn.style.display = 'none';
    });

    audio.addEventListener('pause', function () {
        // Mostrar el botón cuando el audio se pausa
        playPauseBtn.style.display = 'inline-block';
    });
});