import React from "react";
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
      <div key={note.id}>
        <h5 key={note.id}>
          {note.read ? note.noticeText : <b>{note.noticeText}</b>}
        </h5>
        <p key={`time-${note.id}`}>{getDate(note.date)}</p>
      </div>
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
            </span>
          ) : null}
        </Button>
      </OverlayTrigger>
    </div>
  );
};

export default Notifications;
