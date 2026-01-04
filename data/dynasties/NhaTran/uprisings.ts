import { HistoricalEvent } from "../../../types";
import { loanTranLieu } from "./uprisings/loan_tran_lieu";
import { khoiNghiaCuoiTran } from "./uprisings/khoi_nghia_cuoi_tran";

export const uprisings: HistoricalEvent[] = [
  loanTranLieu,
  khoiNghiaCuoiTran
];