import React, { Fragment } from 'react';
import { Table } from 'reactstrap';

const ReactTable = ({ values }) => {
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
                    </tr>
                </thead>
                <tbody>
                    {
                        values.map((value, index) => {
                            return <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                                <td>{value.password}</td>
                                <td>{value.text}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </Fragment>

    );
}

export default ReactTable;