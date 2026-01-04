import { HistoricalEvent } from "../../../types";
import { loanTamVuong } from "./uprisings/loan_tam_vuong";
import { nungTriCaoNoiDay } from "./uprisings/nung_tri_cao_noi_day";

export const uprisings: HistoricalEvent[] = [
  loanTamVuong,
  nungTriCaoNoiDay
];