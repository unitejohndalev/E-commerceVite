import React from "react";

//import material tailwind
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

//import filterproduct components
import HatMain from "./hat_products/HatMain";
import ClothMain from "./cloth_products/ClothMain";
import ShoeMain from "./shoe_products/ShoeMain";

const FilterProductMain = () => {
  //custom data for tabs
  const data = [
    {
      label: "Hats",
      value: "hats",
      desc: <HatMain/>
    },
    {
      label: "Cloths",
      value: "cloths",
      desc: <ClothMain/>
    },
    {
      label: "Shoes",
      value: "shoes",
      desc:<ShoeMain/>
    },
    {
      label: "Bags",
      value: "bags",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Accessories",
      value: "accessories",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <div className="mt-[150px]">
      <Tabs value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default FilterProductMain;
