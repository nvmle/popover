import React, { useState } from "react";
import Page from "./components/page";

const initNotices = [
  "Уведомление 1",
  "Уведомление 2",
  "Уведомление 3",
  "Уведомление 4",
  "Уведомление 5",
];

function App() {
  const [notices, setNotices] = useState(initNotices);

  const handleAddNotice = (noticeText) => {
    console.log("noticeText", noticeText);

    setNotices((prevState) => [...prevState, noticeText]);
  };

  return (
    <div className="App">
      <Page onAddNotice={handleAddNotice} notices={notices} />
    </div>
  );
}

export default App;
