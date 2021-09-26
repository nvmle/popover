import React from "react";

const ActionsBlock = ({ onAddNotice }) => {
  const noticeText = "123";

  return (
    <div>
      <div>
        <input className="inputForm m-2"></input>
        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={() => onAddNotice(noticeText)}
        >
          Отправить
        </button>
      </div>
      <div className="d-flex flex-column">
        <button type="button" className="btn btn-secondary m-2">
          Пометить все события прочитанными
        </button>
        <button type="button" className="btn btn-secondary m-2">
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
