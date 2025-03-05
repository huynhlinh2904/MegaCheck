// Search find Title of Doanh nghiep
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector("#searchInput");
    const searchButton = document.querySelector("#searchButton");
    const cards = document.querySelectorAll(".card");

    function filterCards() {
        const query = searchInput.value.trim().toLowerCase();

        cards.forEach(card => {
            const titleElement = card.querySelector(".card-title");
            if (titleElement) {
                const title = titleElement.textContent.trim().toLowerCase();
                if (title.includes(query)) {
                    card.parentElement.style.display = "block"; // Hiển thị nếu khớp
                } else {
                    card.parentElement.style.display = "none"; // Ẩn nếu không khớp
                }
            }
        });
    }

    // Lọc khi nhập vào ô tìm kiếm
    searchInput.addEventListener("input", filterCards);

    // Lọc khi nhấn nút tìm kiếm
    searchButton.addEventListener("click", filterCards);
});