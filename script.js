// JavaScript for Interactivity (Search & YouTube Video Loading)

document.addEventListener("DOMContentLoaded", function () {
    // Research Article Search Functionality
    const searchBar = document.getElementById("searchBar");
    const researchList = document.getElementById("researchList");

    const researchData = [
        { title: "Neural Mechanisms of Memory", link: "#" },
        { title: "The Role of Glial Cells in Cognition", link: "#" },
        { title: "Brain-Computer Interfaces: Future Possibilities", link: "#" }
    ];

    function displayResearch() {
        researchList.innerHTML = "";
        researchData.forEach((paper) => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = paper.link;
            link.textContent = paper.title;
            listItem.appendChild(link);
            researchList.appendChild(listItem);
        });
    }

    searchBar.addEventListener("input", function () {
        const searchQuery = searchBar.value.toLowerCase();
        const filteredData = researchData.filter(paper =>
            paper.title.toLowerCase().includes(searchQuery)
        );
        researchList.innerHTML = "";
        filteredData.forEach((paper) => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = paper.link;
            link.textContent = paper.title;
            listItem.appendChild(link);
            researchList.appendChild(listItem);
        });
    });

    displayResearch();

    // YouTube Video Embedding Functionality
    const videoContainer = document.getElementById("videoContainer");
    const youtubeVideos = [
        "https://www.youtube.com/embed/dQw4w9WgXcQ", 
        "https://www.youtube.com/embed/3JZ_D3ELwOQ"
    ];

    function loadVideos() {
        youtubeVideos.forEach(videoUrl => {
            const iframe = document.createElement("iframe");
            iframe.src = videoUrl;
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            videoContainer.appendChild(iframe);
        });
    }

    loadVideos();
});
