import React from 'react'
import HistoryList from '../../components/HistoryList'
const History = () => {
  // tạo mảng  useffect  rỗng để   get item history từ localstorage
  const [historyList, setHistoryList] = React.useState(() => {
    return JSON.parse(localStorage.getItem("history")) || [];
  });

  const handleDelete = (id) => {
    const newHistoryList = historyList.filter((item) => item.id !== id);
    setHistoryList(newHistoryList);
  };

  return (
    <div>
      <HistoryList historyList={historyList} handleDelete={handleDelete} />
    </div>
  )
}

export default History