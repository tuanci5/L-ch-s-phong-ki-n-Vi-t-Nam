import { ResistancePhase } from "../../../types";
import { khangChienChongTan } from "./resistance/khang_chien_chong_tan";
import { khangChienChongTrieuDa } from "./resistance/khang_chien_chong_trieu_da";

export const resistance: ResistancePhase = {
  overview: "Nhân dân Âu Lạc đã kiên cường chống lại các cuộc xâm lược từ phương Bắc ngay từ buổi đầu dựng nước.",
  foreign_resistance: [
    khangChienChongTan,
    khangChienChongTrieuDa
  ],
  domestic_uprisings: []
};