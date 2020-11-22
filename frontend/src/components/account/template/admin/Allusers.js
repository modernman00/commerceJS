import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { showAll } from '../../../../api/showAll'
import AllUser2 from './AllUser2'

function AllUsers() {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            await axios.get("http://localhost:5000/Signup/show")
                .then(response => { setData(response.data) })
                .catch(error => { console.log(error) })
        }
        getData()
    }, [])
    console.log(data)
    return (
        <React.Fragment>
            <div className="w3-twothird">
                <h5>Feeds</h5>
                <table className="w3-table w3-striped w3-white" style ={{ marginLeft: 350, marginTop: 5 }}>
                    <tr>
                        <th>Username</th>
                         <th>Location</th>
                          <th>Email</th>
                    </tr>

                    {
                        data.map(el => {
                            return <AllUser2 key ={el.id} 
                            name={el.username} 
                            email={el.email} 
                            location={'London'} />
                        })
                    }
                </table>
            </div>

        </React.Fragment>
    )
}

export default AllUsers
