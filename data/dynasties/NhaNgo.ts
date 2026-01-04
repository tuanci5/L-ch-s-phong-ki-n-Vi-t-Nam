import { Dynasty } from "../types";
import { formation } from "./NhaNgo/formation";
import { development } from "./NhaNgo/development";
import { resistance } from "./NhaNgo/resistance";
import { uprisings } from "./NhaNgo/uprisings";
import { decline } from "./NhaNgo/decline";

export const NhaNgo: Dynasty = {
  name: "Nhà Ngô",
  period: "939 - 965",
  formation,
  development,
  resistance: { ...resistance, domestic_uprisings: uprisings },
  decline
};