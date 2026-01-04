import { Dynasty } from "../types";
import { formation } from "./NhaLy/formation";
import { development } from "./NhaLy/development";
import { resistance } from "./NhaLy/resistance";
import { uprisings } from "./NhaLy/uprisings";
import { decline } from "./NhaLy/decline";

export const NhaLy: Dynasty = {
  name: "Nhà Lý",
  period: "1009 - 1225",
  formation,
  development,
  resistance: { ...resistance, domestic_uprisings: uprisings },
  decline
};