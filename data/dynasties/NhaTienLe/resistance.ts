import { ResistancePhase } from "../../../types";
import { khangChienChongTong } from "./resistance/khang_chien_chong_tong";
import { chinhPhatChiemThanh } from "./resistance/chinh_phat_chiem_thanh";
import { ngoaiGiaoMemDeo } from "./resistance/ngoai_giao_mem_deo";

export const resistance: ResistancePhase = {
  overview: "Dưới thời Lê Đại Hành, Đại Cồ Việt đạt đến đỉnh cao về sức mạnh quân sự trong thế kỷ X. Ông đã hoàn thành xuất sắc hai nhiệm vụ: 'Phá Tống' để bảo vệ độc lập và 'Bình Chiêm' để mở rộng uy thế xuống phương Nam. Đặc biệt, sự kết hợp tài tình giữa quân sự và ngoại giao đã khiến biên cương Đại Cồ Việt vững như bàn thạch.",
  foreign_resistance: [
    khangChienChongTong,
    chinhPhatChiemThanh,
    ngoaiGiaoMemDeo
  ],
  domestic_uprisings: []
};