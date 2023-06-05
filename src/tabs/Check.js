import React from "react";
// import Tabs from 'tabs';
import Tabs from ".";
import { styled } from "styled-components";
import Proptypes from "prop-types";

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

const TitleBox = ({ title, des }) => {
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

const tabs = [
  {
    id: 0,
    title: <TitleBox title="All Media" des="24,139" />,
    content: "This is the content for tab 1",
  },
  { id: 1, title: <TitleBox title="Online" des="12,756" />, content: "hi" },
  {
    id: 2,
    title: <TitleBox title="Print" des="3,548" />,
    content: "This is the content for tab 3",
  },
  {
    id: 3,
    title: <TitleBox title="Broadcast" des="4,325" />,
    content: "This is the content for tab 4",
  },
  {
    id: 4,
    title: <TitleBox title="Blogs" des="3,510" />,
    content: "This is the content for tab 5",
  },
];

function Check() {
  //   const [activeTab, setActiveTab] = useState(0);

  return (
    <Tabs
      items={tabs}
      widthItem="7rem"
      variant="underline"
      onChange={(index) => console.log(index)}
      activeColor="#675EF2"
      inactiveColor="#000000"
    />
  );
}

export default Check;
