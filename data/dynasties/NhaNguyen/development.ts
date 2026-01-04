import { DevelopmentPhase } from "../../../types";
import { giaLong } from "./emperors/gia_long";
import { minhMang } from "./emperors/minh_mang";
import { thieuTri } from "./emperors/thieu_tri";
import { tuDuc } from "./emperors/tu_duc";
import { ducDuc } from "./emperors/duc_duc";
import { hiephoa } from "./emperors/hiep_hoa";
import { kienPhuc } from "./emperors/kien_phuc";
import { hamNghi } from "./emperors/ham_nghi";
import { dongKhanh } from "./emperors/dong_khanh";
import { thanhThai } from "./emperors/thanh_thai";
import { duyTan } from "./emperors/duy_tan";
import { khaiDinh } from "./emperors/khai_dinh";
import { baoDai } from "./emperors/bao_dai";

export const development: DevelopmentPhase = {
  overview: "Nhà Nguyễn (1802-1945) là triều đại quân chủ cuối cùng, đánh dấu sự thống nhất vẹn toàn lãnh thổ Việt Nam từ Bắc chí Nam. Thời kỳ đầu (Gia Long, Minh Mạng), đất nước hùng mạnh, mở rộng bờ cõi. Tuy nhiên, chính sách bế quan tỏa cảng và sự bảo thủ của các vua sau này đã khiến Việt Nam tụt hậu và rơi vào tay thực dân Pháp.",
  general_achievements: [
    "Lãnh thổ: Xác lập chủ quyền rõ ràng trên hai quần đảo Hoàng Sa và Trường Sa.",
    "Hành chính: Vua Minh Mạng chia cả nước thành 30 tỉnh và 1 phủ (Thừa Thiên), mô hình cơ bản vẫn còn giá trị đến ngày nay.",
    "Luật pháp: Ban hành Hoàng Việt luật lệ (Luật Gia Long).",
    "Văn hóa: Quần thể di tích Cố đô Huế, Nhã nhạc cung đình Huế (Di sản văn hóa thế giới)."
  ],
  emperors: [
    giaLong,
    minhMang,
    thieuTri,
    tuDuc,
    ducDuc,
    hiephoa,
    kienPhuc,
    hamNghi,
    dongKhanh,
    thanhThai,
    duyTan,
    khaiDinh,
    baoDai
  ]
};