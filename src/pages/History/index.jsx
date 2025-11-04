import React from 'react'
import HistoryList from '../../components/HistoryList'
import DialogDemo from '@/Dialog/dialogConfirm';
import DialogView from '@/Dialog/index.jsx';
import { toast } from "react-hot-toast";

const History = () => {
  //bước 2 tạo state lấy dữ liệu từ localstorage
  const [historyList, setHistoryList] = React.useState(() => {
    return JSON.parse(localStorage.getItem("history")) || [];
  });
  const [isOpen, setIsOpen] = React.useState(false);
  //tạo state nhận id 
  const [selectId, setSelectId] = React.useState(null);
// xử lý sự kiện handleDelete show dialog confirm
  const handleDelete = (id) => {
    setSelectId(id);
    setIsOpen(true);
  };
  //xử lý sự kiện onDelete trong dialogConfirm
  const handleDeleteConfirm = (id) => {
    const newHistoryList = historyList.filter((item) => item.id !== id);
    setHistoryList(newHistoryList);
    setIsOpen(false);
  };
  //xử lý sự kiện cancel
  const setCancel = () => {
    setIsOpen(false);
  };
  //tạo usetate nhận blogContent
  const [selectedContent, setSelectedContent] = React.useState("");
  //tạo usetate nhận isOpenview
  const [isOpenview, setIsOpenview] = React.useState(false);
   // xử lý sự kiện hiển thị dialog view
   const handleViewDetail = (id) => {
    const selectedItem = historyList.find((item) => item.id === id);
    if (selectedItem) {
      setSelectedContent(selectedItem.content);
      setIsOpenview(true);
    }
  };

  // Xử lý sự kiện copy
  const handleCopy = () => {
    if (!selectedContent.trim()) {
      toast.error("Không có nội dung để sao chép!");
      return;
    }
    navigator.clipboard.writeText(selectedContent);
    toast.success("Đã sao chép vào clipboard!");
  };

  // Xử lý sự kiện download
  const handleDownload = () => {
    if (!selectedContent.trim()) {
      toast.error("Không có nội dung để tải xuống!");
      return;
    }
    const blob = new Blob([selectedContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "blog-content.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Đã tải xuống thành công!");
  };

  React.useEffect(() => {
    localStorage.setItem("history", JSON.stringify(historyList));
  }, [historyList]);
  return (  
    <div>
      <HistoryList 
        historyList={historyList} 
        onDelete={handleDelete}
        onView={handleViewDetail}
      />
      <DialogDemo 
        isOpen={isOpen} 
        onOpenChange={setIsOpen} 
        onDelete={handleDeleteConfirm} 
        selectId={selectId}
        setCancel={setCancel}
      />
      <DialogView
        isOpenview={isOpenview}
        onOpenChangeview={setIsOpenview}
        blogContent={selectedContent}
        handleCopy={handleCopy}
        handleDownload={handleDownload}
      />
    </div>
  )
}

export default History