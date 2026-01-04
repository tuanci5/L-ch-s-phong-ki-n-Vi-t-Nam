import { ResistancePhase } from "../../../types";
import { daiPhaChiemThanh } from "./resistance/dai_pha_chiem_thanh";
import { chinhPhatBonMan } from "./resistance/chinh_phat_bon_man";
import { macDangDungCatDat } from "./resistance/mac_dang_dung_cat_dat";
import { leChieuThongCauVien } from "./resistance/le_chieu_thong_cau_vien";

export const resistance: ResistancePhase = {
  overview: "Giai đoạn Lê Sơ (đặc biệt là thời Lê Thánh Tông) đánh dấu đỉnh cao của sức mạnh quân sự Đại Việt với những chiến công mở mang bờ cõi rực rỡ về phía Nam và phía Tây (sáp nhập đất Chiêm Thành, Bồn Man). Tuy nhiên, giai đoạn cuối của triều đại lại chứng kiến những trang sử đen tối khi các thế lực cầm quyền (Mạc Đăng Dung, Lê Chiêu Thống) vì lợi ích riêng mà cam tâm cắt đất, bán nước cho phong kiến phương Bắc.",
  foreign_resistance: [
    daiPhaChiemThanh,
    chinhPhatBonMan,
    macDangDungCatDat,
    leChieuThongCauVien
  ],
  domestic_uprisings: []
};