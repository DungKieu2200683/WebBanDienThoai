// Hàm tải và chèn header & footer
document.addEventListener("DOMContentLoaded", () => {
  includeHTML("header-include", "components/header.html");
  includeHTML("footer-include", "components/footer.html");
});

function includeHTML(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
    document.getElementById(id).innerHTML = data;
  })
  .catch(err => console.error("Lỗi khi tải " + file, err));
}
