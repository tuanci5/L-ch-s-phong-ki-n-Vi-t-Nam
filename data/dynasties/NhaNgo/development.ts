import { DevelopmentPhase } from "../../../types";
import { tienNgoVuong } from "./emperors/tien_ngo_vuong";
import { duongBinhVuong } from "./emperors/duong_binh_vuong";
import { thienSachVuong } from "./emperors/thien_sach_vuong";
import { namTanVuong } from "./emperors/nam_tan_vuong";

export const development: DevelopmentPhase = {
  overview: "Tuy thời gian tồn tại không dài (26 năm), nhưng nhà Ngô đã đặt nền móng sơ khai cho việc xây dựng chính quyền quân chủ độc lập. Điểm đặc biệt của triều đại này là mô hình 'Một nước hai vua' (Thiên Sách Vương và Nam Tấn Vương cùng trị vì) chưa từng có tiền lệ.",
  general_achievements: [
    "Thiết lập triều đình phong kiến độc lập đầu tiên sau 1000 năm Bắc thuộc.",
    "Định đô tại Cổ Loa, thể hiện ý thức nối tiếp truyền thống Âu Lạc xưa.",
    "Tổ chức bộ máy nhà nước quy củ với các chức quan văn, võ, quy định phẩm phục."
  ],
  emperors: [
    tienNgoVuong,
    duongBinhVuong,
    thienSachVuong,
    namTanVuong
  ]
};