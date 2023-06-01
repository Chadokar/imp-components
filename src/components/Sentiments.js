import React from "react";
import { styled } from "styled-components";
import { VerticleDots } from "../icon";
import Proptypes from "prop-types";

const themes = [
  {
    key: 1,
    label: "Theme 1",
    positive: "40%",
    negative: "60%",
  },
  {
    key: 2,
    label: "Theme 2",
    positive: "20%",
    negative: "80%",
  },
  {
    key: 3,
    label: "Theme 3",
    positive: "80%",
    negative: "20%",
  },
  {
    key: 4,
    label: "Theme 4",
    positive: "75%",
    negative: "25%",
  },
];

const Boxwrpr = styled.div`
  width: 100%;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  & > svg {
    cursor: pointer;
  }
`;

const Titlewrpr = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const GraphBoxwrpr = styled.div`
  box-sizing: border-box;
  padding: 2rem 1.25rem;
  background: #ffffff;
  width: 100%;
`;

const BarContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1.75rem;
  margin-bottom: 1.5rem;
`;

const LabelWrapper = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  color: #585858;
`;

const BarBoxwrpe = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 80%;
`;

const Barwrpr = styled.div`
  display: flex;
  width: calc(50% - 0.25rem);
`;

const Bar = styled.div`
  width: ${(props) => props.width};
  height: 15px;
  background: ${(props) => props.color};
  transition: 0.3s ease-all;
`;

const Infowrpr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 1rem;
`;

const Justwpr = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Square = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  background: ${(props) => props.background};
`;

const Textwpr = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  color: #585858;
  display: flex;
  align-items: center;
`;

const Deswrpr = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #000000;
`;

const GraphBox = ({ themes }) => {
  return (
    <GraphBoxwrpr>
      {themes.map((theme, i) => (
        <BarContainer>
          <LabelWrapper>{theme.label}</LabelWrapper>
          <BarBoxwrpe>
            <Barwrpr style={{ justifyContent: "flex-end" }}>
              <Bar width={theme.negative} color="#ED3F47" />
            </Barwrpr>
            <Barwrpr>
              <Bar width={theme.positive} color="#00CE75" />
            </Barwrpr>
          </BarBoxwrpe>
        </BarContainer>
      ))}
      <Infowrpr>
        <Justwpr>
          <Square background="#00CE75" />
          <Textwpr>Positive</Textwpr>
        </Justwpr>
        <Justwpr>
          <Square background="#ED3F47" />
          <Textwpr>Negative</Textwpr>
        </Justwpr>
      </Infowrpr>
    </GraphBoxwrpr>
  );
};

GraphBox.propTypes = {
  themes: Proptypes.array,
};

const Sentiments = () => {
  return (
    <Boxwrpr>
      <TitleBox>
        <Titlewrpr>Sentiments</Titlewrpr>
        <VerticleDots />
      </TitleBox>
      <GraphBox themes={themes} />
      <Deswrpr>
        Commentary - Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Deswrpr>
    </Boxwrpr>
  );
};

export default Sentiments;
