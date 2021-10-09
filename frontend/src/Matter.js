import { useEffect, useRef } from 'react'
import { Engine } from 'matter-js'

function Comp(props){
  const scene = useRef()
  const engine = useRef(Engine.create())
  
  return (
     <div>hi</div>
  )
}

export default Comp