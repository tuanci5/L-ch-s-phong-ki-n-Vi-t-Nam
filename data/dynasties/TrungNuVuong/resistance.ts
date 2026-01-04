import { ResistancePhase } from "../../../types";
import { maVienXamLuoc } from "./resistance/ma_vien_xam_luoc";
import { tranCamKhe } from "./resistance/tran_cam_khe";

export const resistance: ResistancePhase = {
  overview: "Cuộc đối đầu không cân sức với danh tướng Mã Viện của nhà Đông Hán - một đế chế hùng mạnh bậc nhất thế giới lúc bấy giờ.",
  foreign_resistance: [
    maVienXamLuoc,
    tranCamKhe
  ],
  domestic_uprisings: []
};