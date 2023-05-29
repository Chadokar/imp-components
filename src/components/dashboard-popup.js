import React, { useEffect, useRef, useState } from "react";
import { PopupBackWrapper, PopupContainer } from "./index.sc";
import PropTypes from "prop-types";
import { styled } from "styled-components";

export const PopupBackWrapper = styled.div`
  top: 0;
  left: 0;
  overflow: hidden;
  background: rgba(160, 167, 198, 0.6);
  width: 100vw;
  height: 100vh;
  position: fixed;
  transition: 0.3s ease-in-out;
  z-index: 1000;
`;

export const PopupContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${(props) =>
    props.open ? "translate(-50%, -50%)" : "translate(-50%,0)"};
  box-sizing: border-box;
  transition: 0.3s ease-in-out;
  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(108, 73, 172, 0.3);
  border-radius: 20px;
  padding: 1.5rem 1.5rem;
  gap: 10px;
  z-index: 1000;
`;

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
