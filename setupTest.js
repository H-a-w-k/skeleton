import Enzyme, { shallow, render } from "enzyme";
import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

chai.should();
chai.use(sinonChai);

global.shallow = shallow;
global.render = render;
global.sinon = sinon;
global.jestExpect = expect;
global.expect = chai.expect;
