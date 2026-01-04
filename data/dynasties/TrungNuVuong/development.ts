import { DevelopmentPhase } from "../../../types";
import { trungTrac } from "./emperors/trung_trac";
import { trungNhi } from "./emperors/trung_nhi";

export const development: DevelopmentPhase = {
  overview: "Dù chỉ tồn tại ngắn ngủi (3 năm), nhưng chính quyền của Trưng Nữ Vương là một nhà nước độc lập tự chủ, đóng đô ở Mê Linh, thực hiện các chính sách khoan thư sức dân.",
  general_achievements: [
    "Xây dựng chính quyền độc lập tại Mê Linh.",
    "Xá thuế cho dân chúng trong 2 năm (miễn thuế khóa lao dịch).",
    "Khôi phục lại các giá trị văn hóa truyền thống của thời Hùng Vương."
  ],
  emperors: [
    trungTrac,
    trungNhi
  ]
};