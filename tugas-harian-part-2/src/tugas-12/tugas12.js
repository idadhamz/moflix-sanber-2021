import React, { Component } from 'react'
import './tugas12.css'

import DataHargaBuah from './data/dataHargaBuah'
import DataTable from './components/dataTable'

export class tugas12 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataHargaBuah: DataHargaBuah,
      inputName: '',
      inputPrice: '',
      inputWeight: 0,

      currentDataHargaBuah: { nama: '', harga: '', berat: 0 },
      currentIndex: 0,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target

    let currentDataHargaBuah = { ...this.state.currentDataHargaBuah }
    currentDataHargaBuah[name] = value

    this.setState({ currentDataHargaBuah: { ...currentDataHargaBuah } })
    console.log(this.state.currentDataHargaBuah)
  }

  handleEdit(index) {
    this.setState({
      currentIndex: index,
      currentDataHargaBuah: { ...this.state.dataHargaBuah[index] },
    })
  }

  handleDelete(key) {
    this.setState({
      dataHargaBuah: this.state.dataHargaBuah.filter((a, i) => i !== key),
    })
    console.log(this.state.dataHargaBuah)
  }

  handleSubmit(event) {
    event.preventDefault()

    this.setState({
      dataHargaBuah: [
        ...this.state.dataHargaBuah,
        this.state.currentDataHargaBuah,
      ],
      currentDataHargaBuah: { nama: '', harga: '', berat: 0 },
    })
  }

  render() {
    return (
      <div>
        <div className="div_table">
          <div>
            <h1>Tabel Harga Buah</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Harga</th>
                <th>Buah</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {this.state.dataHargaBuah.length === 0 ? (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center' }}>
                    Tidak ada data
                  </td>
                </tr>
              ) : (
                this.state.dataHargaBuah.map((data, key) => {
                  return (
                    <tr key={key}>
                      <DataTable
                        no={key}
                        nama={data.nama}
                        harga={data.harga}
                        berat={data.berat / 1000}
                      />
                      <td style={{ width: '125px', textAlign: 'center' }}>
                        <button
                          className="buttonDelete"
                          onClick={() => this.handleDelete(key)}
                        >
                          Delete
                        </button>
                        <button
                          className="buttonEdit"
                          style={{ margin: '0 5px' }}
                          onClick={() => this.handleEdit(key)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>

          <div>
            <h1>Form Daftar Harga Buah</h1>
          </div>

          <div className="div_form">
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Nama: </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  autoComplete="off"
                  value={this.state.currentDataHargaBuah.nama}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div>
                <label>Harga: </label>
                <input
                  type="text"
                  id="harga"
                  name="harga"
                  autoComplete="off"
                  value={this.state.currentDataHargaBuah.harga}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div>
                <label>Berat (dalam gram): </label>
                <input
                  type="number"
                  id="berat"
                  name="berat"
                  autoComplete="off"
                  value={this.state.currentDataHargaBuah.berat}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div>
                <button className="buttonSubmit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default tugas12
