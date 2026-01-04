import { DevelopmentPhase } from "../../../types";
import { kinhDuongVuong } from "./emperors/kinh_duong_vuong";
import { lacLongQuan } from "./emperors/lac_long_quan";
import { hungQuocVuong } from "./emperors/hung_quoc_vuong";
import { hungHuyVuong } from "./emperors/hung_huy_vuong";
import { hungChieuVuong } from "./emperors/hung_chieu_vuong";
import { hungNghiVuong } from "./emperors/hung_nghi_vuong";
import { hungDueVuong } from "./emperors/hung_due_vuong";
import { anDuongVuong } from "./emperors/an_duong_vuong";
import { hungHoaVuong, hungHyVuong, cacVuaHungTrungGian, hungTaoVuong } from "./emperors/cac_vua_hung_khac";

export const development: DevelopmentPhase = {
  overview: "Giai đoạn này tồn tại sự đan xen giữa Huyền sử (Kỷ Hồng Bàng - niên đại hơn 4000 năm) và Lịch sử khảo cổ (Văn hóa Đông Sơn - cách ngày nay khoảng 2700 năm). Theo quan điểm lịch sử hiện đại, '18 đời Hùng Vương' thực chất là 18 nhành/chi (dynasties), mỗi chi gồm nhiều vị vua trị vì kế tiếp nhau, giải thích cho việc niên đại kéo dài hơn 2000 năm.",
  general_achievements: [
    "Văn hóa vật thể: Đỉnh cao là Trống đồng Đông Sơn, thạp đồng, kỹ thuật đúc đồng đạt trình độ tuyệt kỹ.",
    "Tổ chức xã hội: Chuyển biến từ công xã nguyên thủy sang nhà nước sơ khai. Đứng đầu là Vua Hùng, giúp việc có Lạc Hầu, Lạc Tướng (văn võ), Bồ Chính (già làng).",
    "Nông nghiệp: thuần hóa lúa nước, dùng sức kéo trâu bò (Lưỡi cày đồng).",
    "Quân sự: Bước đầu xây dựng quân đội thường trực và công trình phòng thủ quy mô lớn (Thành Cổ Loa)."
  ],
  emperors: [
    kinhDuongVuong,
    lacLongQuan,
    hungQuocVuong,
    hungHoaVuong,
    hungHyVuong,
    hungHuyVuong,
    hungChieuVuong,
    cacVuaHungTrungGian,
    hungTaoVuong,
    hungNghiVuong,
    hungDueVuong,
    anDuongVuong
  ]
};