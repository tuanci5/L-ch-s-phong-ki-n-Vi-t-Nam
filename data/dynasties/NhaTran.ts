import { Dynasty } from "../types";
import { formation } from "./NhaTran/formation";
import { development } from "./NhaTran/development";
import { resistance } from "./NhaTran/resistance";
import { uprisings } from "./NhaTran/uprisings";
import { decline } from "./NhaTran/decline";

export const NhaTran: Dynasty = {
  name: "Nhà Trần",
  period: "1226 - 1400",
  formation,
  development,
  resistance: { ...resistance, domestic_uprisings: uprisings },
  decline
};