import { Dynasty } from "../types";
import { formation } from "./NhaTienLy/formation";
import { development } from "./NhaTienLy/development";
import { resistance } from "./NhaTienLy/resistance";
import { uprisings } from "./NhaTienLy/uprisings";
import { decline } from "./NhaTienLy/decline";

export const NhaTienLy: Dynasty = {
  name: "Nhà Tiền Lý",
  period: "544 - 602",
  formation,
  development,
  resistance: { ...resistance, domestic_uprisings: uprisings },
  decline
};