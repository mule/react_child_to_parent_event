import React from 'react'

export default function Child(props : any){

  return (<><span> I am a child with a button:</span> <button onClick={props.tellParent}>Press me</button>    </>);
} 