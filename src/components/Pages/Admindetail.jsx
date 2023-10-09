import React from 'react'
import Getdata from './GetData'
import Postdata from './PostData'
import PutData from './PutData'
import Delete from './Delete'

const Admindetail = () => {
  return (
    <div>
      <h1>Registeration Crud Operation</h1>
      <Getdata></Getdata>
      <Postdata></Postdata>
      {/* <PutData></PutData> */}
      <Delete></Delete>
    </div>
  )
}

export default Admindetail
