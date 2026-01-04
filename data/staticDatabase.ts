import { Dynasty } from "../types";
import { NhaHauLe } from "./dynasties/NhaHauLe";
import { NhaTaySon } from "./dynasties/NhaTaySon";
import { NhaNguyen } from "./dynasties/NhaNguyen";
import { NhaNgo } from "./dynasties/NhaNgo";
import { NhaDinh } from "./dynasties/NhaDinh";
import { NhaTienLe } from "./dynasties/NhaTienLe";
import { NhaLy } from "./dynasties/NhaLy";
import { NhaTran } from "./dynasties/NhaTran";
import { NhaHo } from "./dynasties/NhaHo";
import { VanLangAuLac } from "./dynasties/VanLangAuLac";
import { NhaTienLy } from "./dynasties/NhaTienLy";
import { ThoiKyTuChu } from "./dynasties/ThoiKyTuChu";
import { TrungNuVuong } from "./dynasties/TrungNuVuong";
import { KhoiNghiaBaTrieu } from "./dynasties/KhoiNghiaBaTrieu";
import { MaiHacDePhungHung } from "./dynasties/MaiHacDePhungHung";

export const STATIC_HISTORY_DATA: Record<string, Dynasty> = {
  "Văn Lang - Âu Lạc": VanLangAuLac,
  "Trưng Nữ Vương": TrungNuVuong,
  "Khởi nghĩa Bà Triệu": KhoiNghiaBaTrieu,
  "Nhà Tiền Lý": NhaTienLy,
  "Mai Hắc Đế & Phùng Hưng": MaiHacDePhungHung,
  "Họ Khúc & Họ Dương": ThoiKyTuChu,
  "Nhà Ngô": NhaNgo,
  "Nhà Đinh": NhaDinh,
  "Nhà Tiền Lê": NhaTienLe,
  "Nhà Lý": NhaLy,
  "Nhà Trần": NhaTran,
  "Nhà Hồ": NhaHo,
  "Nhà Hậu Lê": NhaHauLe,
  "Nhà Tây Sơn": NhaTaySon,
  "Nhà Nguyễn": NhaNguyen
};