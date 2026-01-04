import { DevelopmentPhase } from "../../../types";
import { dinhTienHoang } from "./emperors/dinh_tien_hoang";
import { dinhPheDe } from "./emperors/dinh_phe_de";

export const development: DevelopmentPhase = {
  overview: "Mặc dù chỉ tồn tại 12 năm, Nhà Đinh đã hoàn thành sứ mệnh lịch sử quan trọng là thống nhất đất nước và đặt nền móng cho nhà nước phong kiến tập quyền. Đinh Tiên Hoàng là vị vua đầu tiên của Việt Nam xưng Đế, khẳng định ý thức độc lập tự chủ cao độ.",
  general_achievements: [
    "Đặt quốc hiệu Đại Cồ Việt, mở ra kỷ nguyên độc lập, tự chủ lâu dài.",
    "Đúc tiền đồng đầu tiên của Việt Nam: Thái Bình Hưng Bảo.",
    "Tổ chức quân đội thành 'Thập đạo quân' (10 đạo).",
    "Thiết lập triều nghi, phong chức tước cho quan lại văn võ, quy định cấp bậc tăng đạo."
  ],
  emperors: [
    dinhTienHoang,
    dinhPheDe
  ]
};