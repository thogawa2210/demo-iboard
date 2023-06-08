import React, { useState } from 'react';

const Tab: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <nav className="">
      <ul className="flex">
        <li
          className={`px-4 pt-2 cursor-pointer ${
            activeTab === 0 ? 'text-orange-400 pb-1 border-b-2 border-orange-400' : 'text-white pb-2'
          }`}
          onClick={() => handleTabClick(0)}
        >
          Thống kê giao dịch
        </li>
        <li
          className={`px-4 pt-2 cursor-pointer ${
            activeTab === 1 ? 'text-orange-400 pb-1 border-b-2 border-orange-400' : 'text-white pb-2'
          }`}
          onClick={() => handleTabClick(1)}
        >
          Tài chính
        </li>
        <li
          className={`px-4 pt-2 cursor-pointer ${
            activeTab === 2 ? 'text-orange-400 pb-1 border-b-2 border-orange-400' : 'text-white pb-2'
          }`}
          onClick={() => handleTabClick(2)}
        >
          Hồ sơ doanh nghiệp
        </li>
        <li
          className={`px-4 pt-2 cursor-pointer ${
            activeTab === 3 ? 'text-orange-400 pb-1 border-b-2 border-orange-400' : 'text-white pb-2'
          }`}
          onClick={() => handleTabClick(3)}
        >
          Tin tức
        </li>
        <li
          className={`px-4 pt-2 cursor-pointer ${
            activeTab === 4 ? 'text-orange-400 pb-1 border-b-2 border-orange-400' : 'text-white pb-2'
          }`}
          onClick={() => handleTabClick(4)}
        >
          Lịch sự kiện
        </li>
      </ul>
        
    </nav>
  );
};

export default Tab;
