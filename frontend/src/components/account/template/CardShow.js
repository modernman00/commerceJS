import React from 'react'
// import { Card, Button } from "react-bootstrap"

export default function CardShow({ info, no }) {
    const { username, email, password } = info
    let style = `style${no}`
 
    return (


        <article className={style}>
            <span className="image">
                <img src = {require(`./../../../img/pic${no}.jpg`)} alt="family"/>
    
            </span>
            <a href="generic.html">
                <h2>{username}</h2>
                <div className="content">
                    <p>{email}</p>
                    <p>{password}</p>
                </div>
            </a>
        </article>


    )
}
