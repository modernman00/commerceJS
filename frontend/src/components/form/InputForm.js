import React from 'react'
import { Form, Col } from "react-bootstrap"

export default function InputForm({data, Validate}) {

    const {type, label, attribute} = data

  //  let no = 0
    const style = {
        label: {
            color: 'blue',
            fontSize: 28,
            fontWeight: 'bold'
        },
        input: {
            borderColor: 'green',
            borderWidth: 5,
        }
    }


    const renderHtml = () => {
        if (type === 'select') {
            return <Form.Control
                as={type} name={attribute}
                onChange={Validate}
                style={style.input}>
                <option>Select</option>
             
            </Form.Control>
        } else if (type === 'image') {

            return <Form.Group>
                <Form.File id={attribute} 
                name ={attribute} 
                />
              
            </Form.Group>

        } else {
            return <Form.Control
                style={style.input}
                onChange={Validate}
                type={type}
                name={attribute}
                placeholder={label}
                autoComplete="on"
            />
        }
    }

    return (
        <Form.Group as={Col}>
            <Form.Label style={style.label}><b>{label} </b></Form.Label>
            {renderHtml()}
        </Form.Group>
    )

}
