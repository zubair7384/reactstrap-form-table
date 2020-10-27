import React, { Fragment, useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ReactTable from "./ReactTable"

const ReactForm = (props) => {
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        text: "",
    })

    const [values, setValues] = useState([])

    const onHandleChange = (e) => {
        const target = e.target
        setState({
            ...state,
            [target.name]: target.value
        })
    }

    const onFormSubmit = async (e) => {

        e.preventDefault()

        try {
            const { name, email, password, text } = state
            const response = await fetch('http://localhost:5000/tform', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, text })
            })
            setValues([...values, state])

        } catch (err) {
            console.error(err.message)
        }


    }

    const getTable = async () => {
        try {
            const response = await fetch("http://localhost:5000/tform");
            const jsonData = await response.json();
            setValues(jsonData);

        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getTable();
    }, [])

    return (
        <Fragment>
            <h1 className="text-center">React Strap Form</h1>
            <Form onSubmit={onFormSubmit} >
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="name" name="name" onChange={onHandleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={onHandleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" onChange={onHandleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" onChange={onHandleChange} />
                </FormGroup>
                <Button color="btn btn-info btn-lg btn-block">Submit</Button>
            </Form>
            <ReactTable values={values}></ReactTable>
        </Fragment>
    );
}

export default ReactForm;