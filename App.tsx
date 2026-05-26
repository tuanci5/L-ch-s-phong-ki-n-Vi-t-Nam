import React, { useMemo, useState } from 'react';
import { DYNASTIES_METADATA } from './data/constants';
import { DynastySection } from './components/DynastySection';

const App: React.FC = () => {
  // Sử dụng key để buộc React render lại danh sách khi nhấn nút làm mới
  const [refreshKey, setRefreshKey] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedDynastyName, setSelectedDynastyName] = useState(DYNASTIES_METADATA[0]?.name ?? '');

  const selectedDynasty = useMemo(
    () => DYNASTIES_METADATA.find(dynasty => dynasty.name === selectedDynastyName) ?? DYNASTIES_METADATA[0],
    [selectedDynastyName]
  );


  const handleSelectDynasty = (name: string) => {
    setSelectedDynastyName(name);
    setRefreshKey(prev => prev + 1);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-stone-800">
      {/* Header */}
      <header className="bg-[#5d4037] text-[#fdfbf7] shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4 py-3 md:py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              {/* Simple Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-amber-400 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
              </svg>
              <h1 className="text-base sm:text-xl md:text-2xl font-bold tracking-wide leading-tight truncate">
                Lịch sử Phong kiến Việt Nam
              </h1>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setIsMenuOpen(prev => !prev)}
                className="px-3 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-medium transition-colors flex items-center gap-2 text-sm md:text-base shadow-sm"
                aria-expanded={isMenuOpen}
                aria-controls="dynasty-menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <span className="hidden sm:inline">Menu</span>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <nav id="dynasty-menu" className="mt-3 rounded-2xl bg-[#4a332c] border border-amber-200/15 shadow-2xl p-3 max-h-[70vh] overflow-y-auto">
              <div className="flex items-center justify-between gap-3 px-1 pb-2 border-b border-amber-100/15 mb-2">
                <p className="text-sm font-bold text-amber-100">Chọn giai đoạn / triều đại</p>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-amber-100/70 hover:text-white text-sm"
                  aria-label="Đóng menu"
                >
                  Đóng
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {DYNASTIES_METADATA.map((dynasty, index) => {
                  const isActive = dynasty.name === selectedDynasty.name;
                  return (
                    <button
                      key={dynasty.name}
                      onClick={() => handleSelectDynasty(dynasty.name)}
                      className={`text-left rounded-xl p-3 transition-all border ${
                        isActive
                          ? 'bg-amber-500 text-white border-amber-300 shadow-md'
                          : 'bg-white/8 hover:bg-white/14 text-amber-50 border-white/10'
                      }`}
                    >
                      <span className={`text-[11px] font-mono ${isActive ? 'text-white/80' : 'text-amber-200/70'}`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="block font-bold text-sm leading-snug mt-1">{dynasty.name}</span>
                      <span className={`block text-xs mt-1 leading-snug ${isActive ? 'text-white/85' : 'text-amber-100/60'}`}>
                        {dynasty.period}
                      </span>
                    </button>
                  );
                })}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-3 sm:px-4 py-6 md:py-10 max-w-6xl">
        <div className="mb-6 md:mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-900 border border-amber-200 px-4 py-2 mb-4 text-sm font-bold shadow-sm">
            <span>Đang xem:</span>
            <span>{selectedDynasty.name}</span>
          </div>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed font-serif px-1">
            Theo dòng lịch sử 4000 năm của dân tộc, từ lớp <span className="text-amber-700 font-bold">huyền sử khởi nguồn</span> đến các nhà nước và triều đại Việt Nam, mỗi giai đoạn đều mang dấu ấn dựng nước, giữ nước và phát triển văn hóa. 
            Dùng <span className="text-amber-700 font-bold">Menu</span> để chọn nhanh triều đại muốn xem trên mobile.
          </p>
        </div>

        {/* Sử dụng key ở đây để buộc re-render khi nhấn nút làm mới/chọn triều đại */}
        <div key={refreshKey} className="bg-white shadow-xl rounded-2xl p-4 sm:p-6 md:p-10 border border-stone-200">
          {selectedDynasty && (
            <DynastySection
              key={selectedDynasty.name}
              name={selectedDynasty.name}
              period={selectedDynasty.period}
              isLast={true}
            />
          )}
        </div>
      </main>

      <footer className="bg-[#5d4037] text-amber-100/60 py-8 mt-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm max-w-4xl mx-auto leading-relaxed">
            Nội dung được biên soạn dựa trên các tài liệu lịch sử: Đại Việt sử ký toàn thư, Khâm định Việt sử thông giám cương mục, Đại Nam thực lục, Việt Nam sử lược, Hoàng Lê nhất thống chí, Gia Định thành thông chí, Lam Sơn thực lục, Lịch triều hiến chương loại chí và các tài liệu khác.
          </p>
          <p className="text-xs mt-2">
            &copy; {new Date().getFullYear()} Historical Timeline Visualization
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
