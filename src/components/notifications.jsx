import React from "react";
import { Popover } from "bootstrap";
// import { createPopper } from "@popperjs/core";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import {
  OverlayTrigger,
  Button,
  PopoverBody,
  PopoverHeader,
} from "react-bootstrap";

const Notifications = ({ notices }) => {
  //   const popover = (
  //     <Popover id="popover-basic">
  //       <PopoverHeader as="h3">Popover right</PopoverHeader>
  //       <PopoverBody>
  //         And here's some <strong>amazing</strong> content. It's very engaging.
  //         right?
  //       </PopoverBody>
  //     </Popover>
  //   );

  //   const Example = () => (
  //     <OverlayTrigger trigger="click" placement="right" overlay={popover}>
  //       <Button variant="success">Click me to see</Button>
  //     </OverlayTrigger>
  //   );

  return (
    <div>
      <button
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
      </button>

      {/* <Example /> */}

      {["bottom"].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
              <Popover.Body>
                <strong>Holy guacamole!</strong> Check this info.
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary">Popover on {placement}</Button>
        </OverlayTrigger>
      ))}
    </div>
  );
};

export default Notifications;

/* <button
        type="button"
        className="btn btn-lg btn-danger"
        data-bs-toggle="popover"
        data-bs-placement="bottom"
        title="Popover title"
        data-bs-content="And here's some amazing content. It's very engaging. Right?"
      >
        Click to toggle popover
      </button> */
