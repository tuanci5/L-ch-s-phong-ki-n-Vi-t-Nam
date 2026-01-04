import { Dynasty } from "../types";
import { formation } from "./NhaTaySon/formation";
import { development } from "./NhaTaySon/development";
import { resistance } from "./NhaTaySon/resistance";
import { uprisings } from "./NhaTaySon/uprisings";
import { decline } from "./NhaTaySon/decline";

export const NhaTaySon: Dynasty = {
  name: "Nhà Tây Sơn",
  period: "1778 - 1802",
  formation,
  development,
  resistance: { ...resistance, domestic_uprisings: uprisings },
  decline
};