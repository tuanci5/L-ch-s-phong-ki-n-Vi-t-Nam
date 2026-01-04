import { ResistancePhase } from "../../../types";
import { khangChienMongCo1 } from "./resistance/khang_chien_mong_co_1";
import { khangChienNguyen2 } from "./resistance/khang_chien_nguyen_2";
import { suKienTranIchTac } from "./resistance/su_kien_tran_ich_tac";
import { khangChienNguyen3 } from "./resistance/khang_chien_nguyen_3";
import { moRongBoCoiHuyenTran } from "./resistance/mo_rong_bo_coi_huyen_tran";
import { chienTranhVoiCheBongNga } from "./resistance/chien_tranh_voi_che_bong_nga";

export const resistance: ResistancePhase = {
  overview: "Trang sử vàng chói lọi nhất của lịch sử quân sự Việt Nam với 3 lần đánh bại quân xâm lược Mông - Nguyên. Tuy nhiên, bên cạnh hào khí Đông A, dòng họ cũng có những kẻ phản bội bán nước (Trần Ích Tắc). Về sau, nhà Trần tiếp tục mở rộng bờ cõi về phía Nam qua hôn nhân chính trị (Huyền Trân Công Chúa), nhưng giai đoạn cuối lại chịu nhiều thất bại đau đớn trước Chiêm Thành.",
  foreign_resistance: [
    khangChienMongCo1,
    khangChienNguyen2,
    suKienTranIchTac,
    khangChienNguyen3,
    moRongBoCoiHuyenTran,
    chienTranhVoiCheBongNga
  ],
  domestic_uprisings: []
};