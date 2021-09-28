import React, { useState } from "react";

const ActionsBlock = ({ onAddNotice, onDeleteNotices, onReadAllNotices }) => {
  const [notice, setNotice] = useState();

  const handleAddNotice = (e) => {
    setNotice(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          value={notice}
          onChange={(e) => handleAddNotice(e)}
          className="inputForm m-2"
          placeholder="enter your notice"
        ></input>
        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={() => onAddNotice(notice)}
        >
          Отправить
        </button>
      </div>
      <div className="d-flex flex-column">
        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={onReadAllNotices}
        >
          Пометить все события прочитанными
        </button>
        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={onDeleteNotices}
        >
          Удалить все события
        </button>
      </div>
    </div>
  );
};

export default ActionsBlock;
