import { HistoricalEvent } from "../../../types";
import { vuAnLeChiVien } from "./uprisings/vu_an_le_chi_vien";
import { binhBienLeNghiDan } from "./uprisings/binh_bien_le_nghi_dan";
import { macDangDungCuopNgoi } from "./uprisings/mac_dang_dung_cuop_ngoi";

export const uprisings: HistoricalEvent[] = [
  vuAnLeChiVien,
  binhBienLeNghiDan,
  macDangDungCuopNgoi
];