import React from 'react'

const DataTable = (props) => {
  return (
    <>
      <td>{props.no + 1}</td>
      <td>{props.nama}</td>
      <td>{props.harga}</td>
      <td>{props.berat} kg</td>
    </>
  )
}

export default DataTable
