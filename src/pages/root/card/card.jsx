import React from 'react'

import '../card/styles.css'

export default function  Card (props){
    return(
        <div className="card">
            <div className="card-title">
            <h1>- {props.name} -</h1>
            </div>
            <section>
            <p className="card-text">
            {props.text}

                </p>
            </section>
        </div>
    )
}


