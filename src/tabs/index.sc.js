import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const TabsWrapper = styled.div`
  position: relative;
  width: 100%;
  border: 1.2px solid #eceff5;
  padding: 1rem;
  padding-bottom: 0;
  border-width: 1.2px 0 1.2px 0;

  ::before,
  ::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4px;

    z-index: 999;
  }
  ::before {
    left: 0;
    box-shadow: inset 10.08px 0 8px -8px rgba(0, 0, 0, 0.08);

    opacity: ${({ showLeftShadow }) => (showLeftShadow ? 1 : 0)};
  }
  ::after {
    right: 0;
    box-shadow: inset -10.08px 0 8px -8px rgba(0, 0, 0, 0.08);

    opacity: ${({ showRightShadow }) => (showRightShadow ? 1 : 0)};
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  white-space: nowrap;

  position: relative;
  bottom: -0.96px;
  overflow-x: auto;
  z-index: 1;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TabContainer = styled.div`
  position: relative;

  display: inline-block;

  margin-left: ${({ variant }) => (variant === "card" ? "4.96px" : "20px")};
  ${({ variant }) =>
    variant === "underline" &&
    `

    :first-child {
      margin-left: 0;
    }
    `}
  user-select: none;

  text-transform: capitalize;
  box-sizing: border-box;
  word-wrap: nowrap;
  cursor: pointer;

  justify-content: center;
  padding-bottom: 0.625rem;
  width: ${(props) => props.width || "fit-content"};

  ${({ variant, active, activeColor, inactiveColor, theme }) =>
    getVariantStyles(variant, active, activeColor, inactiveColor, theme)}
  ${({ isDisabled }) =>
    isDisabled && {
      cursor: "not-allowed ",

      opacity: "0.5",
    }};
`;

const getVariantStyles = (
  variant,
  active,
  activeColor,
  inactiveColor,
  theme
) => {
  switch (variant) {
    case "card":
      return `
          border: .96px solid ${theme.grey};
          border-bottom: ${
            active ? ".96px solid #fff" : `.96px solid ${theme.grey}`
          };
          padding: .5rem .88rem;
          border-radius: 4px 4px 0px 0px;
          background-color: ${active ? "#fff" : "#F2F6FA"};
          color: ${
            active
              ? activeColor || theme.main
              : inactiveColor || theme.contrastText
          };
        `;
    case "underline":
      return `border-bottom: ${active ? "4px" : "4px"} solid ${
        active ? activeColor || theme.main : "transparent"
      };
      padding-bottom: .7rem;
      color: ${
        active ? activeColor || theme.main : inactiveColor || theme.contrastText
      };
      font-weight: ${active ? "600" : "400"}
    `;
    default:
      return `
          border-bottom: .96px solid ${
            active
              ? activeColor || theme.main
              : inactiveColor || theme.contrastText
          };
          padding-bottom: .69rem;
          color: ${
            active
              ? activeColor || theme.main
              : inactiveColor || theme.contrastText
          };
        `;
  }
};

export const Title = styled.div`
  position: relative;
  p {
    margin: 0;
  }
`;

export const HorizontalLine = styled.div`
  content: "";
  width: 100%;
  height: 0.96px;
  background-color: #d9d9d9;
  z-index: 0;
`;
export const Ellipsis = styled.div`
  position: absolute;
  right: -43.04px;
  height: calc(100% - 0.06rem);
  bottom: 0;
  width: 2.38rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 3.04px;
  cursor: pointer;
  user-select: none;
  ${({ variant }) =>
    variant === "card" && {
      backgroundColor: "#F2F6FA",
      border: ".96px solid #d9d9d9",
      borderBottom: "none",
      borderRadius: " 4px 4px 0px 0px",
    }}

  &::after {
    content: "";
    width: 100%;
    height: 40px;
    position: absolute;
    top: 100%;
  }

  &:hover {
    color: ${({ theme }) => theme.main || "#e20074"};
  }
`;

export const TabContent = styled.div`
  padding: 0.75rem;
  background-color: #fff;

  ${({ variant }) =>
    variant !== "underline" &&
    ` border: .96px solid #d9d9d9;
    border-top: none;

    `}
  ${({ variant }) =>
    variant === "underline" &&
    `
  background-color: transparent;
  padding: .75rem 0;
  `}
`;

export const MenuWrapper = styled.div`
  min-width: 8.31rem;
  width: fit-content;

  height: fit-content;

  position: absolute;
  right: -2.25rem;
  top: 3.5rem;
  background-color: #fff;
  padding: 1.06rem 0.88rem;
  border: 1px solid #f2f6fa;
  box-shadow: 0rem 0.25rem 0.63rem rgba(0, 0, 0, 0.1);
  border-radius: 0.19rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.69rem;

  ${({ isMenuOpen }) =>
    isMenuOpen
      ? `opacity:1;
  pointer-events: all;
  transform: translateY(0);
  `
      : `opacity:0;

  pointer-events: none;
  transform: translateY(-10.08px);
  `};
  transition: all 0.2s ease-in-out;
`;

export const MenuItem = styled.div`
  width: 100%;
  cursor: pointer;
  ${({ active, activeColor, inactiveColor, theme }) =>
    active
      ? `color: ${activeColor || theme.main}`
      : `color: ${inactiveColor || theme.contrastText}`};

  &:hover {
    color: ${({ theme }) => "" || "#e20074"};
  }
`;
