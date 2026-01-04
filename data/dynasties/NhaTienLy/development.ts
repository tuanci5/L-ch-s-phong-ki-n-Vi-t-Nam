import { DevelopmentPhase } from "../../../types";
import { lyNamDe } from "./emperors/ly_nam_de";
import { daoLangVuong } from "./emperors/dao_lang_vuong";
import { trieuVietVuong } from "./emperors/trieu_viet_vuong";
import { hauLyNamDe } from "./emperors/hau_ly_nam_de";

export const development: DevelopmentPhase = {
  overview: "Nhà Tiền Lý là triều đại đầu tiên trong lịch sử Việt Nam chính thức đặt Quốc hiệu (Vạn Xuân), xưng Đế hiệu (Nam Đế) và đặt Niên hiệu (Thiên Đức), phủ nhận hoàn toàn quan điểm 'Giao Châu là một quận của Trung Quốc'. Dù diễn ra trong bối cảnh chiến tranh liên miên, nhà nước Vạn Xuân đã bước đầu xây dựng được bộ máy hành chính độc lập.",
  general_achievements: [
    "Chính trị: Đặt quốc hiệu Vạn Xuân (mong xã tắc bền vững muôn đời), dựng điện Vạn Thọ làm nơi triều hội, khẳng định vị thế độc lập.",
    "Tôn giáo: Cho xây chùa Khai Quốc (Mở nước) ở bãi sông Hồng (nay là chùa Trấn Quốc, Hà Nội), đánh dấu sự coi trọng Phật giáo và mong muốn quốc thái dân an.",
    "Hành chính: Lần đầu tiên thiết lập hai ban Văn - Võ. Tinh Thiều đứng đầu ban văn, Phạm Tu đứng đầu ban võ, Triệu Túc làm Thái phó. Đây là mô hình nhà nước quân chủ sơ khai.",
    "Quân sự: Sáng tạo nghệ thuật chiến tranh du kích (Triệu Quang Phục) tại đầm Dạ Trạch, trở thành tiền đề cho nghệ thuật quân sự Việt Nam sau này."
  ],
  emperors: [
    lyNamDe,
    daoLangVuong,
    trieuVietVuong,
    hauLyNamDe
  ]
};