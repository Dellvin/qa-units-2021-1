jest.mock('../utils/getDate');

import React from 'react'
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Order from "./Order";
import {getDate} from "../utils/getDate";

Enzyme.configure({ adapter: new Adapter() })

describe('Order', () => {


  it('undefined order.shops and order.date', () => {
    getDate.mockReturnValue('26 декабря, пн, 2000 год');
    const order = {
      date: undefined,
      shop: undefined,
    };

    const output = shallow(
        <Order order={order} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Order props', () => {
    getDate.mockReturnValue('26 декабря, пн, 2000 год');
    const order = {
      date: 127001,
      shop: 'ozon',
      items: ['1234', '2374123']
    };

    const output = shallow(
        <Order order={order} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('undefined order.items', () => {
    getDate.mockReturnValue('26 декабря, пн, 2000 год');
    const order = {
      date: 1541111800,
      shop: 'ozon',
      items: undefined,
    };

    const output = shallow(
        <Order order={order} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('undefined order', () => {
    getDate.mockReturnValue('26 декабря, пн, 2000 год');
    const order = undefined;

    const output = shallow(
        <Order order={order} />
    );
    expect(output).toEqual({});
  });

  it('render no props', () => {
    getDate.mockReturnValue('26 декабря, пн, 2000 год');
    const output = shallow(
        <Order />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('order.items empty', () => {
    getDate.mockReturnValue('26 декабря, пн, 2000 год');
    const order = {
      date: 872341,
      shop: 'ozon',
      items: [],
    };

    const output = shallow(
        <Order order={order} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('undefined order.date', () => {
    getDate.mockReturnValue('26 декабря, пн, 2000 год');
    const order = {
      date: undefined,
    };

    const output = shallow(
        <Order order={order} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('undefined order.shop', () => {
    getDate.mockReturnValue('26 декабря, пн, 2000 год');
    const order = {
      shop: undefined,
    };

    const output = shallow(
        <Order order={order} />
    );
    expect(shallowToJson(output)).toMatchSnapshot()
  });
  it('check times', () => {
    expect(getDate).toHaveBeenCalledTimes(3);
  });
});