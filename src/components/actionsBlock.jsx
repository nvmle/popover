import React, { useState } from "react";

const ActionsBlock = ({
  noticesLength,
  onAddNotice,
  onDeleteNotices,
  onReadAllNotices,
}) => {
  const [notice, setNotice] = useState();

  const setNoticeDate = () => {
    const date = Date.now();
    return date;
  };

  const handleAddNotice = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);

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
          onClick={() =>
            onAddNotice({
              id: noticesLength + 1,
              noticeText: notice,
              read: false,
              date: setNoticeDate(),
            })
          }
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
        <button type="button" className="btn btn-secondary m-2">
          Скрыть\показать попап нотификаций
        </button>
      </div>
    </div>
  );
};

export default ActionsBlock;
