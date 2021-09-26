import React from "react";
import Notifications from "./notifications";
import ActionsBlock from "./actionsBlock";

const Page = ({ notices, onAddNotice }) => {
  return (
    <div className="d-flex justify-content-around mt-4">
      <div>
        <ActionsBlock onAddNotice={onAddNotice} />
      </div>
      <div className="mt-2">
        <Notifications notices={notices} />
      </div>
    </div>
  );
};

export default Page;
