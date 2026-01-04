import { ResistancePhase } from "../../../types";
import { chongLuong } from "./resistance/chong_luong";
import { daTrach } from "./resistance/da_trach";
import { chongTuy } from "./resistance/chong_tuy";

export const resistance: ResistancePhase = {
  overview: "Cuộc kháng chiến chống quân Lương (Trần Bá Tiên) là cuộc đối đầu không cân sức. Điểm sáng chói lọi là chiến thuật du kích ở đầm Dạ Trạch của Triệu Quang Phục.",
  foreign_resistance: [
    chongLuong,
    daTrach,
    chongTuy
  ],
  domestic_uprisings: []
};