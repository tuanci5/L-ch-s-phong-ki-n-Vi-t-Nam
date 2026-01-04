import { HistoricalEvent } from "../../../types";
import { duongTamKhaCuopNgoi } from "./uprisings/duong_tam_kha_cuop_ngoi";
import { daoChinhNgoXuongVan } from "./uprisings/dao_chinh_ngo_xuong_van";
import { loan12SuQuan } from "./uprisings/loan_12_su_quan";

export const uprisings: HistoricalEvent[] = [
  duongTamKhaCuopNgoi,
  daoChinhNgoXuongVan,
  loan12SuQuan
];