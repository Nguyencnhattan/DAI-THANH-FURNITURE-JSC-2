export type Locale = "en" | "vi";

export type Dictionary = {
  nav: { home: string; about: string; products: string; factory: string; contact: string };
  common: {
    getQuote: string;
    contactUs: string;
    menu: string;
    scroll: string;
    all: string;
    navigate: string;
    contact: string;
    rights: string;
    valuesLine: string;
    switchToEn: string;
    switchToVi: string;
  };
  site: {
    tagline: string;
    description: string;
  };
  hero: {
    subtitle: string;
    viewCollections: string;
    ourStory: string;
  };
  home: {
    yearsExperience: string;
    storyTitle: string;
    discoverMore: string;
    since1995: string;
    leadingFactory: string;
    collections: string;
    collectionsTitle: string;
    collectionsDesc: string;
    viewMore: string;
    viewMoreBtn: string;
    ourProducts: string;
    featuredPieces: string;
    coreValues: string;
    valuesTitle: string;
    catalogue: string;
    catalogueTitle: string;
    catalogueDesc: string;
    receiveCatalogue: string;
    news: string;
    newsTitle: string;
    getInTouch: string;
    contactTitle: string;
    sendMessage: string;
  };
  about: {
    eyebrow: string;
    title: string;
    storyTitle: string;
    visitFactory: string;
    ourPromise: string;
    coreValues: string;
  };
  products: {
    eyebrow: string;
    title: string;
    desc: string;
  };
  productDetail: {
    description: string;
    requestQuote: string;
    allProducts: string;
    related: string;
    relatedTitle: string;
  };
  factory: {
    eyebrow: string;
    title: string;
    subtitle: string;
    productionLine: string;
    capacity: string;
    capacityTitle: string;
    capacityDesc: string;
    downloadBrochure: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    address: string;
    callUs: string;
    emailUs: string;
    followUs: string;
  };
  form: {
    title: string;
    fullName: string;
    namePlaceholder: string;
    email: string;
    company: string;
    companyPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    success: string;
  };
  stats: { value: string; label: string }[];
  categories: {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
  }[];
  values: { title: string; text: string }[];
  factoryLines: { title: string; description: string }[];
  news: { slug: string; title: string; date: string }[];
  aboutQuote: string;
  aboutStory: string;
  aboutExtra: string;
};

const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    products: "Products",
    factory: "Factory",
    contact: "Contact",
  },
  common: {
    getQuote: "Get a Quote",
    contactUs: "Contact Us",
    menu: "Menu",
    scroll: "Scroll",
    all: "All",
    navigate: "Navigate",
    contact: "Contact",
    rights: "All rights reserved.",
    valuesLine: "Integrity · Quality · On Time",
    switchToEn: "Switch to English",
    switchToVi: "Chuyển sang tiếng Việt",
  },
  site: {
    tagline: "Vietnamese Woodcraft — Global Standards",
    description:
      "Dai Thanh Furniture Joint Stock Company — a leading Vietnamese manufacturer of indoor, outdoor, and kitchen cabinet furniture since 1995.",
  },
  hero: {
    subtitle:
      "Manufacturer of Indoor · Outdoor · Kitchen cabinets since 1995 — exporting Vietnamese quality to the world.",
    viewCollections: "View Collections",
    ourStory: "Our Story",
  },
  home: {
    yearsExperience: "Years Of Experience",
    storyTitle: "We provide the best quality furniture products for you",
    discoverMore: "Discover More",
    since1995: "Since 1995",
    leadingFactory: "Leading wooden furniture factory in Vietnam",
    collections: "Collections",
    collectionsTitle: "Dai Thanh Collections",
    collectionsDesc: "A place to create lasting value for you — Indoor, Outdoor & Kitchen.",
    viewMore: "View more →",
    viewMoreBtn: "View More",
    ourProducts: "Our Products",
    featuredPieces: "Featured Pieces",
    coreValues: "Core Values",
    valuesTitle: "Integrity · Quality · On Time",
    catalogue: "Catalogue 2026",
    catalogueTitle: "Get inspired by Vietnamese craftsmanship",
    catalogueDesc:
      "Trusted by over 100+ companies worldwide. Request our catalogue and custom manufacturing consultation.",
    receiveCatalogue: "Receive Catalogue",
    news: "News & Events",
    newsTitle: "Our Latest Updates",
    getInTouch: "Get In Touch",
    contactTitle: "Ready to partner with global clients",
    sendMessage: "Send Message",
  },
  about: {
    eyebrow: "About Us",
    title: "years of wooden excellence",
    storyTitle: "We provide the best quality furniture products for you",
    visitFactory: "Visit the Factory",
    ourPromise: "Our Promise",
    coreValues: "Core Values",
  },
  products: {
    eyebrow: "Our Products",
    title: "Dai Thanh Collections",
    desc: "Explore finely crafted wood product lines for the global market.",
  },
  productDetail: {
    description:
      "Part of the {category} collection by {company} — export-quality wood craftsmanship with modern, durable design to international standards.",
    requestQuote: "Request a Quote",
    allProducts: "All Products",
    related: "Related",
    relatedTitle: "You May Also Like",
  },
  factory: {
    eyebrow: "Our Factory",
    title: "Export-grade production capacity",
    subtitle:
      "Three specialized lines — Outdoor, Indoor, and Kitchen cabinets — serving international markets.",
    productionLine: "Production Line",
    capacity: "Capacity",
    capacityTitle: "~200 × 40' containers / month",
    capacityDesc:
      "Our factory near National Highway 1A serves large orders to the US, Europe, and Australia. Contact Sales for a capacity sheet and brochure.",
    downloadBrochure: "Download Brochure",
  },
  contact: {
    eyebrow: "Contact",
    title: "Get In Touch",
    subtitle:
      "Connect with the Dai Thanh Furniture team for catalogues, OEM/ODM quotations, and production capacity details.",
    address: "Address",
    callUs: "Call Us",
    emailUs: "Email Us",
    followUs: "Follow Us",
  },
  form: {
    title: "Send Message",
    fullName: "Full Name",
    namePlaceholder: "Your name",
    email: "Email",
    company: "Company",
    companyPlaceholder: "Company",
    message: "Message",
    messagePlaceholder: "Tell us about your project...",
    submit: "Send Message",
    success:
      "Thank you! This demo form has been received — please email {email} directly so our Sales team can respond.",
  },
  stats: [
    { value: "31+", label: "Years of Experience" },
    { value: "1,800+", label: "Employees" },
    { value: "20ha", label: "Factory Scale" },
    { value: "200+", label: "Containers / Month" },
  ],
  categories: [
    {
      slug: "outdoor",
      title: "Outdoor",
      subtitle: "Outdoor Furniture",
      description:
        "Premium outdoor wood collections for resorts, patios, gardens, and commercial spaces — built to endure every season.",
    },
    {
      slug: "indoor",
      title: "Indoor",
      subtitle: "Indoor Furniture",
      description:
        "Refined indoor designs with carefully selected timber and meticulous finishing — Vietnamese craftsmanship for modern living.",
    },
    {
      slug: "kitchen",
      title: "Kitchen",
      subtitle: "Kitchen Cabinetry",
      description:
        "Export-grade wooden kitchen cabinets optimized for function and aesthetics — for homes and commercial projects alike.",
    },
  ],
  values: [
    {
      title: "Integrity",
      text: "Transparent production capacity, factory scale, and product quality — building lasting partnerships.",
    },
    {
      title: "Quality",
      text: "Selected timber, ISO-aligned processes, and meticulous finishing to European, US, and Australian export standards.",
    },
    {
      title: "On Time",
      text: "Average capacity of ~200 × 40' containers per month — ready for large orders and international schedules.",
    },
    {
      title: "Fine Craftsmanship",
      text: "Vietnamese skilled hands combined with modern machinery to deliver trending, durable designs.",
    },
  ],
  factoryLines: [
    {
      title: "Outdoor Production Line",
      description:
        "Outdoor furniture manufacturing — sofa, dining, sunlounge, and patio collections for export markets.",
    },
    {
      title: "Indoor Production Line",
      description:
        "Indoor production with strict quality control for residential spaces and furniture projects.",
    },
    {
      title: "Kitchen Cabinet Production Line",
      description:
        "Dedicated kitchen cabinet line — high precision and consistent finishing to export standards.",
    },
  ],
  news: [
    {
      slug: "innovation-academia-industry",
      title:
        "Innovation and Academia–Industry Collaboration in the Local Industrial Ecosystem",
      date: "2026",
    },
    {
      slug: "new-year-greetings-2026",
      title: "New Year Greetings 2026",
      date: "2026",
    },
    {
      slug: "merry-christmas-2026",
      title: "Merry Christmas and Happy New Year 2026",
      date: "2025",
    },
  ],
  aboutQuote:
    "Thank you for visiting the DAI THANH FURNITURE JSC website. This is an opportunity for us to build a long-lasting business relationship with you. We hope you can easily find useful and transparent information regarding production capacity, factory scale, product quality, and the trending designs developed by our team.",
  aboutStory:
    "DAI THANH FURNITURE Co., Ltd. was founded on 23 June 1995 and converted into DAI THANH FURNITURE JSC on 25 October 2007. We have grown into one of Vietnam's leading wooden furniture factories in Indoor, Outdoor, and Kitchen cabinets.",
  aboutExtra:
    "With about 1,800 employees and a factory of up to 20 hectares near National Highway 1A in Quy Nhon, Dai Thanh exports an average of about 200 × 40' containers per month to the US, Europe, and Australia — committed to Integrity · Quality · On Time.",
};

const vi: Dictionary = {
  nav: {
    home: "Trang chủ",
    about: "Về chúng tôi",
    products: "Sản phẩm",
    factory: "Nhà máy",
    contact: "Liên hệ",
  },
  common: {
    getQuote: "Báo giá",
    contactUs: "Liên hệ tư vấn",
    menu: "Menu",
    scroll: "Cuộn",
    all: "Tất cả",
    navigate: "Điều hướng",
    contact: "Liên hệ",
    rights: "Đã đăng ký bản quyền.",
    valuesLine: "Uy tín · Chất lượng · Kịp thời",
    switchToEn: "Switch to English",
    switchToVi: "Chuyển sang tiếng Việt",
  },
  site: {
    tagline: "Nghệ thuật gỗ Việt — chuẩn mực toàn cầu",
    description:
      "Công ty Cổ phần Công nghệ Gỗ Đại Thành — nhà sản xuất nội thất gỗ Indoor, Outdoor và Kitchen cabinets hàng đầu Việt Nam từ năm 1995.",
  },
  hero: {
    subtitle:
      "Nhà sản xuất Indoor · Outdoor · Kitchen cabinets từ năm 1995 — xuất khẩu chất lượng Việt Nam ra thế giới.",
    viewCollections: "Xem bộ sưu tập",
    ourStory: "Câu chuyện Đại Thành",
  },
  home: {
    yearsExperience: "Năm kinh nghiệm",
    storyTitle: "Chúng tôi mang đến sản phẩm nội thất chất lượng tốt nhất cho bạn",
    discoverMore: "Khám phá thêm",
    since1995: "Từ năm 1995",
    leadingFactory: "Nhà máy nội thất gỗ hàng đầu Việt Nam",
    collections: "Bộ sưu tập",
    collectionsTitle: "Bộ sưu tập Đại Thành",
    collectionsDesc: "Nơi tạo giá trị bền vững cho bạn — Indoor, Outdoor & Kitchen.",
    viewMore: "Xem thêm →",
    viewMoreBtn: "Xem thêm",
    ourProducts: "Sản phẩm",
    featuredPieces: "Sản phẩm nổi bật",
    coreValues: "Giá trị cốt lõi",
    valuesTitle: "Uy tín · Chất lượng · Kịp thời",
    catalogue: "Catalogue 2026",
    catalogueTitle: "Cảm hứng từ tay nghề Việt Nam",
    catalogueDesc:
      "Được tin tưởng bởi hơn 100+ đối tác toàn cầu. Nhận catalogue và tư vấn sản xuất theo yêu cầu.",
    receiveCatalogue: "Nhận Catalogue",
    news: "Tin tức & Sự kiện",
    newsTitle: "Cập nhật mới nhất",
    getInTouch: "Liên hệ",
    contactTitle: "Sẵn sàng đồng hành cùng đối tác toàn cầu",
    sendMessage: "Gửi tin nhắn",
  },
  about: {
    eyebrow: "Về chúng tôi",
    title: "năm tinh hoa nghề gỗ",
    storyTitle: "Chúng tôi mang đến sản phẩm nội thất chất lượng tốt nhất cho bạn",
    visitFactory: "Xem nhà máy",
    ourPromise: "Cam kết của chúng tôi",
    coreValues: "Giá trị cốt lõi",
  },
  products: {
    eyebrow: "Sản phẩm",
    title: "Bộ sưu tập Đại Thành",
    desc: "Khám phá các dòng sản phẩm gỗ tinh xảo cho thị trường toàn cầu.",
  },
  productDetail: {
    description:
      "Sản phẩm thuộc bộ sưu tập {category} của {company} — chế tác gỗ chất lượng xuất khẩu, thiết kế hiện đại và bền vững theo chuẩn quốc tế.",
    requestQuote: "Yêu cầu báo giá",
    allProducts: "Tất cả sản phẩm",
    related: "Liên quan",
    relatedTitle: "Bạn cũng có thể thích",
  },
  factory: {
    eyebrow: "Nhà máy",
    title: "Năng lực sản xuất chuẩn xuất khẩu",
    subtitle:
      "Ba dây chuyền chuyên biệt — Outdoor, Indoor và Kitchen cabinets — phục vụ thị trường quốc tế.",
    productionLine: "Dây chuyền",
    capacity: "Công suất",
    capacityTitle: "~200 × container 40'/tháng",
    capacityDesc:
      "Nhà máy gần Quốc lộ 1A, phục vụ đơn hàng lớn tới Mỹ, châu Âu và Úc. Liên hệ đội Sales để nhận capacity sheet và brochure.",
    downloadBrochure: "Tải brochure",
  },
  contact: {
    eyebrow: "Liên hệ",
    title: "Kết nối với chúng tôi",
    subtitle:
      "Kết nối với đội ngũ Dai Thanh Furniture để nhận catalogue, báo giá OEM/ODM và thông tin năng lực sản xuất.",
    address: "Địa chỉ",
    callUs: "Gọi chúng tôi",
    emailUs: "Email",
    followUs: "Theo dõi",
  },
  form: {
    title: "Gửi tin nhắn",
    fullName: "Họ tên",
    namePlaceholder: "Họ và tên của bạn",
    email: "Email",
    company: "Công ty",
    companyPlaceholder: "Tên công ty",
    message: "Nội dung",
    messagePlaceholder: "Cho chúng tôi biết về dự án của bạn...",
    submit: "Gửi tin nhắn",
    success:
      "Cảm ơn bạn! Form demo đã ghi nhận — hãy email trực tiếp tới {email} để đội Sales phản hồi.",
  },
  stats: [
    { value: "31+", label: "Năm kinh nghiệm" },
    { value: "1.800+", label: "Nhân sự" },
    { value: "20ha", label: "Quy mô nhà máy" },
    { value: "200+", label: "Container/tháng" },
  ],
  categories: [
    {
      slug: "outdoor",
      title: "Outdoor",
      subtitle: "Nội thất ngoài trời",
      description:
        "Bộ sưu tập outdoor gỗ cao cấp cho resort, patio, vườn và không gian thương mại — bền vững dưới mọi thời tiết.",
    },
    {
      slug: "indoor",
      title: "Indoor",
      subtitle: "Nội thất trong nhà",
      description:
        "Thiết kế indoor tinh tế, gỗ chọn lọc và hoàn thiện tỉ mỉ — mang hơi thở thủ công Việt Nam vào không gian sống hiện đại.",
    },
    {
      slug: "kitchen",
      title: "Kitchen",
      subtitle: "Tủ bếp & cabinetry",
      description:
        "Hệ tủ bếp gỗ chất lượng xuất khẩu, tối ưu công năng và thẩm mỹ cho không gian bếp gia đình lẫn dự án thương mại.",
    },
  ],
  values: [
    {
      title: "Uy tín",
      text: "Minh bạch năng lực sản xuất, quy mô nhà máy và chất lượng sản phẩm — xây dựng quan hệ đối tác lâu dài.",
    },
    {
      title: "Chất lượng",
      text: "Gỗ chọn lọc, quy trình chuẩn ISO, hoàn thiện tỉ mỉ theo chuẩn xuất khẩu châu Âu, Mỹ, Úc.",
    },
    {
      title: "Đúng hạn",
      text: "Công suất trung bình ~200 container 40'/tháng, đáp ứng đơn hàng lớn và tiến độ quốc tế.",
    },
    {
      title: "Thủ công tinh xảo",
      text: "Kết hợp tay nghề Việt Nam với máy móc hiện đại để tạo nên thiết kế trending và bền vững.",
    },
  ],
  factoryLines: [
    {
      title: "Dây chuyền Outdoor",
      description:
        "Dây chuyền sản xuất nội thất ngoài trời — sofa, dining, sunlounge và bộ sưu tập patio xuất khẩu.",
    },
    {
      title: "Dây chuyền Indoor",
      description:
        "Dây chuyền indoor với kiểm soát chất lượng nghiêm ngặt cho không gian sống và dự án nội thất.",
    },
    {
      title: "Dây chuyền tủ bếp",
      description:
        "Dây chuyền tủ bếp chuyên biệt — độ chính xác cao, hoàn thiện đồng bộ theo tiêu chuẩn xuất khẩu.",
    },
  ],
  news: [
    {
      slug: "innovation-academia-industry",
      title:
        "Đổi mới và hợp tác Viện–Doanh nghiệp trong hệ sinh thái công nghiệp địa phương",
      date: "2026",
    },
    {
      slug: "new-year-greetings-2026",
      title: "Chúc mừng Năm mới 2026",
      date: "2026",
    },
    {
      slug: "merry-christmas-2026",
      title: "Giáng sinh vui vẻ và Chúc mừng Năm mới 2026",
      date: "2025",
    },
  ],
  aboutQuote:
    "Cảm ơn bạn đã ghé thăm website DAI THANH FURNITURE JSC. Đây là cơ hội để chúng tôi xây dựng mối quan hệ kinh doanh lâu dài với bạn. Hy vọng bạn dễ dàng tìm thấy thông tin hữu ích và minh bạch về năng lực sản xuất, quy mô nhà máy, chất lượng sản phẩm và các thiết kế đang phát triển của đội ngũ chúng tôi.",
  aboutStory:
    "DAI THANH FURNITURE Co., Ltd. được thành lập ngày 23/06/1995 và chuyển đổi thành DAI THANH FURNITURE JSC vào ngày 25/10/2007. Chúng tôi phát triển trở thành một trong những nhà máy gỗ nội thất hàng đầu Việt Nam trong lĩnh vực Indoor, Outdoor và Kitchen cabinets.",
  aboutExtra:
    "Với khoảng 1.800 nhân sự và quy mô nhà máy lên đến 20ha gần Quốc lộ 1A, Quy Nhơn, Đại Thành xuất khẩu trung bình khoảng 200 container 40'/tháng tới các thị trường Mỹ, châu Âu và Úc — cam kết Uy tín · Chất lượng · Kịp thời.",
};

export const dictionaries: Record<Locale, Dictionary> = { en, vi };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

export const navHrefs = [
  { href: "/", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/products", key: "products" as const },
  { href: "/factory", key: "factory" as const },
  { href: "/contact", key: "contact" as const },
];
