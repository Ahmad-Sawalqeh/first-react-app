/* eslint-disable no-unused-vars */
// import React from 'react';
// import '../src/setupTests.js';
import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Main from '../src/modules/Main.js';

describe('<Main /> (Enzyme Test)', () => {

  it('is alive at application start', () => {
    let app = shallow(<Main />);
    expect(app.find('h3').exisits()).toBeTruthy();
  });

  it('is alive at application start', () => {
    let app = mount(<Main />);
    let button = app.find('button');
    button.simulate('click');
    expect(app.state('counter')).toEqual(1);
    expect(app.find('h3').text()).toContain('1');// 1 as number not string
  });

  it('renders right', () => {

    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();

  });

});
