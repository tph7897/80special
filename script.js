// 슬라이드 끝부분에서는 슬라이드 이미지가 빈 화면으로 넘어가지 않게 하기
// n개의 슬라이드를 넣어도 별도 수정없이 동작 가능하게 하기
// 다양한 크기의 이미지를 넣어도 별도 수정없이 동작 가능하게 하기
// 하나의 함수로 버튼 두 개를 관리하기
// **정의는 사용보다 위에 있어야 한다**

//html dom 이 다 로드 된 이후에 자바스크립트 실행되도록 하기
document.addEventListener("DOMContentLoaded", () => {
  /* --------------------------- 변수 정의 --------------------------------- */

  const bottom_contents = [
    { image: "./img/1_bottom_card.webp", text: "since 1945…영남일보 80년", url: "https://www.yeongnam.com/80special/history.html" },
    { image: "./img/2_bottom_card.webp", text: "영남일보의 시대 정신", url: "" },
    { image: "./img/3_bottom_card.webp", text: "근·현대사와 함께한 영남일보", url: "" },
    { image: "./img/4_bottom_card.webp", text: "영남일보와 함께한 사람들", url: "" },
    { image: "./img/5_bottom_card.webp", text: "이중섭과 함께한 영남일보", url: "" },
    { image: "./img/6_bottom_card.webp", text: "대구경북 아젠다 선도", url: "" },
    { image: "./img/7_bottom_card.webp", text: "공공저널리즘 다양한 사회공헌", url: "" },
    { image: "./img/8_bottom_card.webp", text: "디지털 시대를 선도하는 신문", url: "" },
    { image: "./img/9_bottom_card.webp", text: "전국서 가장 열독률 높은 신문", url: "" },
    { image: "./img/10_bottom_card.webp", text: "창간 80주년 특집기사", url: "" },
  ];

  const backgrounds = document.querySelectorAll(".top-background");
  const skipButton = document.querySelector("#skip-button");
  const scrollUpButton = document.querySelector("#scroll-up-button");
  const bottom_contents_cards = document.getElementById("bottom_contents_cards");
  /* --------------------------- 함수 정의 --------------------------------- */

  bottom_contents.forEach((content, index) => {
    createContentsCard(content, bottom_contents_cards, index);
  });

  let current = 0;
  setInterval(() => {
    // 현재 활성화된 이미지 비활성화
    backgrounds[current].classList.remove("active");
    // 다음 이미지 활성화
    current = (current + 1) % backgrounds.length;
    backgrounds[current].classList.add("active");
  }, 4000);

  // 하루동안 보지 않기 버튼 클릭
  function hideUntilMidnight() {
    const now = new Date(); // 현재 시간 받아오기
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0); // 익일 자정시간으로 설정

    localStorage.setItem("hideEventPageUntil", midnight.getTime()); // 로컬스토리지에 저장

    window.location.href = "https://www.yeongnam.com/web/"; // 메인 페이지로 이동
  }

  // 스크롤 맨 위로 이동
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 하단 카드
  function createContentsCard(content, cards, index) {
    const imageCardItem = document.createElement("div");
    imageCardItem.classList.add("bottom-card");

    const card_link = document.createElement("a");
    card_link.href = content.url;
    card_link.classList.add("bottom-card-link");
    card_link.style.textDecoration = "none"; // 링크 밑줄 제거 (선택)

    const card_img = document.createElement("img");
    card_img.classList.add("bottom-card-img");
    card_img.src = content.image;
    card_img.alt = content.text.replace(/<br\s*\/?>/gi, "");

    const card_text = document.createElement("span");
    card_text.classList.add("bottom-card-text");
    card_text.innerHTML = content.text;

    const card_button = document.createElement("button");
    card_button.classList.add("bottom-card-button");
    card_button.textContent = "자세히 보기 ";

    const icon_img = document.createElement("img");
    icon_img.src = "./img/view_arrow.png"; // 원하는 이미지 경로
    icon_img.alt = "아이콘"; // 대체 텍스트
    icon_img.style.width = "13px"; // 아이콘 크기
    icon_img.style.marginLeft = "2px"; // 텍스트와 아이콘 사이 간격

    card_button.appendChild(icon_img); // 버튼에 아이콘 추가

    card_link.appendChild(card_img);
    card_link.appendChild(card_text);
    card_link.appendChild(card_button);
    imageCardItem.appendChild(card_link);
    cards.appendChild(imageCardItem);
  }

  /* -------------------------- 이벤트리스너 -------------------------------- */

  scrollUpButton.addEventListener("click", scrollToTop);

  skipButton.addEventListener("click", hideUntilMidnight);
});
