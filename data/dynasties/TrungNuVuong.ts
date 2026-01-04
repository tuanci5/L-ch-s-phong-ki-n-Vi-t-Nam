import { Dynasty } from "../types";
import { formation } from "./TrungNuVuong/formation";
import { development } from "./TrungNuVuong/development";
import { resistance } from "./TrungNuVuong/resistance";
import { uprisings } from "./TrungNuVuong/uprisings";
import { decline } from "./TrungNuVuong/decline";

export const TrungNuVuong: Dynasty = {
  name: "Trưng Nữ Vương",
  period: "40 - 43",
  formation,
  development,
  resistance: { ...resistance, domestic_uprisings: uprisings },
  decline
};