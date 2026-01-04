import { ResistancePhase } from "../../../types";
import { tapKichSangTong } from "./resistance/tap_kich_sang_tong";
import { phongTuyenNhuNguyet } from "./resistance/phong_tuyen_nhu_nguyet";
import { binhChiem1044 } from "./resistance/binh_chiem_1044";
import { moRongLanhTho1069 } from "./resistance/mo_rong_lanh_tho_1069";

export const resistance: ResistancePhase = {
  overview: "Nhà Lý thực hiện chính sách quốc phòng tích cực 'Ngụ binh ư nông' và chiến lược 'Tiên phát chế nhân'. Ở phía Bắc, đánh bại dã tâm xâm lược của nhà Tống. Ở phía Nam, thực hiện các cuộc chinh phạt Chiêm Thành để ổn định biên giới và mở rộng lãnh thổ, sáp nhập 3 châu mới vào bản đồ Đại Việt.",
  foreign_resistance: [
    tapKichSangTong,
    phongTuyenNhuNguyet,
    binhChiem1044,
    moRongLanhTho1069
  ],
  domestic_uprisings: []
};