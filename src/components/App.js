import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {CompoundComp} from './componundcomp/CompoundComp';
import {Container} from 'components/containerAndPresentnlComp/Container';
import {ErrorBoundary} from 'components/errorBoundary/ErrorBoundary';
import {ContextComponent} from 'components/contextcomp/ContextComp';
import {MyPureComponent} from 'components/purecomponent/PureComponent';
import {StyledComponent} from 'components/sytyledcomponent/StyledComponent';
import {NavBar} from 'components/common/NavBar';



function App() {
  
  return (
    <>
    <BrowserRouter>
    <Switch>
    <Route path="/styledcomponent">
      <StyledComponent/>
      </Route>
      <Route path="/compound">
      <CompoundComp/>
      </Route>
      <Route path="/container">
      <Container/>
      </Route>
      <Route path="/errorboundary">
      <ErrorBoundary/>
      </Route>
      <Route path="/contextcomp">
      <ContextComponent/>
      </Route>
      <Route path="/purecomponent">
      <MyPureComponent/>
      </Route>
    </Switch>    
    </BrowserRouter>
    <NavBar/>
    </>
  );
}

export default App;
