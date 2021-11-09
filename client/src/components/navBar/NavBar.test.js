import { shallow } from "enzyme";
import { NavBar } from "./NavBar";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
describe("Shallow Navbar Component", () => {
  it("classname check", () => {
    let wrapper = shallow(<NavBar />);
    expect(wrapper.exists(".topLeft", ".topListItem")).toEqual(true);
  });
  it("object check", () => {
    let wrapper = shallow(<NavBar />);
    console.log(wrapper);
  });
});
