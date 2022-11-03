import React, { useState, useEffect } from "react";
import clsx from "clsx";
import "./Modal.css";

/**
 *  <Modal>
 *    <h1> Hello </h1>
 *  </Modal>
 *
 *  <Modal children={<h1> Hello </h1>} />
 */

export const Modal = (props) => {
  const { open, onClose, children } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = (event) => {
    console.log("Closing");
    event.stopPropagation();
    setIsOpen(false);

    if (onClose) onClose();
  };

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  console.log({ isOpen });

  const className = clsx({ "modal-wrapper": isOpen, "modal-hidden": !isOpen });

  return (
    <div className={className}>
      <i
        onClick={handleCloseModal}
        className="close-icon fas fa-times"
        aria-hidden="true"
      ></i>
      <div className="modal-content">{children}</div>
    </div>
  );
};
