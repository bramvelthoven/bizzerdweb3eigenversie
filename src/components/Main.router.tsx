import React from 'react';
import '../scss/layout.scss';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Shop from "./Shop/Shop.container";
export default class MainRouter extends React.Component {
    render():JSX.Element {
      return <BrowserRouter >
          <section  className="flowContainer">
          <Switch>
              <Route  path={'/'}><Shop/></Route>
          </Switch>
          </section>
      </BrowserRouter>
    }
  }

/*
TODO:
-    ProgressBar > Stepper
-    Routing based on Stepper
-    Essentials Form
-    Socials Form
-    Logo/Picture
-    Colors
-    Preview
-    Finishing touches
*/