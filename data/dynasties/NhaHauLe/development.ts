import { DevelopmentPhase } from "../../../types";
// Lê Sơ
import { leThaiTo } from "./emperors/le_thai_to";
import { leThaiTong } from "./emperors/le_thai_tong";
import { leNhanTong } from "./emperors/le_nhan_tong";
import { leNghiDan } from "./emperors/le_nghi_dan";
import { leThanhTong } from "./emperors/le_thanh_tong";
import { leHienTong } from "./emperors/le_hien_tong";
import { leTucTong } from "./emperors/le_tuc_tong";
import { leUyMuc } from "./emperors/le_uy_muc";
import { leTuongDuc } from "./emperors/le_tuong_duc";
import { leChieuTong } from "./emperors/le_chieu_tong";
import { leCungHoang } from "./emperors/le_cung_hoang";
// Lê Trung Hưng
import { leTrangTong } from "./emperors/le_trang_tong";
import { leTrungTong } from "./emperors/le_trung_tong";
import { leAnhTong } from "./emperors/le_anh_tong";
import { leTheTong } from "./emperors/le_the_tong";
import { leKinhTong } from "./emperors/le_kinh_tong";
import { leThanTong } from "./emperors/le_than_tong";
import { leChanTong } from "./emperors/le_chan_tong";
import { leHuyenTong } from "./emperors/le_huyen_tong";
import { leGiaTong } from "./emperors/le_gia_tong";
import { leHyTong } from "./emperors/le_hy_tong";
import { leDuTong } from "./emperors/le_du_tong";
import { leDuyPhuong } from "./emperors/le_duy_phuong";
import { leThuanTong } from "./emperors/le_thuan_tong";
import { leYTong } from "./emperors/le_y_tong";
import { leHienTongVinh } from "./emperors/le_hien_tong_vinh";
import { leChieuThong } from "./emperors/le_chieu_thong";

export const development: DevelopmentPhase = {
  overview: "Nhà Hậu Lê (1428 - 1789) là triều đại tồn tại lâu nhất trong lịch sử Việt Nam (360 năm). Lịch sử chia triều đại này thành 2 giai đoạn rõ rệt:\n\n• **Lê Sơ (1428 - 1527):** Giai đoạn thịnh trị, quyền lực tập trung tuyệt đối vào tay Hoàng đế (điển hình là thời Lê Thánh Tông). Kết thúc khi Mạc Đăng Dung cướp ngôi.\n\n• **Lê Trung Hưng (1533 - 1789):** Giai đoạn 'Vua Lê - Chúa Trịnh'. Nhà Lê được khôi phục danh nghĩa, nhưng quyền lực thực tế nằm trong tay các Chúa Trịnh (Đàng Ngoài). Vua Lê chỉ 'rủ áo khoanh tay' làm biểu tượng tinh thần.",
  general_achievements: [
    "Luật pháp: Ban hành bộ 'Quốc triều hình luật' (Luật Hồng Đức) - bộ luật tiến bộ nhất thời phong kiến.",
    "Hành chính: Vua Lê Thánh Tông chia cả nước thành 13 đạo thừa tuyên, vẽ 'Hồng Đức bản đồ'.",
    "Văn hóa: Độc tôn Nho giáo, Hội Tao Đàn đẩy mạnh sáng tác văn học.",
    "Kinh tế: Chế độ 'Quân điền' chia ruộng đất công cho dân cày."
  ],
  emperors: [
    // Giai đoạn Lê Sơ
    leThaiTo,
    leThaiTong,
    leNhanTong,
    leNghiDan,
    leThanhTong,
    leHienTong,
    leTucTong,
    leUyMuc,
    leTuongDuc,
    leChieuTong,
    leCungHoang,
    // Giai đoạn Lê Trung Hưng
    leTrangTong,
    leTrungTong,
    leAnhTong,
    leTheTong,
    leKinhTong,
    leThanTong,
    leChanTong,
    leHuyenTong,
    leGiaTong,
    leHyTong,
    leDuTong,
    leDuyPhuong,
    leThuanTong,
    leYTong,
    leHienTongVinh,
    leChieuThong
  ]
};