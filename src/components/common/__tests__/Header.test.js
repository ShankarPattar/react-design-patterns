import React from 'react';
import { mount} from 'enzyme';
import {Header} from './../../common/Header';
import {fireEvent} from '@testing-library/react';

const p = {pathname:"/styledcomponent/home",menuOpen:'false'};

const mock = jest.fn();
mock.mockReturnValue("/styledcomponent/home");

describe('Button component', ()=>{
    let btn = mount(<Header props ={p} />)
    it("test button", ()=> {
        console.log(btn.debug())
        //expect(btn.find('button').exists()).toBe(true);
    })
})