import React from 'react'

function dataTable(props) {
  return (
    <>
      <tr>
        <td>{props.nama}</td>
        <td>{props.harga}</td>
        <td>{props.berat}</td>
      </tr>
    </>
  )
}

export default dataTable
