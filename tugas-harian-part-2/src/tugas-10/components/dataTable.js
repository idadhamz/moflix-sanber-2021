import React from 'react'

function dataTable(props) {
  return (
    <>
      <td>{props.nama}</td>
      <td>{props.harga}</td>
      <td>{props.berat}</td>
    </>
  )
}

export default dataTable
