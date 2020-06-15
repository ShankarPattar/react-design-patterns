import React, {useState} from 'react';
import { createGlobalStyle, ThemeProvider} from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from 'components/pages/Login';
import Home from 'components/pages/Home';
import LightTheme from 'themes/light';
import DarkTheme from 'themes/dark';


const GlobalStyle = createGlobalStyle`
body{
  background:white;
  min-height:100vh;
  margin:0;
  color:black;
  font-family:'Kaushan Script';
}
`;

function StyledComponent() {

  const [theme,setTheme]= useState(LightTheme);

  return (
    <>
  <ThemeProvider theme = {{...theme, setTheme:() => {
      setTheme(s => s.id === 'light' ? DarkTheme : LightTheme);
  }}}>
  
    <BrowserRouter>
    <GlobalStyle/>  
    <Switch>
      <Route path="/styledcomponent/login">
        <Login/>
      </Route>
      <Route path="/styledcomponent/">
          <Home/>
      </Route>
      
    </Switch>
    </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export {StyledComponent};
