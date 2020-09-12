import React from "react";

import NavbarMain from "../components/NavbarMain/NavbarMain";

export default {
  title: "BookStore/NavBar",
  component: NavbarMain,
};

const Template = (args) => <NavbarMain {...args} />;

export const DefaultNarBar = Template.bind({});
DefaultNarBar.args = {};
