import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:'35px'}} >
    {props.alert &&<div role="alert"
    class="relative flex w-full px-4 py-4 text-base text-gray-900 border border-gray-900 rounded-lg font-regular">
    <div class="mr-12 ">
      <span>{props.alert.msg}</span>
    </div>
  <strong>{props.alert.type}</strong>


</div>}

    </div>
    
  )
}
