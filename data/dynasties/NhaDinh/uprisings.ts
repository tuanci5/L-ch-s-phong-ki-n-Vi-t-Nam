import { HistoricalEvent } from "../../../types";
import { vuAmSatDinhTienHoang } from "./uprisings/vu_am_sat_dinh_tien_hoang";
import { pheChongDoiLeHoan } from "./uprisings/phe_chong_doi_le_hoan";

export const uprisings: HistoricalEvent[] = [
  vuAmSatDinhTienHoang,
  pheChongDoiLeHoan
];