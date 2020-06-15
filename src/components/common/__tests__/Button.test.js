import React from 'react';
import {shallow} from 'enzyme';
import {Button} from './../../common/Button';

describe('Button component', ()=>{
    let btn = shallow(<Button/>)
    it("test button", ()=> {
        expect(btn.find('button').exists()).toBe(true);
    })
})