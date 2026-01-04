import { Dynasty } from "../types";
import { formation } from "./ThoiKyTuChu/formation";
import { development } from "./ThoiKyTuChu/development";
import { resistance } from "./ThoiKyTuChu/resistance";
import { uprisings } from "./ThoiKyTuChu/uprisings";
import { decline } from "./ThoiKyTuChu/decline";

export const ThoiKyTuChu: Dynasty = {
  name: "Họ Khúc & Họ Dương",
  period: "905 - 938",
  formation,
  development,
  resistance: { ...resistance, domestic_uprisings: uprisings },
  decline
};