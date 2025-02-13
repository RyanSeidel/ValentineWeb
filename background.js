document.addEventListener('DOMContentLoaded', function() {
  function updateVideoSource() {
    const video = document.getElementById('bgVideo');
    if (!video) {
      console.error("Video element not found!");
      return;
    }
    const source = video.querySelector('source');
    if (!source) {
      console.error("Source element not found!");
      return;
    }
    if (window.innerWidth < 500) {
      source.src = 'mobile.mp4'; // Make sure this path is correct
      console.log("Using mobile video");
    } else {
      source.src = 'valentinebackground.mp4'; // And this one too
      console.log("Using desktop video");
    }
    video.load();
  }
  
  // Run on load
  updateVideoSource();
  
  // Update on window resize
  window.addEventListener('resize', updateVideoSource);
});
