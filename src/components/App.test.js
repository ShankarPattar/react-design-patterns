import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {CompoundComp} from './componundcomp/CompoundComp';
import {Container} from 'components/containerAndPresentnlComp/Container';
import {ErrorBoundary} from 'components/errorBoundary/ErrorBoundary';
import {ContextComponent} from 'components/contextcomp/ContextComp';
import {MyPureComponent} from 'components/purecomponent/PureComponent';
import {StyledComponent} from 'components/sytyledcomponent/StyledComponent';
import {NavBar} from 'components/common/NavBar';



describe("App", () => {
    let app = shallow(<App/>); 

        it('Browser Router', ()=>{
            expect(app.find('BrowserRouter').exists()).toBe(true);
        })

        it('Switch', ()=>{
            expect(app.find('Switch').exists()).toBe(true);
        })

        it('Route', ()=>{
            expect(app.find('Route').exists()).toBe(true);
        })

        it('StyledComponent', ()=>{
                expect(app.find('StyledComponent').exists()).toBe(true);
        })

        it('MyPureComponent', ()=>{
            expect(app.find('MyPureComponent').exists()).toBe(true);
        })

        it('ContainerAndPresentationaComponent', ()=>{
            expect(app.find('Container').exists()).toBe(true);
        })

        it('ErrorBoundary', ()=>{
            expect(app.find('ErrorBoundary').exists()).toBe(true);
        })

        it('CompoundComp', ()=>{
            expect(app.find('CompoundComp').exists()).toBe(true);
        })

        it('ContextComponent', ()=>{
            expect(app.find('ContextComponent').exists()).toBe(true);
        })
        
        it('ContextComponent', ()=>{
            expect(app.find('ContextComponent').exists()).toBe(true);
        })
        
        it('NavBar', ()=>{
            expect(app.find('NavBar').exists()).toBe(true);
        })
        
});