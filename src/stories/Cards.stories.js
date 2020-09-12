import React from "react";

import Cards from "../components/Cards/Cards";

export default {
  title: "BookStore/Card",
  component: Cards,
};

const Template = (args) => <Cards {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  key: 1,
  book: {
    title: "Sói Và Gia vị",
    description: "Một con sói muốn địt 1 con người"
  }
};
