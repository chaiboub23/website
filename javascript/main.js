const hideCitations = () => {
    let citations = document.getElementById("hidden-citations");
    let scroll = document.getElementById("bottom");
    if (citations.hasAttribute("hidden") || citations.style.display === "none") {
        citations.removeAttribute("hidden");
        citations.style.display = "block";
        scroll.scrollIntoView();
    }
    else if (!citations.hasAttribute("hidden")) {
        citations.style.display = "none";
    }
}
