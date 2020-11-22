import React, { useState, useEffect } from 'react'
import axios from "axios"
import CardShow from "./account/template/CardShow"
import { notAuthenticated } from './helper/authenticate';

export default function ShowAll2() {
    let no = 1
    const [data, setData] = useState([])
    useEffect(() => {
        notAuthenticated('token', 'user', '/login')
        async function getData() {
            const response = await axios.get("http://localhost:5000/Signup/show")
            setData(response.data)
        }
        // const data = showAll()
        // setData(data)
         getData()
    },[])
    return (
        <div className="tiles">
            {
                data.map(el => {
                    no++
                    return <CardShow key={el._id} info={el} no={no} />
                })
            }

        </div>
    )
}
