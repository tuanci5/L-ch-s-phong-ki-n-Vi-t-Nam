import { Dynasty } from "../types";
import { formation } from "./NhaNguyen/formation";
import { development } from "./NhaNguyen/development";
import { resistance } from "./NhaNguyen/resistance";
import { uprisings } from "./NhaNguyen/uprisings";
import { decline } from "./NhaNguyen/decline";

export const NhaNguyen: Dynasty = {
  name: "Nhà Nguyễn",
  period: "1802 - 1945",
  formation,
  development,
  resistance: { ...resistance, domestic_uprisings: uprisings },
  decline
};