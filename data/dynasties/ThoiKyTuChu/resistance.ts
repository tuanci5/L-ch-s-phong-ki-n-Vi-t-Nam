import { ResistancePhase } from "../../../types";
import { khucThuaMyChongNamHan } from "./resistance/khuc_thua_my_chong_nam_han";
import { duongDinhNghePhanCong } from "./resistance/duong_dinh_nghe_phan_cong";

export const resistance: ResistancePhase = {
  overview: "Đối đầu trực tiếp với tham vọng bành trướng của nhà Nam Hán (một quốc gia tách ra từ nhà Đường ở Quảng Châu).",
  foreign_resistance: [
    khucThuaMyChongNamHan,
    duongDinhNghePhanCong
  ],
  domestic_uprisings: []
};