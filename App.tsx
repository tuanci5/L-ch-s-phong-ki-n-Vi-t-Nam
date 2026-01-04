import React, { useState } from 'react';
import { DYNASTIES_METADATA } from './data/constants';
import { DynastySection } from './components/DynastySection';

const App: React.FC = () => {
  // Sử dụng key để buộc React render lại danh sách khi nhấn nút làm mới
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    // Tăng key lên 1 sẽ làm cho toàn bộ nội dung bên dưới được khởi tạo lại
    // Điều này giúp reset các modal, accordion về trạng thái đóng ban đầu
    setRefreshKey(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-stone-800">
      {/* Header */}
      <header className="bg-[#5d4037] text-[#fdfbf7] shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
             {/* Simple Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-amber-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
            </svg>
            <h1 className="text-xl md:text-2xl font-bold tracking-wide">
              Lịch sử Phong kiến Việt Nam
            </h1>
          </div>
          <button 
            onClick={handleRefresh}
            className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-medium transition-colors flex items-center gap-2 text-sm md:text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            Làm mới trang
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 max-w-6xl">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <p className="text-lg text-stone-600 leading-relaxed font-serif">
            Theo dòng lịch sử, các triều đại Việt Nam đã trải qua những quy luật thăng trầm tất yếu. 
            Dưới đây là sự phân tích chi tiết về ba giai đoạn: <span className="text-emerald-700 font-bold">Hình thành</span>, <span className="text-sky-700 font-bold">Phát triển</span> và <span className="text-rose-700 font-bold">Suy vong</span> của từng triều đại.
          </p>
        </div>

        {/* Sử dụng key ở đây để buộc re-render khi nhấn nút làm mới */}
        <div key={refreshKey} className="bg-white shadow-xl rounded-2xl p-6 md:p-10 border border-stone-200">
          {DYNASTIES_METADATA.map((dynasty, index) => (
            <DynastySection
              key={dynasty.name}
              name={dynasty.name}
              period={dynasty.period}
              isLast={index === DYNASTIES_METADATA.length - 1}
            />
          ))}
        </div>
      </main>

      <footer className="bg-[#5d4037] text-amber-100/60 py-8 mt-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            Nội dung được biên soạn dựa trên các tài liệu lịch sử Việt Nam (Đại Việt sử ký toàn thư, Việt Nam sử lược).
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