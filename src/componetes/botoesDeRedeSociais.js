import React from 'react'

export default function (props) {
    return (<address id='botoesDeRedeSociais'>
        <ul>
            <li><a href={props.link[0]}> <img src={props.src[0]} /></a></li>
            <li><a href={props.link[1]}><img src={props.src[1]}/></a></li>
            <li><a href={props.link[2]}><img src={props.src[2]}/></a></li>
            <li><a href={props.link[3]}><img src={props.src[3]}/></a></li>
            <li><a href={props.link[4]}><img src={props.src[4]}/></a></li>
        </ul>
    </address>)
}