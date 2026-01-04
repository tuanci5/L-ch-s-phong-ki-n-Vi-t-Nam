import { Dynasty } from "../types";
import { formation } from "./VanLangAuLac/formation";
import { development } from "./VanLangAuLac/development";
import { resistance } from "./VanLangAuLac/resistance";
import { uprisings } from "./VanLangAuLac/uprisings";
import { decline } from "./VanLangAuLac/decline";

export const VanLangAuLac: Dynasty = {
  name: "Văn Lang - Âu Lạc",
  period: "TK 7 TCN - 179 TCN",
  formation,
  development,
  resistance: { ...resistance, domestic_uprisings: uprisings },
  decline
};