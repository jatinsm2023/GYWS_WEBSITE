import React from 'react'
import './page.css'
import Card from '../Card/card'
import data from '../memberdata'

export default function page() {
    return (

        <>
            <div className="members_container">
                {data.map((data,index)=>(
                    <Card key={index} name={data.name} position={data.position} imageUrl={data.imageUrl}/>
                ))}
            </div>
        </>

    )
}
