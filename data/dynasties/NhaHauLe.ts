import { Dynasty } from "../types";
import { formation } from "./NhaHauLe/formation";
import { development } from "./NhaHauLe/development";
import { resistance } from "./NhaHauLe/resistance";
import { uprisings } from "./NhaHauLe/uprisings";
import { decline } from "./NhaHauLe/decline";

export const NhaHauLe: Dynasty = {
  name: "Nhà Hậu Lê",
  period: "1428 - 1789",
  formation,
  development,
  resistance: { ...resistance, domestic_uprisings: uprisings },
  decline
};