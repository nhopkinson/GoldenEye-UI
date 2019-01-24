import * as React from 'react';
import { Grid, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FileUpload } from './ui/file-upload.component';
import { NavBar } from './ui/nav-bar.component';
import { RandomUser } from './ui/random-user/random-user.component';
import { RegistrationForm } from './ui/registration-form/registration-form.component';

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <Router>
        <>
          <NavBar />
          <Grid>
            <Row>
              <Route exact={true} path="/file-upload" component={FileUpload} />
              <Route exact={true} path="/registration-form" component={RegistrationForm} />
              <Route exact={true} path="/random-user" component={RandomUser} />
              <Route exact={true} path="/multiple-user" component={RandomUser} />
            </Row>
          </Grid>
        </>
      </Router>
    );
  }
}

export default App;
