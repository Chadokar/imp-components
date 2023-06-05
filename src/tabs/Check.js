import React from "react";
// import Tabs from 'tabs';
import Tabs from ".";

const tabs = [
  { id: 0, title: "Tab 1", content: "This is the content for tab 1" },
  { id: 1, title: "ExampleTitle", content: "hi" },
  {
    id: 2,
    title: "Tab 3",
    content: "This is the content for tab 3",
  },
];

function Check() {
  //   const [activeTab, setActiveTab] = useState(0);

  return (
    <Tabs
      items={tabs}
      variant="underline"
      onChange={(index) => console.log(index)}
      activeColor="red"
      inactiveColor="#000000"
    />
  );
}

export default Check;
