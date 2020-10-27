import React, { Fragment } from 'react';
import { Table, Button } from 'reactstrap';

const ReactTable = (props) => {


    const handleClick = async (id) => {
        try {
            const deleteRow = await fetch(`http://localhost:5000/tform/${id}`, {
                method: "DELETE"
            })

            window.location = "/"
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <Table dark className="mt-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Text</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.values.map((value, index) => {
                            return <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                                <td>{value.password}</td>
                                <td>{value.text}</td>
                                <td><Button color="danger" onClick={(() => handleClick(value.id))} >Delete</Button></td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </Fragment>

    );
}

export default ReactTable;