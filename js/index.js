$(document).ready(function () {

    document.getElementById("svgObject").addEventListener("load", function () {
        let svgDoc = this.contentDocument; // Lấy tài liệu bên trong SVG
        let ids = ["matruyxuat", "hethongtruyxuat", "dichvuvanhanh", "chungchichungthuc", "tuvangiaiphap", "dichvukhac"];
        let tabs = document.querySelectorAll(".tab1, .tab2, .tab3, .tab4, .tab5, .tab6");
        let activeElement = null; // Lưu phần tử SVG đang được chọn

        ids.forEach((id, index) => {
            let element = svgDoc.getElementById(id);
            if (element) {
                element.style.transition = "0.5s";
                element.style.cursor = "pointer";

                element.addEventListener("mouseover", function () {
                    if (activeElement !== element) {
                        element.style.transform = "scale(1.1)";
                        element.style.fill = "red";
                    }
                });

                element.addEventListener("mouseout", function () {
                    if (activeElement !== element) {
                        element.style.transform = "scale(1)";
                        element.style.fill = "";
                    }
                });

                element.addEventListener("click", function () {
                    // Reset trạng thái của phần tử đang chọn trước đó
                    if (activeElement && activeElement !== element) {
                        activeElement.style.transform = "scale(1)";
                        activeElement.style.fill = "";
                    }

                    // Cập nhật phần tử đang chọn
                    activeElement = element;
                    activeElement.style.transform = "scale(0.9)";
                    activeElement.style.fill = "blue"; // Đổi màu khi được chọn

                    // Ẩn tất cả các tab trước khi hiển thị tab được chọn
                    tabs.forEach(tab => tab.style.display = "none");
                    tabs[index].style.display = "block"; // Hiển thị tab tương ứng
                });
            }
        });

        // 🔹 Chọn mặc định thẻ "matruyxuat" khi trang tải xong
        let defaultIndex = 0; // Vị trí của "matruyxuat" trong danh sách
        let defaultElement = svgDoc.getElementById(ids[defaultIndex]);

        if (defaultElement) {
            activeElement = defaultElement; // Cập nhật activeElement
            activeElement.style.transform = "scale(1.1)";
            activeElement.style.fill = "blue"; // Giữ màu khi được chọn
            tabs.forEach(tab => tab.style.display = "none");
            tabs[defaultIndex].style.display = "block"; // Hiển thị tab đầu tiên
        }
    });
});