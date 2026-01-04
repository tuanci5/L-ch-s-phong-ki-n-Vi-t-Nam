import { ResistancePhase } from "../../../types";
import { khangChienChongMinh } from "./resistance/khang_chien_chong_minh";
import { moDatPhuongNam } from "./resistance/mo_dat_phuong_nam";

export const resistance: ResistancePhase = {
  overview: "Nhà Hồ có tham vọng lớn và thành công trong việc mở rộng lãnh thổ về phía Nam (lấy được Quảng Nam, Quảng Ngãi). Tuy nhiên, về phía Bắc, cuộc kháng chiến chống quân Minh xâm lược lại thất bại thảm hại. Dù có thành cao, hào sâu, súng thần cơ uy lực, nhưng do chiến lược sai lầm 'chỉ lo giữ thành mà không lo giữ lòng dân', nhà Hồ đã để mất nước, đẩy dân tộc vào ách đô hộ tàn bạo của nhà Minh.",
  foreign_resistance: [
    moDatPhuongNam,
    khangChienChongMinh
  ],
  domestic_uprisings: []
};