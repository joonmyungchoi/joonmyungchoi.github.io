// BibTeX 펼침 토글과 모바일 네비게이션 토글을 담당하는 스크립트

// 각 논문의 Bib 버튼 클릭 시 해당 BibTeX 블록을 펼치고 접는다.
document.querySelectorAll(".bib-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const bibtex = btn.closest(".pub-links").nextElementSibling;
    if (bibtex && bibtex.classList.contains("bibtex")) {
      bibtex.classList.toggle("hidden");
    }
  });
});

// 모바일에서 햄버거 버튼으로 네비게이션 메뉴를 펼치고 접는다.
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}
