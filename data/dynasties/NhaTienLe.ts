import { Dynasty } from "../types";
import { formation } from "./NhaTienLe/formation";
import { development } from "./NhaTienLe/development";
import { resistance } from "./NhaTienLe/resistance";
import { uprisings } from "./NhaTienLe/uprisings";
import { decline } from "./NhaTienLe/decline";

export const NhaTienLe: Dynasty = {
  name: "Nhà Tiền Lê",
  period: "980 - 1009",
  formation,
  development,
  resistance: { ...resistance, domestic_uprisings: uprisings },
  decline
};