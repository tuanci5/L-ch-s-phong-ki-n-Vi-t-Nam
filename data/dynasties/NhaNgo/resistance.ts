import { ResistancePhase } from "../../../types";
import { khangChienChongNamHan } from "./resistance/khang_chien_chong_nam_han";
import { ngoaiGiaoChanGiac } from "./resistance/ngoai_giao_chan_giac";

export const resistance: ResistancePhase = {
  overview: "Giai đoạn nhà Ngô tập trung chủ yếu vào nhiệm vụ 'Giữ nước' để bảo vệ thành quả độc lập non trẻ sau 1000 năm Bắc thuộc. Tuy chưa có điều kiện để thực hiện các cuộc viễn chinh 'Mở mang bờ cõi' quy mô lớn như các triều đại sau, nhưng Ngô Quyền và các con đã thực hiện xuất sắc việc chặn đứng dã tâm xâm lược của phương Bắc bằng cả quân sự (trận Bạch Đằng) và ngoại giao.",
  foreign_resistance: [
    khangChienChongNamHan,
    ngoaiGiaoChanGiac
  ],
  domestic_uprisings: []
};