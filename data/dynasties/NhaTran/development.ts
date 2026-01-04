import { DevelopmentPhase } from "../../../types";
import { tranThaiTong } from "./emperors/tran_thai_tong";
import { tranThanhTong } from "./emperors/tran_thanh_tong";
import { tranNhanTong } from "./emperors/tran_nhan_tong";
import { tranAnhTong } from "./emperors/tran_anh_tong";
import { tranMinhTong } from "./emperors/tran_minh_tong";
import { tranHienTong } from "./emperors/tran_hien_tong";
import { tranDuTong } from "./emperors/tran_du_tong";
import { duongNhatLe } from "./emperors/duong_nhat_le";
import { tranNgheTong } from "./emperors/tran_nghe_tong";
import { tranDueTong } from "./emperors/tran_due_tong";
import { tranPheDe } from "./emperors/tran_phe_de";
import { tranThuanTong } from "./emperors/tran_thuan_tong";
import { tranThieuDe } from "./emperors/tran_thieu_de";

export const development: DevelopmentPhase = {
  overview: "Nhà Trần (1226 - 1400) nổi tiếng với 'Hào khí Đông A' - tinh thần đoàn kết vua tôi, anh em đồng lòng. Đây là triều đại duy nhất 3 lần đánh thắng quân Nguyên Mông hùng mạnh nhất thế giới lúc bấy giờ. Về chính trị, nhà Trần áp dụng chế độ Thái Thượng Hoàng (vua cha dìu dắt vua con) rất thành công.",
  general_achievements: [
    "Quân sự: Xây dựng quân đội tinh nhuệ ('Quân cốt tinh không cốt đông'), binh lính xăm hai chữ 'Sát Thát' (Giết giặc Mông Cổ) lên cánh tay.",
    "Văn hóa: Chữ Nôm bắt đầu được hàn lâm hóa (Hàn Thuyên), Thiền phái Trúc Lâm Yên Tử ra đời (Trần Nhân Tông) thống nhất Phật giáo Đại Việt.",
    "Kinh tế: Chú trọng đắp đê (lập chức Hà đê sứ), đê quai vạc chạy suốt từ đầu nguồn đến cửa biển.",
    "Khoa cử: Đặt ra lệ thi Tam giáo, lập danh hiệu Tam khôi (Trạng nguyên, Bảng nhãn, Thám hoa)."
  ],
  emperors: [
    tranThaiTong,
    tranThanhTong,
    tranNhanTong,
    tranAnhTong,
    tranMinhTong,
    tranHienTong,
    tranDuTong,
    duongNhatLe,
    tranNgheTong,
    tranDueTong,
    tranPheDe,
    tranThuanTong,
    tranThieuDe
  ]
};