import { DevelopmentPhase } from "../../../types";
import { hoQuyLy } from "./emperors/ho_quy_ly";
import { hoHanThuong } from "./emperors/ho_han_thuong";

export const development: DevelopmentPhase = {
  overview: "Dù chỉ tồn tại 7 năm (1400 - 1407), nhà Hồ đã thực hiện hàng loạt cải cách kinh tế, xã hội, quân sự táo bạo đi trước thời đại, nhằm xây dựng một nhà nước trung ương tập quyền mạnh mẽ và tăng cường quốc phòng.",
  general_achievements: [
    "Kinh tế: Phát hành tiền giấy 'Thông bảo hội sao' đầu tiên trong lịch sử Việt Nam, thực hiện chính sách 'Hạn nô' (hạn chế nô tì) và 'Hạn điền' (hạn chế ruộng đất tư) để đánh vào thế lực đại địa chủ.",
    "Quân sự: Chế tạo súng Thần cơ (Hồ Nguyên Trừng) - loại súng đại bác tân tiến nhất khu vực lúc bấy giờ, đóng tàu chiến lớn (Cổ lâu thuyền) hai tầng.",
    "Kiến trúc: Xây dựng Thành nhà Hồ (Tây Đô) bằng đá khối khổng lồ, kỹ thuật ghép đá độc đáo duy nhất ở Đông Nam Á (Di sản văn hóa thế giới).",
    "Giáo dục: Đưa toán học vào thi cử, dịch sách chữ Hán sang chữ Nôm để chấn hưng văn hóa dân tộc."
  ],
  emperors: [
    hoQuyLy,
    hoHanThuong
  ]
};