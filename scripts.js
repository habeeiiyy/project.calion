// Wait for the page to load
window.addEventListener("load", () => {
  // Optional minimum wait time (in ms)
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 2000); // 2 seconds delay
});
