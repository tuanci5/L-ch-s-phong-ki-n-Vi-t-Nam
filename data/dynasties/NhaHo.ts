import { Dynasty } from "../types";
import { formation } from "./NhaHo/formation";
import { development } from "./NhaHo/development";
import { resistance } from "./NhaHo/resistance";
import { uprisings } from "./NhaHo/uprisings";
import { decline } from "./NhaHo/decline";

export const NhaHo: Dynasty = {
  name: "Nhà Hồ",
  period: "1400 - 1407",
  formation,
  development,
  resistance: { ...resistance, domestic_uprisings: uprisings },
  decline
};