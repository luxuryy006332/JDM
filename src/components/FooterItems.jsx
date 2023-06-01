import React from 'react'


function FooterItems( {h3, info1, info2, info3} ) {
    return (
        <div className="design">
            <h3> {h3} </h3>
            <br />
            <p> {info1} <br />
                {info2}<br />
                {info3}</p>
        </div>
    )
}

export default FooterItems