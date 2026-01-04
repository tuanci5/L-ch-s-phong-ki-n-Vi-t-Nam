import { DevelopmentPhase } from "../../../types";
import { maiHacDe } from "./emperors/mai_hac_de";
import { maiThieuDe } from "./emperors/mai_thieu_de";
import { boCaiDaiVuong } from "./emperors/bo_cai_dai_vuong";
import { phungAn } from "./emperors/phung_an";

export const development: DevelopmentPhase = {
  overview: "Giai đoạn này chứng kiến sự hình thành của các chính quyền độc lập tự chủ tuy ngắn ngủi nhưng quy mô lớn, buộc nhà Đường phải điều động đại quân sang đối phó.",
  general_achievements: [
    "Mai Hắc Đế xây dựng thành Vạn An kiên cố, được coi là kinh đô kháng chiến.",
    "Phùng Hưng chiếm được thành Tống Bình, cai quản đất nước được 7 năm, chấn chỉnh việc chính sự."
  ],
  emperors: [
    maiHacDe,
    maiThieuDe,
    boCaiDaiVuong,
    phungAn
  ]
};