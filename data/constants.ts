export const DYNASTIES_METADATA = [
  { name: "Huyền sử khởi nguồn dân tộc", period: "Khoảng 4000 năm trước - trước Văn Lang", slug: "huyen-su-khoi-nguon-dan-toc" },
  { name: "Văn Lang - Âu Lạc", period: "Truyền thuyết: 2879 TCN - 179 TCN", slug: "van-lang-au-lac" },
  { name: "Trưng Nữ Vương", period: "40 - 43", slug: "trung-nu-vuong" },
  { name: "Khởi nghĩa Bà Triệu", period: "Năm 248", slug: "khoi-nghia-ba-trieu" },
  { name: "Nhà Tiền Lý", period: "544 - 602", slug: "nha-tien-ly" },
  { name: "Mai Hắc Đế & Phùng Hưng", period: "713 - 791", slug: "mai-hac-de-phung-hung" },
  { name: "Họ Khúc & Họ Dương", period: "905 - 938", slug: "ho-khuc-ho-duong" },
  { name: "Nhà Ngô", period: "939 - 965", slug: "nha-ngo" },
  { name: "Nhà Đinh", period: "968 - 980", slug: "nha-dinh" },
  { name: "Nhà Tiền Lê", period: "980 - 1009", slug: "nha-tien-le" },
  { name: "Nhà Lý", period: "1009 - 1225", slug: "nha-ly" },
  { name: "Nhà Trần", period: "1226 - 1400", slug: "nha-tran" },
  { name: "Nhà Hồ", period: "1400 - 1407", slug: "nha-ho" },
  { name: "Nhà Hậu Lê", period: "1428 - 1789", slug: "nha-hau-le" },
  { name: "Nhà Tây Sơn", period: "1778 - 1802", slug: "nha-tay-son" },
  { name: "Nhà Nguyễn", period: "1802 - 1945", slug: "nha-nguyen" }
];

export const DYNASTY_ROUTE_PREFIX = "#/trieu-dai/";

export const getDynastyUrl = (slug: string) => `${DYNASTY_ROUTE_PREFIX}${slug}`;

export const getSlugFromHash = (hash: string) => {
  if (!hash.startsWith(DYNASTY_ROUTE_PREFIX)) return "";
  return decodeURIComponent(hash.slice(DYNASTY_ROUTE_PREFIX.length));
};
