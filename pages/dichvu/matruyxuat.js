document.addEventListener("DOMContentLoaded", function () {
    fetch("../../img/dichvu/Thong_tin_ma_QR.svg")
        .then(response => response.text())
        .then(svgData => {
            const container = document.getElementById("svg-container");
            container.innerHTML = svgData;
            const svg = container.querySelector("svg");
            if (svg) {
                svg.style.width = "100%";
                svg.style.height = "100%";
                svg.style.transform = "scale(0.8)";
                svg.style.transformOrigin = "center";
            }
            addHoverEffect();
        })
        .catch(error => console.error("Lỗi tải SVG:", error));

    function addHoverEffect() {
        const descriptions = {
            "thong_tin_truy_xuat_nguon_goc": `Tên sản phẩm, hàng hóa
                Mã truy xuất nguồn gốc sản phẩm, hàng hóa
                Thương hiệu, nhãn hiệu, mã ký hiệu, số seri sản phẩm
                Thời hạn sử dụng của sản phẩm - hàng hóa
                Các tiêu chuẩn quốc gia, quy chuẩn kỹ thuật quốc gia, tiêu chuẩn quốc tế`,
            "thong_tin_nha_cung_cap": `Tên đơn vị sản xuất, kinh doanh
                Địa chỉ đơn vị sản xuất, kinh doanh
                Các công đoạn trong sản xuất, kinh doanh
                Thời gian sản xuất, kinh doanh`,
            "thong_tin_chung_chi_media": `Giấy đăng ký kinh doanh
                Giấy chứng nhận ISO
                Giấy an toàn vệ sinh thực phẩm
                Hình ảnh sản phẩm, hàng hóa
                Hình ảnh - video nhà sản xuất`,
            "thong_tin_phan_phoi": `Địa điểm - tên nhà phân phối
                Lộ trình sản phẩm, hàng hóa`,
            "thong_tin_khach_hang": `Định danh khách hàng
                Check-in chụp hình cùng sản phẩm - tham gia các chương trình ưu đãi của đại lý - nhà sản xuất
                Tra cứu tất cả thông tin về hàng hóa - sản phẩm
                Tương tác trực tiếp với đại lý - nhà sản xuất`,
            "thong_tin_tuong_tac": `Tương tác quản lý hệ thống nhà phân phối
                Tương tác chăm sóc khách hàng
                Quảng bá thúc đẩy doanh số
                Quản lý thông tin khách hàng`
        };
        
        // Tạo phần tử hiển thị mô tả
        const tooltip = document.createElement("div");
        tooltip.id = "svg-tooltip";
        tooltip.style.position = "absolute";
        tooltip.style.padding = "8px 12px";
        tooltip.style.background = "rgba(0, 0, 0, 0.8)";
        tooltip.style.color = "#fff";
        tooltip.style.fontSize = "14px";
        tooltip.style.borderRadius = "5px";
        tooltip.style.pointerEvents = "none";
        tooltip.style.display = "none";
        tooltip.style.zIndex = "1000";
        document.body.appendChild(tooltip);

        Object.keys(descriptions).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.transition = "transform 0.3s ease, filter 0.3s ease";
                
                element.addEventListener("mouseenter", (event) => {
                    element.style.transform = "scale(1.1)";
                    element.style.filter = "brightness(1.2)";
                    tooltip.innerText = descriptions[id];
                    tooltip.style.display = "block";
                    tooltip.style.left = event.pageX + 10 + "px";
                    tooltip.style.top = event.pageY + 10 + "px";
                });

                element.addEventListener("mousemove", (event) => {
                    tooltip.style.left = event.pageX + 10 + "px";
                    tooltip.style.top = event.pageY + 10 + "px";
                });

                element.addEventListener("mouseleave", () => {
                    element.style.transform = "scale(1)";
                    element.style.filter = "brightness(1)";
                    tooltip.style.display = "none";
                });
            }
        });
    }
});
