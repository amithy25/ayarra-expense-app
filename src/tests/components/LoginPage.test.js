import React from "react";
import { LoginPage } from "../../components/LoginPage";
import { shallow } from "enzyme";
import { startLogin } from "../../actions/auth";

test("should login ", () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test("should call start login on button click", () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find("button").simulate("click");
  expect(startLogin).toHaveBeenCalled();
});
