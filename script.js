console.log("Welcome to SPOTIFY");

// Initialize the variables
let audioElement = new Audio('Music/badass.mp3');
let ctrlIcon = document.getElementById("ctrlIcon");
let myProgress = document.getElementById("myProgress");

let songs = [
    { songName: "Badass - Leo", filePath: "Music/Badass.mp3", id: "1" },
    { songName: "Naa-Ready - Leo", filePath: "Music/Naa-Ready.mp3", id: "2" },
    { songName: "Lokiverse 2.0", filePath: "Music/Lokiverse-2.0.mp3", id: "3" },
    { songName: "Chaleya", filePath: "Music/Chaleya Jawan.mp3", id: "4" },
    { songName: "Hukum", filePath: "Music/Hukum---Thalaivar-Alappara.mp3", id: "5" },
    { songName: "Vikram", filePath: "Music/Vikram-Title-Track.mp3", id: "6" },
    { songName: "Once upon a time", filePath: "Music/Once-Upon-a-Time.mp3", id: "7" },
    { songName: "Wasted", filePath: "Music/Wasted.mp3", id: "8" },
];

// Function to handle song ending
function handleSongEnd() {
    ctrlIcon.classList.remove('fa-pause');
    ctrlIcon.classList.add('fa-play');
    myProgress.value = 0;
    myProgress.style.background = "";
}

audioElement.addEventListener('ended', handleSongEnd);

// Handle play/pause click
ctrlIcon.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
    } else {
        audioElement.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
    }
});

// Listen to events
audioElement.addEventListener('timeupdate', () => {
    // Update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgress.value = progress;
    myProgress.style.background = `linear-gradient(to right, #1ED760 ${progress}%, black ${progress}%)`;
});

myProgress.addEventListener('input', () => {
    audioElement.currentTime = (myProgress.value / 100) * audioElement.duration;
});

Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        let index = parseInt(e.target.id);
        audioElement.src = songs[index].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
    });
});
