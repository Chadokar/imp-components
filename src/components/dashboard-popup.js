import React, { useEffect, useRef, useState } from "react";
import { PopupBackWrapper, PopupContainer } from "./index.sc";
import PropTypes from "prop-types";

const DashboardPopup = ({
  popContent = <></>,
  open = true,
  toggler = () => {},
}) => {
  const popupRef = useRef();
  const [newOpen, setNewOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      toggler(!open);
      setNewOpen(false);
    }
    document.removeEventListener("click", handleDocumentClick);
  };

  const handleDocumentClick = (event) => {
    handleClickOutside(event);
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    console.log("1", open);
  }, []);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (open) {
        setNewOpen(true);
        console.log("3");
      }
    }, 2);
    console.log("2", open);
    if (newOpen) {
      setNewOpen(false);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [open]);

  return (
    <>
      {open && (
        <PopupBackWrapper onClick={handleClickOutside}>
          <PopupContainer open={newOpen} ref={popupRef}>
            {popContent}
          </PopupContainer>
        </PopupBackWrapper>
      )}
    </>
  );
};

DashboardPopup.propTypes = {
  popContent: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.node,
  ]),
  open: PropTypes.bool,
  toggler: PropTypes.func,
};

export default DashboardPopup;
