$(function(){
  var topOfOthDiv = $(".hideshare").offset().top;
  $(window).scroll(function() {
      if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
          $(".share").hide(); //reached the desired point -- show div
      }
      else{
        $(".share").show();
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const postsPerPage = 3; // Số bài viết mỗi trang
    let currentPage = 1;

    const posts = document.querySelectorAll(".post-item");
    const totalPages = Math.ceil(posts.length / postsPerPage);

    function showPage(page) {
        posts.forEach((post, index) => {
            if (index >= (page - 1) * postsPerPage && index < page * postsPerPage) {
                post.style.display = "block"; // Hiển thị bài viết
            } else {
                post.style.display = "none"; // Ẩn bài viết
            }
        });

        document.getElementById("pageNumber").textContent = page;
        document.getElementById("prevPage").disabled = page === 1;
        document.getElementById("nextPage").disabled = page === totalPages;
    }

    document.getElementById("prevPage").addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    document.getElementById("nextPage").addEventListener("click", function () {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    showPage(currentPage);
});
fetch('../') // URL trang HTML khác
    .then(response => response.text())
    .then(html => {
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, 'text/html'); // Chuyển đổi HTML thành tài liệu DOM
        let divElement = doc.querySelector('div'); // Lấy thẻ div đầu tiên (có thể thay bằng class hoặc id cụ thể)
        console.log(divElement.id); // In ra ID của thẻ div
    })
    .catch(error => console.error('Lỗi:', error));


