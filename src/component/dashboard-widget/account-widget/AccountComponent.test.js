import React from "react";
import AccountComponent from "./AccountComponent";
import { shallow } from "enzyme";

function renderAccountComponent(args) {
  const defaultProps = {
    accountNumber: "203145632",
    availableBalance: 132153,
    nickname: "MyBOA Account",
    institution: {
      displayName: "BOFA"
    },
    presentBalance: 31565,
    type: 1
  };

  const props = { ...{ data: defaultProps }, ...args };
  return shallow(<AccountComponent {...props} />);
}

it("Show Account NickName", () => {
  const accountSection = renderAccountComponent();
  expect(accountSection.find("h6").text()).toEqual("MyBOA Account");
});

it("Show Account AvailableBalance", () => {
  const accountSection = renderAccountComponent();
  expect(accountSection.find("h5").text()).toEqual("$132,153.00");
});
