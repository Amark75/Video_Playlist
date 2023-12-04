const videoData = [ //JSON Data for the playlist
    {
        title: "Tu Aaj Mainu (YouTube)",
        src: "https://www.youtube.com/embed/kYDojDbOd-k", // YouTube embed link
        image: "https://i.ytimg.com/vi/kYDojDbOd-k/default.jpg", // YouTube video thumbnail
    },
    
    {
        title: "Keejo Kesari Ke Laal (YouTube)",
        src: "https://www.youtube.com/embed/-YRl9zZJP1w", 
        image: "https://i.ytimg.com/vi/-YRl9zZJP1w/default.jpg", 
    },

    {
        title: "Janiye (YouTube)",
        src: "https://www.youtube.com/embed/H1YR5rsScC8", 
        image: "https://i.ytimg.com/vi/H1YR5rsScC8/default.jpg", 
    },
    {
        title: "Bam Bam (YouTube)",
        src: "https://www.youtube.com/embed/9KCtZ9r4OAw", 
        image: "https://i.ytimg.com/vi/9KCtZ9r4OAw/default.jpg",  
    },

   
    {
        title: "Paisa Hai Tou (YouTube)",
        src: "https://www.youtube.com/embed/QqiQ49dbMo0", 
        image: "https://i.ytimg.com/vi/QqiQ49dbMo0/default.jpg", 
    },
];

const playlist = document.getElementById("playlist-items");
const videoPlayer = document.getElementById("player");

// Populate the playlist with video items
videoData.forEach((video, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <img src="${video.image}" class="video-thumbnail">
        ${video.title}
    `;

    // Add a click event to change the video source
    listItem.addEventListener("click", () => {
        const iframeSrc = video.src; // Use the provided YouTube embed link
        videoPlayer.innerHTML = `<iframe src="${iframeSrc}" frameborder="0" allowfullscreen></iframe>`;
    });

    const playPauseButton = document.getElementById("play-pause-button");

    playPauseButton.addEventListener("click", () => {
        const video = videoPlayer.querySelector("iframe");
        const player = document.querySelector('video');
        if (video) {
            video.contentWindow.postMessage('{"event":"command","func":"' + 'togglePlayVideo' + '","args":""}', '*');
        } else if (player) {
            if (player.paused) {
                player.play();
            } else {
                player.pause();
            }
        }
    });

    const fullscreenButton = document.getElementById("fullscreen-button");

    fullscreenButton.addEventListener("click", () => {
        const videoPlayer = document.getElementById("player");
        const player = document.querySelector('video');
        if (player) {
            if (player.requestFullscreen) {
                player.requestFullscreen();
            } else if (player.mozRequestFullScreen) {
                player.mozRequestFullScreen();
            } else if (player.webkitRequestFullscreen) {
                player.webkitRequestFullscreen();
            }
        } else if (videoPlayer) {
            if (videoPlayer.requestFullscreen) {
                videoPlayer.requestFullscreen();
            } else if (videoPlayer.mozRequestFullScreen) {
                videoPlayer.mozRequestFullScreen();
            } else if (videoPlayer.webkitRequestFullscreen) {
                videoPlayer.webkitRequestFullscreen();
            }
        }
    });

    playlist.appendChild(listItem);
});