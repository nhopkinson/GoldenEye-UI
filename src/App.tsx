import * as React from 'react';
import { Grid, Row } from 'react-bootstrap';
import { FileUpload } from './ui/file-upload.component';
import { NavBar } from './ui/nav-bar.component';
import { RegistrationForm } from './ui/registration-form/registration-form.component';

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <>
        <NavBar />
        <Grid>
          <Row>
            <h2>Registration Form</h2>
            <RegistrationForm />
          </Row>
          <Row>
            <h2>File Upload</h2>
            <FileUpload />
          </Row>
        </Grid>
      </>
    );
  }
}

export default App;
