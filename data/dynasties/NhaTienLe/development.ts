import { DevelopmentPhase } from "../../../types";
import { leDaiHanh } from "./emperors/le_dai_hanh";
import { leTrungTong } from "./emperors/le_trung_tong";
import { leNgoaTrieu } from "./emperors/le_ngoa_trieu";

export const development: DevelopmentPhase = {
  overview: "Nhà Tiền Lê tuy ngắn (29 năm) nhưng đã củng cố vững chắc nền độc lập, đánh bại Tống, bình Chiêm, và đặc biệt chú trọng phát triển kinh tế nông nghiệp, giao thông vận tải (đào sông).",
  general_achievements: [
    "Kinh tế: Vua Lê Đại Hành là người đầu tiên tổ chức lễ 'Tịch điền' (đích thân vua đi cày) để khuyến khích nông nghiệp.",
    "Giao thông: Cho đào nhiều kênh ngòi (Kênh nhà Lê) để thuận tiện cho việc vận chuyển quân lương và tưới tiêu.",
    "Ngoại giao: Thực hiện chính sách ngoại giao mềm dẻo 'trong xưng Đế, ngoài xưng Vương' với nhà Tống để giữ hòa hiếu."
  ],
  emperors: [
    leDaiHanh,
    leTrungTong,
    leNgoaTrieu
  ]
};