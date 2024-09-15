import React, { useContext } from 'react'
import { IncreContext } from '../context/ContextProvider'

const About = () => {

    const {data,incre} = useContext(IncreContext)
  return (
    <div>About

        <h1>{data}</h1>
        <button onClick={incre}>click</button>
    </div>
  )
}

export default About