import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactForm from "./components/ReactForm"
import './App.css';

function App(props) {

  return (
    <Fragment>
      <Container className="mt-5">
        <ReactForm />
      </Container>
    </Fragment>
  );
}

export default App;
