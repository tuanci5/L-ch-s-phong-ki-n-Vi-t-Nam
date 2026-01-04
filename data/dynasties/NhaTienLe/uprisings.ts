import { HistoricalEvent } from "../../../types";
import { depLoanCacChau } from "./uprisings/dep_loan_cac_chau";
import { loanCacHoangTu } from "./uprisings/loan_cac_hoang_tu";

export const uprisings: HistoricalEvent[] = [
  depLoanCacChau,
  loanCacHoangTu
];