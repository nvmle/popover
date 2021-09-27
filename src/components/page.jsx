import React from "react";
import Notifications from "./notifications";
import ActionsBlock from "./actionsBlock";

const Page = ({ notices, onAddNotice, onDeleteNotices, onReadAllNotices }) => {
  const countOfNotices = 5;

  return (
    <div className="d-flex justify-content-around mt-4">
      <div>
        <ActionsBlock
          noticesLength={notices.length}
          onAddNotice={onAddNotice}
          onDeleteNotices={onDeleteNotices}
          onReadAllNotices={onReadAllNotices}
        />
      </div>
      <div className="mt-2">
        <Notifications notices={notices} countOfNotices={countOfNotices} />
      </div>
    </div>
  );
};

export default Page;
