import React from 'react'

function dataTable(props) {
  return (
    <>
      <td>{props.nama}</td>
      <td>{props.harga}</td>
      <td>{props.berat} kg</td>
    </>
  )
}

export default dataTable
