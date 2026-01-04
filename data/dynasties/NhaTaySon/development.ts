import { DevelopmentPhase } from "../../../types";
import { thaiDuc } from "./emperors/thai_duc";
import { quangTrung } from "./emperors/quang_trung";
import { nguyenLu } from "./emperors/nguyen_lu";
import { canhThinh } from "./emperors/canh_thinh";
import { nguyenBao } from "./emperors/nguyen_bao";

export const development: DevelopmentPhase = {
  overview: "Nhà Tây Sơn (1778 - 1802) là một hiện tượng đặc biệt trong lịch sử, xuất thân từ nông dân áo vải nhưng đã thực hiện được sứ mệnh phi thường: Lật đổ các tập đoàn phong kiến cát cứ (Chúa Nguyễn ở miền Nam, Chúa Trịnh ở miền Bắc), thống nhất đất nước và đánh bại các thế lực ngoại xâm hùng mạnh (Xiêm, Thanh). Tuy nhiên, triều đại này tồn tại ngắn ngủi do mâu thuẫn nội bộ và sự ra đi đột ngột của vua Quang Trung.",
  general_achievements: [
    "Quân sự: Đỉnh cao nghệ thuật quân sự thần tốc, táo bạo, bất ngờ (Hành quân thần tốc ra Bắc dịp Tết Kỷ Dậu).",
    "Văn hóa - Giáo dục: Đề cao chữ Nôm, đưa chữ Nôm vào thi cử và văn bản hành chính (Sùng chính viện), dịch sách kinh điển ra chữ Nôm.",
    "Kinh tế: Ban hành 'Chiếu khuyến nông' để giải quyết nạn đói, đúc tiền 'Quang Trung thông bảo', mở cửa ải thông thương buôn bán với Trung Quốc."
  ],
  emperors: [
    thaiDuc,
    quangTrung,
    nguyenLu,
    canhThinh,
    nguyenBao
  ]
};