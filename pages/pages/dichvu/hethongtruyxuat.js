document.addEventListener("DOMContentLoaded", function () {
    fetch("../../img/dichvu/he thong truy xuat group.svg")
        .then(response => response.text())
        .then(data => {
            document.getElementById("svg-container").innerHTML = data;

            // Nhóm 1: Các phần "Quản lý"
            const group1 = [

                "quan_ly_kho",
                "quan_ly_he_thong_dai_ly",
                "quan_ly_dich_vu_khach_hang",
                "quan_ly_ma_vach_qr_code",
                "quan_ly_nhan_su",
                "quan_ly_tai_san",
                "erp_giua",
            ];

            // Nhóm 2: Các phần còn lại
            const group2 = [
                "qr_code_giua",
                "trai_nghiem_khach_hang",
                "block_chain",
                "erp",
                "truy_xuat",
                "dinh_danh_khach_hang"
            ];

            function addHoverEffect(group, color, direction) {
                group.forEach(id => {
                    let element = document.getElementById(id);
                    if (element) {
                        element.style.transition = "transform 0.3s ease, filter 0.3s ease";
                    }
                });

                group.forEach(id => {
                    let element = document.getElementById(id);
                    if (element) {
                        element.addEventListener("mouseenter", () => {
                            group.forEach(otherId => {
                                let otherElement = document.getElementById(otherId);
                                if (otherElement) {
                                    otherElement.style.transform = direction === "left" ? "translateX(-10px)" : "translateX(10px)";
                                    otherElement.style.filter = `drop-shadow(0 0 10px ${color})`;
                                }
                            });
                        });

                        element.addEventListener("mouseleave", () => {
                            group.forEach(otherId => {
                                let otherElement = document.getElementById(otherId);
                                if (otherElement) {
                                    otherElement.style.transform = "translateX(0)";
                                    otherElement.style.filter = "none";
                                }
                            });
                        });
                    }
                });
            }

            // Thêm hiệu ứng hover
            addHoverEffect(group1, "blue", "right");   // Nhóm 1 hover sang phải
            addHoverEffect(group2, "orange", "left"); // Nhóm 2 hover sang trái

            // Thêm sự kiện click cho cả nhóm
            group1.forEach(id => {
                document.getElementById(id)?.addEventListener("click", () => {
                    window.location.href = "erp.html";
                });
            });

            group2.forEach(id => {
                document.getElementById(id)?.addEventListener("click", () => {
                    window.location.href = "matruyxuat.html";
                });
            });
        });
});
