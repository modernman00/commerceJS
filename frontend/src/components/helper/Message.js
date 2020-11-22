import React from 'react';
import { Alert } from "react-bootstrap"

export const message = (type, msg) => {
    let typeCol;
    typeCol = (type === "error") ? 'danger' : 'success'
    return (
    <Alert variant={msg && typeCol}>
        {msg}
    </Alert>
    )
}