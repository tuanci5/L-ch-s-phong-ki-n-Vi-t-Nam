import { Dynasty } from "../types";
import { formation } from "./KhoiNghiaBaTrieu/formation";
import { development } from "./KhoiNghiaBaTrieu/development";
import { resistance } from "./KhoiNghiaBaTrieu/resistance";
import { uprisings } from "./KhoiNghiaBaTrieu/uprisings";
import { decline } from "./KhoiNghiaBaTrieu/decline";

export const KhoiNghiaBaTrieu: Dynasty = {
  name: "Khởi nghĩa Bà Triệu",
  period: "Năm 248",
  formation,
  development,
  resistance: { ...resistance, domestic_uprisings: uprisings },
  decline
};