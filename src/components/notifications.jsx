import React from "react";
// import { Popover } from "bootstrap";
// import { createPopper } from "@popperjs/core";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import { Popover, OverlayTrigger, Button } from "react-bootstrap";

const Notifications = ({ notices, countOfNotices }) => {
  const getDate = (noteTime) => {
    const date = Date.now() - noteTime;

    if (date / (1000 * 60 * 60 * 24 * 365) > 1)
      return `${Math.round(date / (1000 * 60 * 60 * 24 * 365))} years ago`;
    else if (date / (1000 * 60 * 60 * 24) > 1)
      return `${Math.round(date / (1000 * 60 * 60 * 24))} mounths ago`;
    else if (date / (1000 * 60 * 60) > 1)
      return `${Math.round(date / (1000 * 60 * 60))} hours ago`;
    else if (date / (1000 * 60) > 1)
      return `${Math.round(date / (1000 * 60))} minutes ago`;

    return `${Math.round(date / 1000)} seconds ago`;
  };
  const renderNotice = (note) => {
    return (
      <>
        <h5 key={note.id}>
          {note.read ? note.noticeText : <b>{note.noticeText}</b>}
        </h5>
        <p key={`time-${note.id}`}>{getDate(note.date)}</p>
      </>
    );
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Уведомления</Popover.Header>
      <Popover.Body>
        {notices
          .slice(notices.length - countOfNotices, notices.length)
          .reverse()
          .map((note) => renderNotice(note))}
      </Popover.Body>
    </Popover>
  );

  return (
    <div>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <Button className="position-relative" variant="success">
          Notice
          {notices.length ? (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {notices.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          ) : null}
        </Button>
      </OverlayTrigger>
    </div>
  );
};

export default Notifications;

// const Example = () => (
//   <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
//     <Button className="position-relative" variant="success">
//       Notice
//       <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//         {notices.length}
//         <span className="visually-hidden">unread messages</span>
//       </span>
//     </Button>
//   </OverlayTrigger>
// );

/* <button
        id="noticeBtn"
        type="button"
        className="btn btn-primary position-relative "
        data-toggle="popover"
        data-placement="bottom"
        title="Popover title"
        data-content="And here's some amazing content. It's very engaging. Right?"
      >
        Notificate
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {notices.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </button> */

/* 
      {["bottom"].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={"bottom"}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Header as="h3">{`Notices`}</Popover.Header>
              <Popover.Body>
                <strong>Holy guacamole!</strong> Check this info.
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {notices.length}
              <span className="visually-hidden">unread messages</span>
            </span>
            Notice
          </Button>
        </OverlayTrigger>
      ))} */
