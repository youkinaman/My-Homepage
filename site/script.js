const bookingUrl =
  "https://www.airbnb.jp/rooms/1376670888016159485?check_in=2026-06-26&check_out=2026-06-28&photo_id=2332524821&source_impression_id=p3_1779180334_P3j97izze5oZvz-U&previous_page_section_name=1000";

const translations = {
  ja: {
    brand: "Private Stay",
    navStay: "滞在",
    navFeatures: "魅力",
    navAccess: "予約",
    navFaq: "FAQ",
    badge: "Airbnbで予約できます",
    score: "次の旅に選びたい、落ち着いたプライベートステイ",
    eyebrow: "PRIVATE VACATION STAY",
    heroTitle: "旅の時間を、もっと心地よく。",
    heroText:
      "明るい空間、落ち着いたインテリア、滞在しやすい設備。観光にも、家族旅行にも、ゆっくり過ごす週末にも選びたくなる一棟です。",
    bookNow: "Airbnbで予約する",
    seePhotos: "写真を見る",
    fact1Label: "おすすめ",
    fact1: "カップル・家族・友人",
    fact2Label: "雰囲気",
    fact2: "静か・清潔・リラックス",
    fact3Label: "予約",
    fact3: "Airbnbで確認",
    introEyebrow: "WHY STAY HERE",
    introTitle: "到着した瞬間から、くつろげる滞在へ。",
    introText:
      "旅先でも自分の部屋のように過ごせる、やさしい雰囲気のステイ。朝はゆっくり支度して、昼は街を楽しみ、夜は落ち着いた空間でリセットできます。",
    featuresEyebrow: "HIGHLIGHTS",
    featuresTitle: "予約前に知りたい魅力",
    feature1Title: "写真で伝わる心地よさ",
    feature1Text:
      "明るく清潔感のある空間で、短期滞在でも長めの休暇でも過ごしやすい雰囲気です。",
    feature2Title: "旅の予定を組みやすい",
    feature2Text:
      "Airbnb上で空室確認、料金確認、予約まで進められるので、旅行計画がスムーズです。",
    feature3Title: "多言語で案内",
    feature3Text:
      "日本語、英語、韓国語、中国語で概要を確認でき、海外ゲストにも伝わりやすいページです。",
    galleryEyebrow: "ATMOSPHERE",
    galleryTitle: "滞在を想像できる空間",
    accessEyebrow: "BOOKING",
    accessTitle: "予約はAirbnbで安全に。",
    accessText:
      "空室状況、料金、ハウスルール、キャンセル条件、最新の写真はAirbnbページで確認できます。気になる日程がある場合は、早めの確認がおすすめです。",
    accessLink: "予約ページを開く",
    faqEyebrow: "FAQ",
    faqTitle: "よくある確認ポイント",
    faq1Q: "料金や空室はどこで確認できますか？",
    faq1A: "Airbnbの予約ページで、日付を選ぶと最新の料金と空室状況を確認できます。",
    faq2Q: "写真をもっと見られますか？",
    faq2A: "写真ツアーへのリンクから、Airbnb上の最新写真を確認できます。",
    faq3Q: "問い合わせはどこからできますか？",
    faq3A: "予約前の質問はAirbnbページからホストへ送るのが安心です。",
    footerBook: "Airbnbで予約する",
  },
  en: {
    brand: "Private Stay",
    navStay: "Stay",
    navFeatures: "Highlights",
    navAccess: "Booking",
    navFaq: "FAQ",
    badge: "Available to book on Airbnb",
    score: "A calm private stay for your next trip",
    eyebrow: "PRIVATE VACATION STAY",
    heroTitle: "Make your travel days feel effortless.",
    heroText:
      "A bright space, calm interiors, and practical comforts for an easy stay. A welcoming choice for sightseeing, family trips, and slow weekends.",
    bookNow: "Book on Airbnb",
    seePhotos: "View photos",
    fact1Label: "Best for",
    fact1: "Couples, families, friends",
    fact2Label: "Mood",
    fact2: "Quiet, clean, relaxing",
    fact3Label: "Book",
    fact3: "Check on Airbnb",
    introEyebrow: "WHY STAY HERE",
    introTitle: "Feel settled from the moment you arrive.",
    introText:
      "A gentle, comfortable stay that feels easy even away from home. Start the morning slowly, enjoy the city by day, and reset in a calm room at night.",
    featuresEyebrow: "HIGHLIGHTS",
    featuresTitle: "What guests want to know before booking",
    feature1Title: "Comfort you can picture",
    feature1Text:
      "A bright, clean atmosphere designed to work well for both short stays and longer holidays.",
    feature2Title: "Easy trip planning",
    feature2Text:
      "Check availability, pricing, and booking details directly on Airbnb for a smooth planning flow.",
    feature3Title: "Guidance in five languages",
    feature3Text:
      "Japanese, English, Korean, Simplified Chinese, and Traditional Chinese make the stay easier to understand.",
    galleryEyebrow: "ATMOSPHERE",
    galleryTitle: "A space guests can imagine staying in",
    accessEyebrow: "BOOKING",
    accessTitle: "Reserve safely through Airbnb.",
    accessText:
      "Availability, pricing, house rules, cancellation terms, and the latest photos are available on Airbnb. If your dates are fixed, early checking is recommended.",
    accessLink: "Open booking page",
    faqEyebrow: "FAQ",
    faqTitle: "Common questions before booking",
    faq1Q: "Where can I check price and availability?",
    faq1A: "Choose your dates on the Airbnb listing to see the latest price and availability.",
    faq2Q: "Can I see more photos?",
    faq2A: "Use the photo-tour link to view the latest Airbnb photos.",
    faq3Q: "Where should I ask questions?",
    faq3A: "For pre-booking questions, contacting the host through Airbnb is the safest path.",
    footerBook: "Book on Airbnb",
  },
  ko: {
    brand: "Private Stay",
    navStay: "숙소",
    navFeatures: "매력",
    navAccess: "예약",
    navFaq: "FAQ",
    badge: "Airbnb에서 예약 가능",
    score: "다음 여행에 어울리는 차분한 프라이빗 스테이",
    eyebrow: "PRIVATE VACATION STAY",
    heroTitle: "여행의 시간을 더 편안하게.",
    heroText:
      "밝은 공간, 차분한 인테리어, 머물기 좋은 편의 요소. 관광, 가족 여행, 여유로운 주말에 잘 어울리는 숙소입니다.",
    bookNow: "Airbnb에서 예약",
    seePhotos: "사진 보기",
    fact1Label: "추천",
    fact1: "커플・가족・친구",
    fact2Label: "분위기",
    fact2: "조용함・깨끗함・휴식",
    fact3Label: "예약",
    fact3: "Airbnb에서 확인",
    introEyebrow: "WHY STAY HERE",
    introTitle: "도착하는 순간부터 편안한 머무름.",
    introText:
      "여행지에서도 내 방처럼 쉬기 좋은 따뜻한 분위기의 숙소입니다. 아침에는 천천히 준비하고, 낮에는 도시를 즐기고, 밤에는 조용히 재충전하세요.",
    featuresEyebrow: "HIGHLIGHTS",
    featuresTitle: "예약 전에 알고 싶은 포인트",
    feature1Title: "사진으로 느껴지는 편안함",
    feature1Text: "밝고 깨끗한 공간으로 짧은 일정과 긴 휴가 모두에 잘 어울립니다.",
    feature2Title: "여행 계획이 쉬워집니다",
    feature2Text: "Airbnb에서 예약 가능 여부, 요금, 예약 정보를 바로 확인할 수 있습니다.",
    feature3Title: "다국어 안내",
    feature3Text: "일본어, 영어, 한국어, 중국어로 내용을 확인할 수 있어 해외 게스트도 이해하기 쉽습니다.",
    galleryEyebrow: "ATMOSPHERE",
    galleryTitle: "머무는 모습을 상상할 수 있는 공간",
    accessEyebrow: "BOOKING",
    accessTitle: "Airbnb에서 안전하게 예약하세요.",
    accessText:
      "예약 가능 여부, 요금, 숙소 규칙, 취소 조건, 최신 사진은 Airbnb 페이지에서 확인할 수 있습니다. 일정이 정해졌다면 빠르게 확인하는 것을 추천합니다.",
    accessLink: "예약 페이지 열기",
    faqEyebrow: "FAQ",
    faqTitle: "자주 확인하는 내용",
    faq1Q: "요금과 예약 가능 여부는 어디서 확인하나요?",
    faq1A: "Airbnb 예약 페이지에서 날짜를 선택하면 최신 요금과 가능 여부를 확인할 수 있습니다.",
    faq2Q: "사진을 더 볼 수 있나요?",
    faq2A: "사진 투어 링크에서 Airbnb의 최신 사진을 확인할 수 있습니다.",
    faq3Q: "문의는 어디로 하나요?",
    faq3A: "예약 전 질문은 Airbnb 페이지에서 호스트에게 보내는 것이 가장 안전합니다.",
    footerBook: "Airbnb에서 예약",
  },
  zhHans: {
    brand: "Private Stay",
    navStay: "住宿",
    navFeatures: "亮点",
    navAccess: "预订",
    navFaq: "FAQ",
    badge: "可在 Airbnb 预订",
    score: "适合下一次旅行的安静私人住宿",
    eyebrow: "PRIVATE VACATION STAY",
    heroTitle: "让旅途住得更舒服。",
    heroText:
      "明亮的空间、舒适的室内氛围与实用设施。适合观光、家庭旅行，也适合想慢慢放松的周末。",
    bookNow: "在 Airbnb 预订",
    seePhotos: "查看照片",
    fact1Label: "适合",
    fact1: "情侣・家庭・朋友",
    fact2Label: "氛围",
    fact2: "安静・整洁・放松",
    fact3Label: "预订",
    fact3: "在 Airbnb 查看",
    introEyebrow: "WHY STAY HERE",
    introTitle: "从抵达那一刻起，就能安心放松。",
    introText:
      "即使在旅途中，也像回到自己的房间一样自在。早晨慢慢准备，白天探索城市，夜晚回到安静空间休息。",
    featuresEyebrow: "HIGHLIGHTS",
    featuresTitle: "预订前想了解的亮点",
    feature1Title: "照片中也能感受到舒适",
    feature1Text: "明亮整洁的空间，无论短住还是较长假期都很合适。",
    feature2Title: "行程规划更顺畅",
    feature2Text: "可在 Airbnb 上确认空房、价格与预订信息，安排旅程更轻松。",
    feature3Title: "多语言介绍",
    feature3Text: "支持日语、英语、韩语、简体中文与繁体中文，海外客人也容易理解。",
    galleryEyebrow: "ATMOSPHERE",
    galleryTitle: "能想象入住体验的空间",
    accessEyebrow: "BOOKING",
    accessTitle: "通过 Airbnb 安全预订。",
    accessText:
      "空房情况、价格、房屋守则、取消政策和最新照片都可在 Airbnb 页面确认。如果日期已确定，建议尽早查看。",
    accessLink: "打开预订页面",
    faqEyebrow: "FAQ",
    faqTitle: "常见确认事项",
    faq1Q: "在哪里查看价格和空房？",
    faq1A: "在 Airbnb 预订页面选择日期，即可查看最新价格和空房情况。",
    faq2Q: "可以查看更多照片吗？",
    faq2A: "可通过照片导览链接查看 Airbnb 上的最新照片。",
    faq3Q: "在哪里咨询问题？",
    faq3A: "预订前的问题建议通过 Airbnb 页面联系房东，更加安心。",
    footerBook: "在 Airbnb 预订",
  },
  zhHant: {
    brand: "Private Stay",
    navStay: "住宿",
    navFeatures: "亮點",
    navAccess: "預訂",
    navFaq: "FAQ",
    badge: "可在 Airbnb 預訂",
    score: "適合下一趟旅程的安靜私人住宿",
    eyebrow: "PRIVATE VACATION STAY",
    heroTitle: "讓旅途住得更舒服。",
    heroText:
      "明亮的空間、舒適的室內氛圍與實用設備。適合觀光、家庭旅行，也適合想慢慢放鬆的週末。",
    bookNow: "在 Airbnb 預訂",
    seePhotos: "查看照片",
    fact1Label: "適合",
    fact1: "情侶・家庭・朋友",
    fact2Label: "氛圍",
    fact2: "安靜・整潔・放鬆",
    fact3Label: "預訂",
    fact3: "在 Airbnb 查看",
    introEyebrow: "WHY STAY HERE",
    introTitle: "從抵達那一刻起，就能安心放鬆。",
    introText:
      "即使在旅途中，也像回到自己的房間一樣自在。早晨慢慢準備，白天探索城市，夜晚回到安靜空間休息。",
    featuresEyebrow: "HIGHLIGHTS",
    featuresTitle: "預訂前想了解的亮點",
    feature1Title: "照片中也能感受到舒適",
    feature1Text: "明亮整潔的空間，無論短住或較長假期都很合適。",
    feature2Title: "行程規劃更順暢",
    feature2Text: "可在 Airbnb 上確認空房、價格與預訂資訊，安排旅程更輕鬆。",
    feature3Title: "多語言介紹",
    feature3Text: "支援日語、英語、韓語、簡體中文與繁體中文，海外旅客也容易理解。",
    galleryEyebrow: "ATMOSPHERE",
    galleryTitle: "能想像入住體驗的空間",
    accessEyebrow: "BOOKING",
    accessTitle: "透過 Airbnb 安全預訂。",
    accessText:
      "空房情況、價格、房屋守則、取消政策和最新照片都可在 Airbnb 頁面確認。如果日期已確定，建議盡早查看。",
    accessLink: "開啟預訂頁面",
    faqEyebrow: "FAQ",
    faqTitle: "常見確認事項",
    faq1Q: "在哪裡查看價格和空房？",
    faq1A: "在 Airbnb 預訂頁面選擇日期，即可查看最新價格和空房情況。",
    faq2Q: "可以查看更多照片嗎？",
    faq2A: "可透過照片導覽連結查看 Airbnb 上的最新照片。",
    faq3Q: "在哪裡詢問問題？",
    faq3A: "預訂前的問題建議透過 Airbnb 頁面聯絡房東，更加安心。",
    footerBook: "在 Airbnb 預訂",
  },
};

const year = document.querySelector("#year");
const langButtons = document.querySelectorAll("[data-lang]");
const translatable = document.querySelectorAll("[data-i18n]");

if (year) {
  year.textContent = new Date().getFullYear();
}

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.ja;

  translatable.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  document.documentElement.lang = lang === "zhHans" ? "zh-CN" : lang === "zhHant" ? "zh-TW" : lang;
  localStorage.setItem("siteLanguage", lang);
}

document.querySelectorAll('a[href^="https://www.airbnb.jp"]').forEach((link) => {
  if (!link.href.includes("rooms/1376670888016159485")) {
    link.href = bookingUrl;
  }
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage(localStorage.getItem("siteLanguage") || "ja");
