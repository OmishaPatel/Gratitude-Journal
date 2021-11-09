import { shallow } from "enzyme";
import { Sidebar } from "./Sidebar";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("Shallow Sidebar Component", () => {
  it("should render", () => {
    let wrapper = shallow(<Sidebar />);
    expect(wrapper.find("span").text()).toBe("Quote of the Day");
  });
});
