import { Dynasty } from "../types";
import { formation } from "./MaiHacDePhungHung/formation";
import { development } from "./MaiHacDePhungHung/development";
import { resistance } from "./MaiHacDePhungHung/resistance";
import { uprisings } from "./MaiHacDePhungHung/uprisings";
import { decline } from "./MaiHacDePhungHung/decline";

export const MaiHacDePhungHung: Dynasty = {
  name: "Mai Hắc Đế & Phùng Hưng",
  period: "713 - 791",
  formation,
  development,
  resistance: { ...resistance, domestic_uprisings: uprisings },
  decline
};