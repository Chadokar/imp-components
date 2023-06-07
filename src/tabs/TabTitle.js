import React from 'react';
// import Tabs from 'tabs';

import Proptypes from 'prop-types';
import styled from 'styled-components';

const TitleBoxwpr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 0.25rem;
`;

const Titlewrpr = styled.div`
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;

const Deswpr = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #585858;
`;

export const TitleBox = ({ title, des }) => {
  return (
    <TitleBoxwpr>
      <Titlewrpr>{title}</Titlewrpr>
      <Deswpr>{des}</Deswpr>
    </TitleBoxwpr>
  );
};

TitleBox.propTypes = {
  title: Proptypes.string.isRequired,
  des: Proptypes.string.isRequired,
};
