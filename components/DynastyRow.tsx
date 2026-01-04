import React, { useState } from 'react';
import { Dynasty, HistoricalEvent } from '../types';

interface DynastyRowProps {
  dynasty: Dynasty;
  isLast: boolean;
}

export const DynastyRow: React.FC<DynastyRowProps> = ({ dynasty, isLast }) => {
  const [showFormationModal, setShowFormationModal] = useState(false);
  const [showDevelopmentModal, setShowDevelopmentModal] = useState(false);
  
  // State for accordions
  const [expandedActionIndex, setExpandedActionIndex] = useState<number | null>(null);
  const [expandedEmperorIndex, setExpandedEmperorIndex] = useState<number | null>(null);

  const toggleAction = (index: number) => {
    setExpandedActionIndex(expandedActionIndex === index ? null : index);
  };

  const toggleEmperor = (index: number) => {
    setExpandedEmperorIndex(expandedEmperorIndex === index ? null : index);
  };

  const cleanAssessment = (text: string) => {
    if (!text) return "";
    return text.replace(/(?:[.,;]\s*)?Tội:\s*Không có\.?/gi, "").trim();
  };

  // Hàm kiểm tra sự kiện mở rộng lãnh thổ (thắng thêm đất, sáp nhập) -> Màu Xanh
  const isExpansionEvent = (event: HistoricalEvent) => {
    const textToCheck = (event.name + " " + event.description + " " + event.outcome).toLowerCase();
    const positiveKeywords = [
      "sáp nhập", "mở rộng lãnh thổ", "mở mang bờ cõi", "dâng châu", "lấy lại", 
      "thu phục", "bình chiêm", "đại phá chiêm", "mở cõi", "chiếm lại", "giành lại"
    ];
    return positiveKeywords.some(keyword => textToCheck.includes(keyword));
  };

  // Hàm kiểm tra sự kiện tiêu cực (bán nước, cắt đất, đầu hàng, mất đất) -> Màu Đỏ
  const isNegativeEvent = (event: HistoricalEvent) => {
    const textToCheck = (event.name + " " + event.description + " " + event.outcome).toLowerCase();
    const negativeKeywords = [
      "cắt đất", "nhượng", "bán nước", "cầu viện", "rước voi", "đầu hàng", 
      "thất bại hoàn toàn", "mất nước", "lệ thuộc", "bù nhìn", "hàng giặc",
      "thất thủ", "chiếm mất", "mất 3 tỉnh", "mất 6 tỉnh"
    ];
    // Loại trừ trường hợp "thất bại" của địch (ví dụ: địch thất bại hoàn toàn)
    if (textToCheck.includes("địch thất bại") || textToCheck.includes("giặc thất bại")) return false;
    
    return negativeKeywords.some(keyword => textToCheck.includes(keyword));
  };

  return (
    <div className={`mb-16 ${!isLast ? 'border-b-4 border-stone-200 pb-16' : ''}`}>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-l-8 border-amber-700 pl-6">
        <div>
          <h2 className="text-4xl font-bold text-stone-800 font-serif">{dynasty.name}</h2>
          <span className="text-amber-800 font-bold text-xl mt-2 inline-block bg-amber-100/80 px-4 py-1 rounded-lg border border-amber-200">
            {dynasty.period}
          </span>
        </div>
      </div>

      {/* Main Grid: Formation - Development - Decline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Column 1: Formation */}
        <div 
          onClick={() => setShowFormationModal(true)}
          className="bg-emerald-50/60 rounded-xl p-6 border border-emerald-100 hover:shadow-xl transition-all duration-300 cursor-pointer group relative hover:bg-emerald-100/50 hover:-translate-y-1"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-emerald-900 uppercase tracking-wide">Hình thành</h3>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm line-clamp-4 font-medium">
            {dynasty.formation.details}
          </p>
          <p className="text-emerald-600 text-xs mt-3 font-bold uppercase tracking-wider group-hover:underline">
            Xem chi tiết &rarr;
          </p>
        </div>

        {/* Column 2: Development */}
        <div 
          onClick={() => setShowDevelopmentModal(true)}
          className="bg-sky-50/60 rounded-xl p-6 border border-sky-100 hover:shadow-xl transition-all duration-300 cursor-pointer group relative hover:bg-sky-100/50 hover:-translate-y-1"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.28m5.94 2.28-4.277 4.277" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-sky-900 uppercase tracking-wide">Phát triển</h3>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm line-clamp-4 font-medium">
            {dynasty.development.overview}
          </p>
          <p className="text-sky-600 text-xs mt-3 font-bold uppercase tracking-wider group-hover:underline">
            Danh sách Vua & Thành tựu &rarr;
          </p>
        </div>

        {/* Column 3: Decline */}
        <div className="bg-rose-50/60 rounded-xl p-6 border border-rose-100 hover:shadow-md transition-all duration-300 hover:bg-rose-100/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 5.102l1.08-1.58m0 0-6.15-2.25m6.15 2.25-1.5 5.85" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-rose-900 uppercase tracking-wide">Suy vong</h3>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm font-medium">
            {dynasty.decline}
          </p>
        </div>
      </div>

      {/* --- NEW SECTION: RESISTANCE & UPRISINGS --- */}
      <div className="bg-amber-50/50 rounded-2xl p-6 md:p-8 border border-amber-100/80 shadow-sm">
        <h3 className="text-2xl font-bold text-amber-900 font-serif mb-6 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
          </svg>
          Biến động Lịch sử & Quân sự
        </h3>
        
        {dynasty.resistance.overview && (
          <p className="text-stone-700 italic mb-6 border-l-4 border-amber-300 pl-4 py-1">
            "{dynasty.resistance.overview}"
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Foreign Resistance */}
          <div>
            <h4 className="font-bold text-orange-800 uppercase text-sm mb-4 border-b border-orange-200 pb-2 flex items-center justify-between">
              <span>Chống Ngoại xâm & Mở mang bờ cõi</span>
              <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-xs">{dynasty.resistance.foreign_resistance.length} sự kiện</span>
            </h4>
            {dynasty.resistance.foreign_resistance.length > 0 ? (
              <ul className="space-y-4">
                {dynasty.resistance.foreign_resistance.map((event, i) => {
                  const isBad = isNegativeEvent(event);
                  const isGood = isExpansionEvent(event);
                  
                  // Xác định style dựa trên loại sự kiện
                  // Mặc định (Neutral/Defense success): Trắng viền cam
                  let containerClass = "bg-white border-orange-100 hover:border-orange-300";
                  let titleClass = "text-orange-900";
                  let badgeClass = "text-emerald-700 bg-emerald-50";

                  if (isBad) {
                    // Sự kiện tiêu cực (Mất đất, bán nước): Đỏ
                    containerClass = "bg-red-50 border-red-200 hover:border-red-400";
                    titleClass = "text-red-900";
                    badgeClass = "text-red-700 bg-red-100";
                  } else if (isGood) {
                    // Sự kiện tích cực (Mở rộng lãnh thổ, sáp nhập): Xanh Emerald
                    containerClass = "bg-emerald-50 border-emerald-200 hover:border-emerald-400";
                    titleClass = "text-emerald-900";
                    badgeClass = "text-emerald-700 bg-emerald-100";
                  }

                  return (
                    <li key={i} className={`p-4 rounded-lg shadow-sm border transition-colors ${containerClass}`}>
                      <div className="flex justify-between items-start mb-1">
                        <span className={`font-bold ${titleClass}`}>{event.name}</span>
                        <span className="text-xs font-mono bg-stone-100 px-2 py-1 rounded text-stone-600">{event.year}</span>
                      </div>
                      <div className="text-xs text-stone-500 mb-2 font-medium">Đối thủ: {event.opponent}</div>
                      <p className="text-sm text-stone-700 mb-2">{event.description}</p>
                      <div className={`text-xs font-bold inline-block px-2 py-1 rounded ${badgeClass}`}>
                        Kết quả: {event.outcome}
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-stone-500 italic text-sm">Giai đoạn này hòa bình, ít biến động ngoại xâm lớn.</p>
            )}
          </div>

          {/* Domestic Uprisings */}
          <div>
            <h4 className="font-bold text-red-800 uppercase text-sm mb-4 border-b border-red-200 pb-2 flex items-center justify-between">
              <span>Nội loạn & Khởi nghĩa</span>
              <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs">{dynasty.resistance.domestic_uprisings.length} sự kiện</span>
            </h4>
            {dynasty.resistance.domestic_uprisings.length > 0 ? (
              <ul className="space-y-4">
                {dynasty.resistance.domestic_uprisings.map((event, i) => {
                  return (
                    <li key={i} className="bg-white p-4 rounded-lg shadow-sm border border-red-100 hover:border-red-300 transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-bold text-red-900">{event.name}</span>
                        <span className="text-xs font-mono bg-stone-100 px-2 py-1 rounded text-stone-600">{event.year}</span>
                      </div>
                      <div className="text-xs text-stone-500 mb-2 font-medium">Phe/Người khởi xướng: {event.opponent}</div>
                      <p className="text-sm text-stone-700 mb-2">{event.description}</p>
                      <div className="text-xs font-bold text-stone-600 bg-stone-100 inline-block px-2 py-1 rounded">
                        Kết quả: {event.outcome}
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-stone-500 italic text-sm">Nội bộ tương đối ổn định.</p>
            )}
          </div>
        </div>
      </div>

      {/* --- MODALS (Formation & Development) --- */}
      {showFormationModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowFormationModal(false)}
        >
          <div 
            className="bg-[#fdfbf7] rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden flex flex-col max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-emerald-800 p-6 flex justify-between items-start shrink-0">
              <div>
                <h3 className="text-2xl font-bold text-white font-serif">Sự kiện hình thành</h3>
                <p className="text-emerald-100 text-sm mt-1">{dynasty.name} ({dynasty.period})</p>
              </div>
              <button onClick={() => setShowFormationModal(false)} className="text-emerald-200 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto custom-scrollbar space-y-6">
              {dynasty.formation.context && (
                <div className="relative pl-6 border-l-4 border-stone-300">
                  <p className="text-xs uppercase font-bold text-stone-500 mb-2">Bối cảnh lịch sử</p>
                  <p className="text-stone-800 text-lg font-serif italic leading-relaxed">"{dynasty.formation.context}"</p>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                  <p className="text-xs uppercase font-bold text-emerald-600 mb-2">Tính kế thừa</p>
                  <p className="text-stone-700 text-sm font-medium">{dynasty.formation.inheritance}</p>
                </div>
                {dynasty.formation.success_factors && dynasty.formation.success_factors.length > 0 && (
                   <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm">
                    <p className="text-xs uppercase font-bold text-amber-600 mb-2">Yếu tố thành công</p>
                    <ul className="list-disc pl-4 space-y-1">
                      {dynasty.formation.success_factors.map((factor, i) => (
                        <li key={i} className="text-stone-700 text-sm">{factor}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="border-t border-stone-200 my-2"></div>
              <div>
                <h4 className="text-lg font-bold text-stone-800 mb-4">Các mốc sự kiện quan trọng</h4>
                <ul className="space-y-0 relative border-l-2 border-emerald-200 ml-3">
                  {dynasty.formation.actions && dynasty.formation.actions.length > 0 ? (
                    dynasty.formation.actions.map((action, idx) => {
                      const isExpanded = expandedActionIndex === idx;
                      return (
                        <li key={idx} className="pl-8 pb-8 relative last:pb-0">
                          <span className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 box-content transition-colors duration-300 ${isExpanded ? 'bg-emerald-600 border-emerald-200' : 'bg-[#fdfbf7] border-emerald-500'}`}></span>
                          <div onClick={() => toggleAction(idx)} className={`bg-white rounded-lg shadow-sm border transition-all duration-300 cursor-pointer overflow-hidden ${isExpanded ? 'border-emerald-500 ring-2 ring-emerald-100' : 'border-stone-200 hover:border-emerald-300'}`}>
                            <div className="p-4 flex justify-between items-start gap-3">
                              <h5 className={`font-bold text-base md:text-lg ${isExpanded ? 'text-emerald-800' : 'text-stone-700'}`}>{action.title}</h5>
                              <span className={`transition-transform duration-300 text-stone-400 ${isExpanded ? 'rotate-180' : ''}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></span>
                            </div>
                            {isExpanded && (
                              <div className="p-4 pt-0 border-t border-dashed border-stone-200 mt-2">
                                <p className="text-stone-700 text-sm mb-4 bg-stone-50 p-3 rounded-md">{action.description}</p>
                                {action.references && action.references.length > 0 && (
                                  <div className="mt-3"><p className="text-xs uppercase font-bold text-stone-500 mb-2">Tài liệu tham khảo</p><ul className="list-disc pl-5 space-y-1">{action.references.map((ref, refIdx) => (<li key={refIdx} className="text-xs md:text-sm text-stone-600 italic">{ref}</li>))}</ul></div>
                                )}
                              </div>
                            )}
                          </div>
                        </li>
                      );
                    })
                  ) : (<li className="pl-6 text-stone-500 italic">Chưa có thông tin sự kiện chi tiết.</li>)}
                </ul>
              </div>
            </div>
            <div className="p-4 bg-stone-100 border-t border-stone-200 flex justify-end shrink-0">
              <button onClick={() => setShowFormationModal(false)} className="px-5 py-2 bg-white hover:bg-stone-50 text-stone-700 border border-stone-300 rounded-lg font-medium transition-colors shadow-sm">Đóng</button>
            </div>
          </div>
        </div>
      )}

      {/* --- DEVELOPMENT MODAL --- */}
      {showDevelopmentModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowDevelopmentModal(false)}
        >
          <div 
            className="bg-[#fdfbf7] rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-sky-800 p-6 flex justify-between items-start shrink-0">
              <div>
                <h3 className="text-2xl font-bold text-white font-serif">Giai đoạn Phát triển</h3>
                <p className="text-sky-100 text-sm mt-1">{dynasty.name} ({dynasty.period})</p>
              </div>
              <button onClick={() => setShowDevelopmentModal(false)} className="text-sky-200 hover:text-white">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto custom-scrollbar space-y-8">
              <div><p className="text-stone-800 text-lg leading-relaxed font-serif">{dynasty.development.overview}</p></div>
               {dynasty.development.general_achievements && dynasty.development.general_achievements.length > 0 && (
                <div className="bg-sky-50 p-5 rounded-xl border border-sky-100">
                  <h4 className="text-sky-800 font-bold mb-3 text-lg">Thành tựu chung</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {dynasty.development.general_achievements.map((ach, i) => (<li key={i} className="flex items-start gap-2"><span className="text-sky-500 font-bold">✓</span><span className="text-stone-700 text-sm">{ach}</span></li>))}
                  </ul>
                </div>
               )}

              <div>
                <h4 className="text-stone-800 font-bold mb-4 text-xl border-b-2 border-stone-200 pb-2">Các vị vua và Sự kiện chi tiết</h4>
                <div className="space-y-4">
                  {dynasty.development.emperors && dynasty.development.emperors.length > 0 ? (
                    dynasty.development.emperors.map((emperor, idx) => {
                      const isExpanded = expandedEmperorIndex === idx;
                      return (
                        <div key={idx} className={`rounded-xl border transition-all duration-300 overflow-hidden ${isExpanded ? 'border-sky-500 shadow-md bg-white' : 'border-stone-200 bg-white hover:border-sky-300'}`}>
                          <div onClick={() => toggleEmperor(idx)} className={`p-4 flex items-center justify-between cursor-pointer ${isExpanded ? 'bg-sky-50' : 'bg-white'}`}>
                            <div className="flex items-center gap-3">
                               <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${isExpanded ? 'bg-sky-200 text-sky-800' : 'bg-stone-100 text-stone-600'}`}>{idx + 1}</div>
                               <div><h5 className={`font-bold text-lg ${isExpanded ? 'text-sky-800' : 'text-stone-800'}`}>{emperor.name}</h5><p className="text-xs text-stone-500 font-mono">{emperor.reign_period}</p></div>
                            </div>
                            <span className={`transition-transform duration-300 text-stone-400 ${isExpanded ? 'rotate-180' : ''}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></span>
                          </div>
                          {isExpanded && (
                            <div className="p-5 border-t border-stone-100 space-y-5">
                              <div><p className="text-xs uppercase font-bold text-emerald-600 mb-2">Thành tựu</p><ul className="list-disc pl-5 space-y-1">{emperor.achievements.map((ach, i) => (<li key={i} className="text-stone-700 text-sm">{ach}</li>))}</ul></div>
                              <div className="bg-stone-50 p-3 rounded-lg border border-stone-100"><p className="text-xs uppercase font-bold text-stone-600 mb-2">Nhận định lịch sử</p><p className="text-stone-700 text-sm leading-relaxed">{cleanAssessment(emperor.merits_and_faults)}</p></div>
                              {emperor.controversies && emperor.controversies.length > 0 && (<div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200"><p className="text-xs uppercase font-bold text-yellow-700 mb-2">Tranh cãi</p><ul className="list-disc pl-5 space-y-1">{emperor.controversies.map((con, i) => (<li key={i} className="text-stone-800 text-sm italic">{con}</li>))}</ul></div>)}
                            </div>
                          )}
                        </div>
                      );
                    })
                  ) : (<div className="text-stone-500 italic text-center p-4">Chưa có thông tin.</div>)}
                </div>
              </div>
            </div>
            <div className="p-4 bg-stone-100 border-t border-stone-200 flex justify-end shrink-0">
              <button onClick={() => setShowDevelopmentModal(false)} className="px-5 py-2 bg-white hover:bg-stone-50 text-stone-700 border border-stone-300 rounded-lg font-medium transition-colors shadow-sm">Đóng</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};