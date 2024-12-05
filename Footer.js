class MyFooter extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM을 생성하여 독립적인 영역을 만듦
    const shadow = this.attachShadow({ mode: "open" });

    // Footer 템플릿 정의
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }

        body {
        line-height: 1.6; /* 텍스트 가독성을 위해 줄 간격 설정 */
        background-color: #28272d;
        }

        a {
        color: #007bff; /* 링크 기본 색상 */
        text-decoration: none;
        }

        a:hover {
        color: #0056b3; /* 호버 시 색상 */
        text-decoration: underline;
        }

        button {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer; /* 버튼 위에 커서를 올리면 손 모양으로 변경 */
        outline: none; /* 포커스 시 외곽선 제거 */
        }

/* --------------------------------------------------------- 👇🏻 폰트 css */

        /* Light - SCDream3 */
        @font-face {
        font-family: "SCDream";
        src: url("fonts/SCDream_KR/SCDream3.otf") format("opentype");
        font-weight: 300; /* Light */
        font-style: normal;
        }


        .all-logo {
        /* background: url(/img/footer_logo.png) no-repeat; */
        z-index: 999;
        }
        footer {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        background: black;
        }
        .ft-wrap {
        
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        width: 100%;
        max-width: 1200px;
        height: auto;
        padding: 30px 0 30px 185px;
        font-size: 13px;
        font-family: "SCDream";
        font-weight: 300;
        }
        .ft-wrap address {
        font-style: normal;
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        }
        .ft-wrap address span {
        position: relative;
        color: #b1b1b1;
        padding-left: 10px;
        }
        .ft-wrap address span strong {
        color: #e2e2e2;
        }
        .ft-wrap address span:first-child {
        padding-left: 0;
        margin-left: 0;
        }
        .ft-logo {
        position: absolute;
        top: 26px;
        left: 0;
        }
        .ft-logo .ft-lg {
        display: block;
        width: 140px;
        height: 52px;
        background-position: -18px -96px;
        }
        .ft-address address div {
        margin-left: 10px;
        }
        .ft-cp {
        position: relative;
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid #b1b1b1;
        }
        .ft-cp ul li {
        float: left;
        position: relative;
        color: #b1b1b1;
        padding-left: 10px;
        margin-left: 10px;
        letter-spacing: -0.5px;
        list-style: none;
        }
        .ft-cp ul li:first-child {
        padding-left: 0;
        margin-left: 0;
        }
        .ft-cp ul li a {
        color: #b1b1b1;
        }

        @media (max-width: 1024px) {
        .ft-wrap {
            width: 100%;
            padding: 0 0 20px 0;
            font-size: 11px;
        }
        .ft-logo {
            position: static;
            width: 140px;
            margin: 20px auto;
        }
        .ft-address {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .ft-address address {
            justify-content: center;
        }
        .ft-cp {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        }

      </style>
<footer>
      <div class="ft-wrap">
        <div class="ft-logo">
          <a href="https://www.yeongnam.com/web/">
            <img class="ft-lg all-logo" alt="로고" src="./img/footer_logo.png" />
          </a>
        </div>
        <div class="ft-address">
          <address>
            <div><span><strong>대구본사</strong>: 대구광역시 동구 동대구로 441(신천동 111번지)</span></div>
            <div><span>Tel. 053-756-8001</span><span>Fax. 053-756-9011</span></div>
          </address>
          <address>
            <div><span><strong>경북본사</strong>: 경상북도 안동시 풍천면 수호로 59 우대빌딩 4층​</span></div>
            <div><span>Tel. 054-857-9393</span><span>Fax. 054-857-8602</span></div>
          </address>
          <address>
            <div><span><strong>서울지사</strong>: 서울특별시 중구 세종대로 124 프레스센터 11층</span></div>
            <div><span>Tel. 02-738-9815</span><span>Fax. 02-738-8005</span></div>
          </address>
          <address>
            <div><span>인터넷신문등록 : 대구 아00221</span><span>등록일자 : 2017.05.23</span></div>
            <div><span>발행인 · 평진인 : 이승익</span><span>사업자등록번호 : 502-81-25414</span></div>
            <div><span>법인명 : (주)영남일보</span><span>대표자 : 이승익</span></div>
          </address>
        </div>
        <div class="ft-cp">
          <ul class="ft-cp-ul">
            <li><a href="company.php?comp_mode=idx">회사소개</a></li>
            <li><a href="member.php?mode=personalinfo">개인정보처리방침</a></li>
            <li><a href="company.php?comp_mode=extraPrint">외간인사</a></li>
            <li><a href="board/reader.php?bid=reader">구독신청</a></li>
          </ul>
          <ul class="ft-cp-ul">
            <li><a href="company.php?comp_mode=newspaperAd">광고안내</a></li>
            <li><a href="mediaethics.php">언론 윤리 강령</a></li>
            <li><a href="grievance.php">고충처리인</a></li>
            <li><a href="images/file/editorial_rules.pdf" target="_blank">공정언론 평진규장</a></li>
          </ul>
          <ul class="ft-cp-ul">
            <li><a href="images/file/newspaper_ethics.pdf" target="_blank">신문윤리위 서약서</a></li>
            <li><a href="member.php?mode=teenager">청소년 보호정책(책임자 : 김기오, 박준상)</a></li>
          </ul>
        </div>
      </div>
      </footer>
    `;

    // 템플릿을 Shadow DOM에 추가
    shadow.appendChild(template.content.cloneNode(true));
  }
}

// 'my-footer'라는 커스텀 HTML 태그를 정의
customElements.define("my-footer", MyFooter);
