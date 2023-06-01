import React from "react";
import { styled } from "styled-components";

const content = {
  label: "Theme 2",
  negative: "38%",
  positive: "62%",
};

const ThemeContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
`;

const LabelWrapper = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #585858;
  width: fit-content;
`;

const BarBoxwrper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 13.12rem;
`;

const Barwrpr = styled.div`
  display: flex;
  width: ${(props) => props.width};
  gap: 0.25rem;
  justify-content: end;
`;

const TextBoxwrper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: ${(props) => props.width};
  gap: 0.25rem;
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

const Textwpr = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  color: #585858;
  display: flex;
  align-items: center;
  :>span  {
    font-size: 14px;
  }
`;

const Bar = styled.div`
  width: ${(props) => props.width};
  height: 15px;
  background: ${(props) => props.color};
  transition: 0.3s ease-all;
`;

const Theme = () => {
  return (
    <>
      <ThemeContainer>
        <LabelWrapper>{content.label}</LabelWrapper>
        <BarBoxwrper>
          <Barwrpr width={"100%"}>
            <TextBoxwrper width={content.negative}>
              <Textwpr>Negative</Textwpr>
              <Titlewrpr>{content.negative}</Titlewrpr>
            </TextBoxwrper>
            <TextBoxwrper width={content.positive}>
              <Textwpr>Positive</Textwpr>
              <Titlewrpr>{content.positive}</Titlewrpr>
            </TextBoxwrper>
          </Barwrpr>
          <Barwrpr width="100%">
            <Bar color="#00CE75" width={content.negative} />
            <Bar color="#ED3F47" width={content.positive} />
          </Barwrpr>
        </BarBoxwrper>
      </ThemeContainer>
    </>
  );
};

export default Theme;
