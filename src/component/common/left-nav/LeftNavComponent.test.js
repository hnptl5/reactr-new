import React from "react";
import LeftNavComponent from "./LeftNavComponent";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

it("contains NavLinks", () => {
  const numLinks = shallow(<LeftNavComponent />).find("NavLink").length;
  expect(numLinks).toEqual(8);
});
