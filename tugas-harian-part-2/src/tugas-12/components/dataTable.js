import React, { Component } from 'react'

export class dataTable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <td>{this.props.no + 1}</td>
        <td>{this.props.nama}</td>
        <td>{this.props.harga}</td>
        <td>{this.props.berat} kg</td>
      </>
    )
  }
}

export default dataTable
