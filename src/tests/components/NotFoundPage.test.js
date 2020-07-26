import React from "react";
import NotFoundPage from "../../components/NotFoundPage";
import { shallow } from "enzyme";
//import toJSON from "enzyme-to-json";

test("should render header correctly", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
