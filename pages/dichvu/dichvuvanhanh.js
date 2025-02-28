document.addEventListener("DOMContentLoaded", function () {
    const hoverModal = document.getElementById("hoverModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");
    const parts = document.querySelectorAll(".part-1, .part-3");

    parts.forEach((part) => {
        part.addEventListener("mouseenter", function (event) {
            const title = this.getAttribute("data-title");
            const content = this.getAttribute("data-content");
            modalTitle.innerText = title;
            modalContent.innerText = content;
            hoverModal.style.display = "block";

            // Định vị modal theo chuột
            document.addEventListener("mousemove", moveModal);
        });

        part.addEventListener("mouseleave", function () {
            hoverModal.style.display = "none";
            document.removeEventListener("mousemove", moveModal);
        });

        part.addEventListener("click", function () {
            const url = this.getAttribute("data-url");
            if (url) {
                window.location.href = url;
            }
        });
    });

    function moveModal(event) {
        hoverModal.style.left = event.pageX + 15 + "px";
        hoverModal.style.top = event.pageY + 15 + "px";
    }

    
    
});
