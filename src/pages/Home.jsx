import React, { useContext } from 'react'
import { IncreContext } from '../context/ContextProvider'

const Home = () => {

    const {data,incre} = useContext(IncreContext)
  return (
    <div>Home


        <h1>{data}</h1>
        <button onClick={incre}>click</button>
    </div>
  )
}

export default Home