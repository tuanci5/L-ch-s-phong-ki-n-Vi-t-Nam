import { ResistancePhase } from "../../../types";
import { rachGamXoaiMut } from "./resistance/rach_gam_xoai_mut";
import { daiPhaQuanThanh } from "./resistance/dai_pha_quan_thanh";
import { chinhPhatAiLao } from "./resistance/chinh_phat_ai_lao";
import { ngoaiGiaoCuongQuoc } from "./resistance/ngoai_giao_cuong_quoc";

export const resistance: ResistancePhase = {
  overview: "Triều đại Tây Sơn là đỉnh cao của nghệ thuật quân sự Việt Nam. Không chỉ quét sạch các thế lực xâm lược hùng mạnh (Xiêm, Thanh) để bảo vệ độc lập, nhà Tây Sơn còn chủ động mở rộng ảnh hưởng và lãnh thổ sang phía Tây (Ai Lao) và thực hiện chính sách ngoại giao nước lớn đầy táo bạo đối với phương Bắc (đòi đất Lưỡng Quảng).",
  foreign_resistance: [
    rachGamXoaiMut,
    daiPhaQuanThanh,
    chinhPhatAiLao,
    ngoaiGiaoCuongQuoc
  ],
  domestic_uprisings: []
};