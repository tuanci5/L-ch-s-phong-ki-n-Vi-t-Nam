import { ResistancePhase } from "../../../types";
import { maiHacDeChongDuong } from "./resistance/mai_hac_de_chong_duong";
import { phungAnChongTrieuXuong } from "./resistance/phung_an_chong_trieu_xuong";

export const resistance: ResistancePhase = {
  overview: "Các cuộc đối đầu trực diện với quân đội chính quy nhà Đường.",
  foreign_resistance: [
    maiHacDeChongDuong,
    phungAnChongTrieuXuong
  ],
  domestic_uprisings: []
};