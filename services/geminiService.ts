import { GoogleGenAI, Type } from "@google/genai";
import { Dynasty } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Hàm này chỉ tải chi tiết cho MỘT triều đại cụ thể
export const fetchDynastyDetail = async (name: string, period: string): Promise<Dynasty> => {
  const prompt = `
    Phân tích chi tiết triều đại: ${name} (Giai đoạn: ${period}) trong lịch sử Việt Nam.
    
    Hãy phân tích sâu 3 giai đoạn:
    
    1. Giai đoạn Hình thành (Rất quan trọng): 
       - Bối cảnh lịch sử: Tình hình rối ren trước đó dẫn đến sự ra đời.
       - Tính kế thừa: Sự chuyển giao quyền lực.
       - Nguyên nhân thành công: Tại sao lực lượng này thắng lợi.
       - Các sự kiện hình thành (Actions): Liệt kê chi tiết mốc thời gian.
       - NẾU LÀ NHÀ TÂY SƠN: Tập trung vào khởi nghĩa nông dân, lật đổ 2 tập đoàn phong kiến Trịnh - Nguyễn và đánh đuổi ngoại xâm (Xiêm, Thanh).
       - NẾU LÀ NHÀ NGUYỄN: Tập trung vào hành trình của Nguyễn Ánh, cầu viện Xiêm, Pháp, trận Thị Nại.

    2. Giai đoạn Phát triển:
       - Tổng quan sự thịnh trị.
       - Thành tựu chung (kinh tế, văn hóa, luật pháp).
       - DANH SÁCH VUA (Emperors): Liệt kê các vua tiêu biểu. Với mỗi vua cần: Tên, Niên hiệu, Thành tựu, Công/Tội, và các Tranh cãi lịch sử.

    3. Suy vong: Nguyên nhân sụp đổ cụ thể.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            // Lưu ý: Schema trả về trực tiếp đối tượng Dynasty, không bọc trong mảng dynasties nữa
            name: { type: Type.STRING },
            period: { type: Type.STRING },
            formation: {
              type: Type.OBJECT,
              properties: {
                context: { type: Type.STRING, description: "Bối cảnh lịch sử" },
                inheritance: { type: Type.STRING },
                details: { type: Type.STRING },
                success_factors: { type: Type.ARRAY, items: { type: Type.STRING } },
                actions: { 
                  type: Type.ARRAY, 
                  items: { 
                    type: Type.OBJECT,
                    properties: {
                      title: { type: Type.STRING },
                      description: { type: Type.STRING },
                      references: { type: Type.ARRAY, items: { type: Type.STRING } }
                    },
                    required: ["title", "description", "references"]
                  }, 
                }
              },
              required: ["context", "inheritance", "details", "success_factors", "actions"],
            },
            development: { 
              type: Type.OBJECT,
              properties: {
                overview: { type: Type.STRING },
                general_achievements: { type: Type.ARRAY, items: { type: Type.STRING } },
                emperors: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      name: { type: Type.STRING },
                      reign_period: { type: Type.STRING },
                      achievements: { type: Type.ARRAY, items: { type: Type.STRING } },
                      merits_and_faults: { type: Type.STRING },
                      controversies: { type: Type.ARRAY, items: { type: Type.STRING } }
                    },
                    required: ["name", "reign_period", "achievements", "merits_and_faults", "controversies"]
                  }
                }
              },
              required: ["overview", "general_achievements", "emperors"]
            },
            decline: { type: Type.STRING },
          },
          required: ["name", "period", "formation", "development", "decline"],
        },
      },
    });

    const jsonText = response.text;
    if (!jsonText) {
      throw new Error("No data returned from Gemini");
    }

    return JSON.parse(jsonText) as Dynasty;
  } catch (error) {
    console.error(`Error fetching data for ${name}:`, error);
    throw error;
  }
};