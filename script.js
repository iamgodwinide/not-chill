document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const enterButton = document.querySelector('.enter-button');
    const desktopVideo = document.getElementById('desktopVideo');
    const mobileVideo = document.getElementById('mobileVideo');

    // Function to play the appropriate video based on screen width
    const playAppropriateVideo = () => {
        if (window.innerWidth >= 768) {
            desktopVideo.play();
            mobileVideo.pause();
        } else {
            mobileVideo.play();
            desktopVideo.pause();
        }
    };

    // Handle enter button click
    enterButton.addEventListener('click', () => {
        overlay.classList.add('fade-out');
        playAppropriateVideo();
    });

    // Handle window resize to switch videos
    window.addEventListener('resize', playAppropriateVideo);
});
