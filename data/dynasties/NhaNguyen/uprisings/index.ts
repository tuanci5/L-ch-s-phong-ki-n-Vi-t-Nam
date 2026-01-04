import { HistoricalEvent } from "../../../../types";
import { phanBaVanh } from "./phan_ba_vanh";
import { leVanKhoi } from "./le_van_khoi";
import { caoBaQuat } from "./cao_ba_quat";
import { loanChaiVoi } from "./loan_chai_voi";
import { yenThe } from "./yen_the";
import { cacKhoiNghiaKhac } from "./cac_cuoc_khoi_nghia_khac";
import { phongTraoCanVuong } from "./phong_trao_can_vuong";
import { cachMangHienDai } from "./cach_mang_hien_dai";

// Tổng quan về tình hình nội loạn
const tongQuan: HistoricalEvent = {
  year: "1802 - 1862 (Giai đoạn đầu)",
  name: "TỔNG QUAN: Nội chiến tiêu hao Quốc lực",
  opponent: "Triều đình nhà Nguyễn vs Nông dân & Các thế lực ly khai",
  description: "Theo thống kê của GS. Nguyễn Phan Quang trong tác phẩm 'Phong trào nông dân Việt Nam nửa đầu thế kỷ XIX', giai đoạn 1802-1862 nổ ra tới 454 cuộc khởi nghĩa (trong đó: thời Gia Long 73 cuộc, Minh Mạng 254 cuộc, Thiệu Trị 58 cuộc, Tự Đức 69 cuộc). Việc triều đình phải liên tục huy động đại quân và ngân khố khổng lồ để đi 'dẹp loạn' (tiêu biểu như dẹp loạn Lê Văn Khôi mất 3 năm, dẹp Nông Văn Vân phải đốt cả rừng) đã khiến QUỐC LỰC KIỆT QUỆ. Chính tình trạng 'nội công ngoại kích' này đã làm hệ thống phòng thủ quốc gia suy yếu tột độ, khiến Đại Nam không còn đủ sức kháng cự hiệu quả khi thực dân Pháp nổ súng xâm lược năm 1858.",
  outcome: "Sự bất ổn nội bộ kéo dài đã dọn đường cho sự sụp đổ trước ngoại bang."
};

// Gộp tất cả lại thành một mảng, sắp xếp theo trình tự thời gian tương đối
export const allUprisings: HistoricalEvent[] = [
  tongQuan,
  phanBaVanh,
  leVanKhoi,
  ...cacKhoiNghiaKhac.slice(0, 3), // Nông Văn Vân, Lê Duy Lương, Khmer
  caoBaQuat,
  ...cacKhoiNghiaKhac.slice(3, 5), // Tạ Văn Phụng, Cai Vàng
  loanChaiVoi,
  ...cacKhoiNghiaKhac.slice(5), // Man Sách
  ...phongTraoCanVuong,
  yenThe,
  ...cachMangHienDai
];