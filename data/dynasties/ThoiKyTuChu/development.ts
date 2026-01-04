import { DevelopmentPhase } from "../../../types";
import { khucThuaDu } from "./emperors/khuc_thua_du";
import { khucHao } from "./emperors/khuc_hao";
import { khucThuaMy } from "./emperors/khuc_thua_my";
import { duongDinhNghe } from "./emperors/duong_dinh_nghe";
import { kieuCongTien } from "./emperors/kieu_cong_tien";

export const development: DevelopmentPhase = {
  overview: "Đây là giai đoạn bản lề, người Việt tự cai quản đất nước, thực hiện các chính sách khoan thư sức dân, bãi bỏ các thứ thuế tàn bạo của phương Bắc. Quyền lực chuyển giao qua các dòng họ hào trưởng (Khúc, Dương).",
  general_achievements: [
    "Cải cách hành chính: Chia đặt lại các lộ, phủ, châu, xã.",
    "Chính sách thuế: 'Bình quân thuế ruộng', bãi bỏ lao dịch nặng nề.",
    "Lập sổ hộ khẩu để quản lý dân cư."
  ],
  emperors: [
    khucThuaDu,
    khucHao,
    khucThuaMy,
    duongDinhNghe,
    kieuCongTien
  ]
};