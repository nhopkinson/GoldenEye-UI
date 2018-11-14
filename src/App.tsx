import * as React from "react";
import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <nav className="topNav">
          <a href="/">Home </a>
          <a href="/about">About </a>
          <a href="/contact">Contact </a>
          <br />
        </nav>
        <header className="App-header">
          <h1 className="App-title">Welcome to goldeneye.ui</h1>
        </header>
        <p className="App-intro"> Use this app to store files of all types.</p>

        <form className="Form" action="/signin" method="post">
          <p>
            <label>
              <b />
              Sign In <br /> <br />
              First name
            </label>
            <br />
            <input type="text" name="first_name" />
          </p>
          <p>
            <label>Last name</label>
            <br />
            <input type="text" name="last_name" />
          </p>
          <p>
            <label>Email</label>
            <br />
            <input type="email" name="email" />
          </p>
          <p>
            <label>Cell Phone number</label>
            <br />
            <input type="tel" name="phone" />
          </p>
          <p>
            <label>Password</label>
            <br />
            <input type="password" name="password" />
          </p>

          <p>
            <label>
              <input type="checkbox" value="terms" />I agree to the{" "}
              <a href="/terms">terms and conditions</a>
            </label>
          </p>
          <p>
            <button>Sign up</button>
            <button type="reset">Reset form</button>
          </p>
        </form>

        <p>
          <form className="Upload">
            <fieldset>
              <legend>Upload your file: </legend>
              <button>Upload</button>
            </fieldset>
          </form>
        </p>
      </div>
    );
  }
}

export default App;
