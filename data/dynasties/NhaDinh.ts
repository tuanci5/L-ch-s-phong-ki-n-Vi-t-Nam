import { Dynasty } from "../types";
import { formation } from "./NhaDinh/formation";
import { development } from "./NhaDinh/development";
import { resistance } from "./NhaDinh/resistance";
import { uprisings } from "./NhaDinh/uprisings";
import { decline } from "./NhaDinh/decline";

export const NhaDinh: Dynasty = {
  name: "Nhà Đinh",
  period: "968 - 980",
  formation,
  development,
  resistance: { ...resistance, domestic_uprisings: uprisings },
  decline
};