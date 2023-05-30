import React, { useState } from "react";
import { styled } from "styled-components";
import Proptypes from "prop-types";
import { Save, SearchDone, SearchIcon, Triangle, VerticleDots } from "../icon";
import { contents } from "./constant";

const SearchPopwrpr = styled.div`
  width: 80vw;
  max-width: 67.5rem;
  padding: 0.625rem 0;
  height: 80vh;
  display: flex;
  flex-direction: column;
`;

const SearchHeader = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0.25rem 1.875rem 14px 1.875rem;
  align-items: center;
  flex-shrink: 0;
`;

const MainTitlewrpr = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #000000;
  min-width: fit-content;
`;

const Labelwrpr = styled.label`
  box-sizing: border-box;
  width: 74%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background: #f6f7fb;
  border: 1px solid #c3c7d9;
  border-radius: 10px;
`;

const Inputwrpr = styled.input`
  border: none;
  outline: none;
  background: #f6f7fb;
  font-weight: 600;
  font-size: 13px;
  display: flex;
  padding-top: 3px;
  width: 100%;
  &:focus {
    background: #f6f7fb;
  }
  &::placeholder {
    font-weight: 600;
    font-size: 13px;
    color: #999999;
    display: flex;
    align-items: flex-end;
  }
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  box-sizing: border-box;
  width: 1rem;
  height: 1rem;
  background-color: #ffffff;
  margin: 0.25rem;
  flex-shrink: 0;
  &:checked {
    width: 1rem;
    height: 1rem;
    accent-color: #675ef2;
    border-radius: 3px;
  }
`;

const ContentHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  background: rgba(211, 214, 223, 0.2);
  width: 100%;
  height: 1.75rem;
  align-items: center;
  padding: 0 0 0 1.37rem;
  flex-shrink: 0;
`;

const Framewrpr = styled.div`
  display: flex;
  align-items: center;
  width: 5rem;
  gap: 5px;
  margin-right: ${(props) => props.marginRight};
  width: ${(props) => props.width};
`;

const Frametxt = styled.div`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #5c5e60;
`;

const ContentsContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 0px;
    background-color: #f5f5f5;
  }
  margin: 0.5rem 0;
`;

const Contentwrpr = styled.div`
  width: 100%;
  border-bottom: 1px solid #c3c7d9;
  padding-left: 1.37rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 5rem;
  flex-shrink: 0;
  min-height: fit-content;
`;

const MainBox = styled.div`
  display: flex;
  width: 42.5%;
  gap: 0.75rem;
  align-items: center;
`;

const SearchIconwpr = styled.div`
  display: flex;
  align-items: center;
  height: 2.5rem;
  width: 2.5rem;
  background: #f6f7fb;
  border-radius: 5px;
  justify-content: center;
  flex-shrink: 0;
`;

const Textwrpr = styled.div`
  height: 100%;
`;

const Titlewrpr = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #675ef2;
`;

const Deswrpr = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #5c5e60;
`;

const Elewrp = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #000000;
  width: 5rem;
  display: flex;
  justify-content: center;
  margin-right: ${(props) => props.marginRight};
`;

const SharedIconsCont = styled.div`
  display: flex;
  gap: 3px;
  width: 6.87rem;
  margin-right: 4.1%;
`;

const SharedIconCir = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.56rem;
  height: 1.56rem;
  border-radius: 50%;
  background: ${(props) => props.backgroundColor};
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
`;

const Iconwrpr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 6%;
`;

const color = ["#994333", "#795645", "#854543"];

const ContentBox = ({ content, ind, handler }) => {
  const length = content.shared.length;
  return (
    <Contentwrpr>
      <MainBox>
        <CheckBox
          checked={content.checked}
          onChange={() => handler(false, ind)}
          type="checkbox"
        />
        <SearchIconwpr>
          <SearchDone />
        </SearchIconwpr>
        <Textwrpr>
          <Titlewrpr>{content.title}</Titlewrpr>
          <Deswrpr>{content.des}</Deswrpr>
        </Textwrpr>
      </MainBox>
      <Elewrp marginRight="0.92%">{content.createBy}</Elewrp>
      <Elewrp marginRight="3.33%">{content.createOn}</Elewrp>
      <Elewrp marginRight="3%">{content.updateOn}</Elewrp>
      <SharedIconsCont>
        {content.shared.map((ele, i) => {
          if (i < 3) {
            return (
              <SharedIconCir backgroundColor={color[i]} key={i}>
                {ele.content}
              </SharedIconCir>
            );
          }
        })}
        {length - 3 !== 0 && (
          <SharedIconCir backgroundColor="#999999">{length - 3}</SharedIconCir>
        )}
      </SharedIconsCont>
      <Save />
      <Iconwrpr>
        <VerticleDots />
      </Iconwrpr>
    </Contentwrpr>
  );
};

ContentBox.propTypes = {
  content: Proptypes.object,
};

const SearchPopup = ({
  mainTitle = "Saved Searches",
  placeholder = "Search",
}) => {
  const [conts, setConts] = useState([...contents]);
  const [allChecked, setAllChecked] = useState(false);
  let varConts = [...contents];

  const checkboxHandler = (Isall, ind) => {
    if (Isall) {
      for (let i = 0; i < conts.length; i++) {
        varConts[i].checked = !allChecked;
      }
      setAllChecked(!allChecked);
      setConts([...varConts]);
    } else {
      varConts[ind].checked = !varConts[ind].checked;
      setConts([...varConts]);
      if (allChecked) {
        setAllChecked(false);
        return;
      }
      setAllChecked(true);
      for (let i = 0; i < varConts.length; i++) {
        if (!varConts[i].checked) {
          setAllChecked(false);
        }
      }
    }
  };

  return (
    <SearchPopwrpr>
      <SearchHeader>
        <MainTitlewrpr>{mainTitle}</MainTitlewrpr>
        <Labelwrpr>
          <Inputwrpr placeholder={placeholder} />
          <SearchIcon />
        </Labelwrpr>
      </SearchHeader>
      <ContentHeader>
        <CheckBox
          type="checkbox"
          checked={allChecked}
          onChange={(e) => checkboxHandler(true, 0)}
        />
        <Framewrpr
          marginRight="calc(39% - 76px)"
          style={{ marginLeft: ".81rem" }}
        >
          <Frametxt>Search Title</Frametxt>
          <Triangle />
        </Framewrpr>
        <Framewrpr marginRight="0.92%">
          <Frametxt>Search Title</Frametxt>
          <Triangle />
        </Framewrpr>
        <Framewrpr marginRight="3.33%">
          <Frametxt>Search Title</Frametxt>
          <Triangle />
        </Framewrpr>
        <Framewrpr marginRight="3%">
          <Frametxt>Search Title</Frametxt>
          <Triangle />
        </Framewrpr>
        <Framewrpr marginRight="6.57%">
          <Frametxt>Search Title</Frametxt>
          <Triangle />
        </Framewrpr>
        <Save />
      </ContentHeader>
      <ContentsContainer>
        {conts.map((content, i) => (
          <ContentBox
            content={content}
            varCont={varConts[i]}
            handler={checkboxHandler}
            ind={i}
            key={i}
          />
        ))}
      </ContentsContainer>
    </SearchPopwrpr>
  );
};

SearchPopup.propTypes = {
  mainTitle: Proptypes.string,
  placeholder: Proptypes.string,
};

export default SearchPopup;
