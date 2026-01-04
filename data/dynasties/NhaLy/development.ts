import { DevelopmentPhase } from "../../../types";
import { lyThaiTo } from "./emperors/ly_thai_to";
import { lyThaiTong } from "./emperors/ly_thai_tong";
import { lyThanhTong } from "./emperors/ly_thanh_tong";
import { lyNhanTong } from "./emperors/ly_nhan_tong";
import { lyThanTong } from "./emperors/ly_than_tong";
import { lyAnhTong } from "./emperors/ly_anh_tong";
import { lyCaoTong } from "./emperors/ly_cao_tong";
import { lyHueTong } from "./emperors/ly_hue_tong";
import { lyChieuHoang } from "./emperors/ly_chieu_hoang";

export const development: DevelopmentPhase = {
  overview: "Nhà Lý tồn tại 216 năm, là triều đại đặt nền móng vững chắc cho nền văn minh Đại Việt. Đây là thời kỳ Phật giáo cực thịnh (Quốc giáo), Nho giáo bắt đầu được coi trọng, và nền giáo dục khoa cử chính quy ra đời.",
  general_achievements: [
    "Giáo dục: Xây dựng Văn Miếu (1070), mở Quốc Tử Giám (1076) - trường đại học đầu tiên, mở khoa thi đầu tiên (1075).",
    "Luật pháp: Ban hành bộ luật thành văn đầu tiên là 'Hình thư' (1042) để ổn định xã hội.",
    "Kinh tế: Chú trọng nông nghiệp (lễ Tịch điền), cấm giết mổ trâu bò bừa bãi. Nghề gốm bát tràng và kiến trúc chùa tháp phát triển rực rỡ (Chùa Một Cột, Tháp Báo Thiên).",
    "Quân sự: Thực hiện chính sách 'Ngụ binh ư nông' (gửi binh lính ở nhà nông), đảm bảo lực lượng sản xuất và chiến đấu."
  ],
  emperors: [
    lyThaiTo,
    lyThaiTong,
    lyThanhTong,
    lyNhanTong,
    lyThanTong,
    lyAnhTong,
    lyCaoTong,
    lyHueTong,
    lyChieuHoang
  ]
};