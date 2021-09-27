import React, { useState } from "react";
import Page from "./components/page";

const initNotices = [
  { id: 1, noticeText: "Уведомление 1", read: false, date: Date.now() },
  { id: 2, noticeText: "Уведомление 2", read: false, date: Date.now() },
  { id: 3, noticeText: "Уведомление 3", read: false, date: Date.now() },
  { id: 4, noticeText: "Уведомление 4", read: false, date: Date.now() },
  { id: 5, noticeText: "Уведомление 5", read: false, date: Date.now() },
];

function App() {
  const [notices, setNotices] = useState(initNotices);

  const handleAddNotice = (noticeText) => {
    setNotices((prevState) => [...prevState, noticeText]);
  };

  const handleDeleteNotices = () => {
    setNotices([]);
  };

  const handleReadAllNotices = () => {
    const newNotices = [...notices];

    newNotices.forEach((notice) => (notice.read = true));
    setNotices(newNotices);
  };

  return (
    <div className="App">
      <Page
        onAddNotice={handleAddNotice}
        notices={notices}
        onDeleteNotices={handleDeleteNotices}
        onReadAllNotices={handleReadAllNotices}
      />
    </div>
  );
}

export default App;
