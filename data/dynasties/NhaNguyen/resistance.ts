import { ResistancePhase } from "../../../types";
import { moRongLanhThoMinhMang } from "./resistance/mo_rong_lanh_tho_minh_mang";
import { tranDaNang } from "./resistance/tran_da_nang";
import { hoaUocNhamTuat } from "./resistance/hoa_uoc_nham_tuat";
import { matNamKyLucTinh } from "./resistance/mat_nam_ky_luc_tinh";
import { phapDanhBacKy } from "./resistance/phap_danh_bac_ky";
import { hoaUocPatenotre } from "./resistance/hoa_uoc_patenotre";
import { canVuongChongPhap } from "./resistance/can_vuong_chong_phap";

export const resistance: ResistancePhase = {
  overview: "Lịch sử quân sự nhà Nguyễn chia làm hai nửa đối lập. Giai đoạn đầu (Gia Long, Minh Mạng), Đại Nam hùng mạnh, mở mang bờ cõi rộng lớn nhất lịch sử (sáp nhập Campuchia, Lào). Giai đoạn sau (Tự Đức trở đi), trước sự xâm lược của Pháp, triều đình trượt dài từ sai lầm chiến lược 'thủ hiểm' đến tư tưởng 'chủ hòa', liên tiếp ký các hòa ước cắt đất (Nam Kỳ) và cuối cùng là dâng trọn quyền độc lập dân tộc (Hòa ước Patenôtre), biến mình thành tay sai cho ngoại bang.",
  foreign_resistance: [
    moRongLanhThoMinhMang,
    tranDaNang,
    hoaUocNhamTuat,
    matNamKyLucTinh,
    phapDanhBacKy,
    hoaUocPatenotre,
    canVuongChongPhap
  ],
  domestic_uprisings: []
};