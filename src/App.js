import { styled } from "styled-components";
import "./App.css";
import Box from "./components/Box";
import Carousel from "./components/Corousel";
import MenuTile from "./components/MenuTile";
import Navbar, { NavLeft } from "./components/Navbar";
import Popover from "./components/Popover";
import MyComponent from "./components/New";
import DashboardPopup from "./components/dashboard-popup";
import { useState } from "react";
import SearchPopup from "./components/SearchPopup";
import Sentiments from "./components/Sentiments";
import Theme from "./components/Theme";
import Duration from "./components/Duration";
import SmallCompL_1 from "./components/SmallCompL_1";
import SmallCompL_0 from "./components/SmallCompL_0";
import Tabs from "./tabs";
import { tabs } from "./tabs/index.sc";

const Compoarr = ({ key }) => {
  return (
    <div key={key} className="child">
      <h2>Slide 4</h2>
      <p>This is the content of slide 1.</p>
    </div>
  );
};
const Childs = [
  <Compoarr key={1} />,
  <Compoarr key={2} />,
  <Compoarr key={3} />,
];

const LeftBox = () => {
  return <>AlphametricX</>;
};

const UserName = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  text-align: center;
  color: #000000;
`;

const RightBox = () => {
  return (
    <>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22.408C17.5228 22.408 22 17.9308 22 12.408C22 6.88511 17.5228 2.40796 12 2.40796C6.47715 2.40796 2 6.88511 2 12.408C2 17.9308 6.47715 22.408 12 22.408Z"
          fill="#5D5E60"
          stroke="#5D5E60"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.08984 9.40804C9.32495 8.73971 9.789 8.17615 10.3998 7.81717C11.0106 7.4582 11.7287 7.32698 12.427 7.44675C13.1253 7.56653 13.7587 7.92956 14.2149 8.47157C14.6712 9.01357 14.9209 9.69956 14.9198 10.408C14.9198 12.408 11.9198 13.408 11.9198 13.408"
          stroke="white"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 17.408H12.0125"
          stroke="white"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_265_176)">
          <path
            d="M9.19824 21.4669H15.1976C15.1976 22.5387 14.6259 23.5289 13.6977 24.0648C12.7697 24.6005 11.6262 24.6005 10.6983 24.0648C9.77004 23.5289 9.19824 22.5387 9.19824 21.4669ZM12.318 0.469496V0.469758C11.7007 0.436803 11.0971 0.659115 10.649 1.08465C10.2008 1.51019 9.94734 2.10131 9.94808 2.71931V3.84424C8.63039 4.31005 7.49006 5.17365 6.68398 6.31531C5.87816 7.45698 5.44637 8.82094 5.44871 10.2184V12.0931C5.44871 13.2856 4.97531 14.4293 4.13262 15.2727L3.82139 15.584C3.51302 15.8936 3.30718 16.2907 3.23186 16.7214C3.1568 17.1519 3.21591 17.5953 3.40161 17.9912C3.58417 18.365 3.86951 18.6789 4.22416 18.896C4.57881 19.113 4.98786 19.2247 5.40372 19.2174H19.0748C19.6376 19.2174 20.1775 18.9938 20.5755 18.5957C20.9736 18.1979 21.197 17.658 21.197 17.0952V17.0013C21.197 16.4952 21.0162 16.0059 20.6872 15.6217L20.031 14.8719V14.8716C19.3285 14.0522 18.9438 13.0075 18.9474 11.9284V10.2184C18.9497 8.82099 18.5179 7.45703 17.7121 6.31537C16.906 5.1737 15.7657 4.31011 14.448 3.84429V2.84699C14.4606 2.25458 14.2477 1.67921 13.8522 1.23797C13.457 0.796475 12.9085 0.521875 12.3182 0.469784L12.318 0.469496Z"
            fill="#5D5E60"
          />
        </g>
        <defs>
          <clipPath id="clip0_265_176">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.407959)"
            />
          </clipPath>
        </defs>
      </svg>
      <NavLeft>
        <UserName>andrew_kras</UserName>
      </NavLeft>
    </>
  );
};

const ContentWrapper = styled.div`
  box-sizing: border-box;
  width: 265px;
  background: #ffffff;
  padding: 15px;
  border-radius: 10px;
`;

const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: #989da4;
`;

const InputBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  margin: 6.5px 0 16.5px;
`;

const InputWrapper = styled.input`
  border: none;
  outline: none;
  &:focus {
    outline: none;
    margin: 0;
    padding: 0;
  }
  &::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    color: #585858;
    margin: 0;
    padding: 0;
  }
  margin: 0;
  padding: 0;
`;

const LabelWrapper = styled.label`
  background: #ffffff;
  box-sizing: border-box;
  border: 1px solid #c3c7d9;
  border-radius: 6px;
  padding: 12.5px 18px;
  margin: 0;
  display: flex;
  align-item: center;
  height: 40px;
  width: 100%;
`;

const ButtonBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #c3c7d9;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 7.65px 10.33px;
  cursor: pointer;
`;

const CanvasText = styled.p`
  margin: 0;
  padding: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #585858;
`;

const DoneText = styled.p`
  margin: 0;
  padding: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

const OuterBox = styled.div`
  box-sizing: border-box;
  width: 750px;
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(153, 153, 153, 0.12);
  border-radius: 15px;
  padding: 2rem;
`;

const PopContent = () => {
  return (
    <ContentWrapper>
      <Title>Add GUCCI to</Title>
      <InputBoxWrapper>
        <LabelWrapper htmlFor="drop-down">
          <InputWrapper placeholder="My Clients" type="text" id="drop-down" />
        </LabelWrapper>
        <LabelWrapper htmlFor="second">
          <InputWrapper placeholder="" type="text" id="second" />
        </LabelWrapper>
        <LabelWrapper htmlFor="third">
          <InputWrapper placeholder="" type="text" id="third" />
        </LabelWrapper>
      </InputBoxWrapper>
      <ButtonBoxWrapper>
        <Button>
          <CanvasText>New Canvas</CanvasText>
        </Button>
        <Button
          style={{
            background: "#000000",
            borderRadius: "4px",
            padding: "8px 11px",
          }}
        >
          <DoneText>Done</DoneText>
        </Button>
      </ButtonBoxWrapper>
    </ContentWrapper>
  );
};

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* <div
        className="App"
        style={{ background: "#F5F5F5", position: "relative" }}
      >
        <Carousel slides={Childs} />
        <Box Components={Childs} />
        <MenuTile title={"Newsletters"} />
        <Navbar LeftBox={<LeftBox />} RightBox={<RightBox />} />
      </div> */}
      {/* <div style={{ margin: 200 }}>
        <button onClick={() => setShow(!show)}>Click here</button>
        <DashboardPopup
          toggler={setShow}
          open={show}
          popContent={<SearchPopup />}
          padding="0px"
        />
      </div> */}
      {/* <div style={{ margin: 200 }}>
        <Popover content={<PopContent />} />
      </div> */}
      {/* <MyComponent /> */}
      <div style={{ margin: 300 }}>
        <OuterBox>
          <Sentiments />
        </OuterBox>
      </div>
      <div style={{ margin: 300 }}>
        <OuterBox style={{ justifyContent: "flex-end", display: "flex" }}>
          <Theme />
        </OuterBox>
      </div>
      <div style={{ margin: 400 }}>
        <Duration />
      </div>
      <div style={{ margin: 200, background: "#F2F2F2" }}>
        <Tabs
          items={tabs}
          activeColor={"#FFFFFF"}
          inactiveColor={"#585858"}
          variant="card"
        />
      </div>
      <div style={{ margin: 200, background: "#F2F2F2" }}>
        <SmallCompL_1 />
      </div>
      <div style={{ margin: 200, background: "#F2F2F2", height: "100px" }}>
        <SmallCompL_0 />
      </div>
    </>
  );
}

export default App;
