import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './tugas13.css'

import DataTable from './components/dataTable'

const Tugas13 = () => {
  const [dataHargaBuah, setDataHargaBuah] = useState(null)
  const [currentDataHargaBuah, setCurrentDataHargaBuah] = useState({
    name: '',
    price: '',
    weight: 0,
  })
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    if (dataHargaBuah === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then((res) => {
          let data = res.data
          setDataHargaBuah(data)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }, [dataHargaBuah])

  const handleChange = (event) => {
    const { name, value } = event.target
    let currentDataHargaBuahInput = currentDataHargaBuah
    currentDataHargaBuahInput[name] = value
    setCurrentDataHargaBuah({ ...currentDataHargaBuahInput })
  }

  const handleEdit = (id) => {
    axios
      .get(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
      .then((res) => {
        let data = res.data
        setCurrentDataHargaBuah(data)
        setCurrentId(data.id)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const handleDelete = (id) => {
    axios
      .delete(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
      .then((res) => {
        console.log(res.data)
        alert('Data Berhasil Dihapus')
        let newDataHargaBuah = dataHargaBuah.filter((el) => {
          return el.id !== id
        })
        setDataHargaBuah(newDataHargaBuah)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (currentId === null) {
      // untuk create data baru
      axios
        .post(`http://backendexample.sanbercloud.com/api/fruits`, {
          ...currentDataHargaBuah,
        })
        .then((res) => {
          console.log(res)
          console.log(res.data)

          let data = res.data
          setDataHargaBuah([...dataHargaBuah, data])

          alert('Data Berhasil Dibuat')
        })
        .catch((e) => {
          console.log(e)
        })
    } else {
      // untuk edit atau update
      axios
        .put(`http://backendexample.sanbercloud.com/api/fruits/${currentId}`, {
          ...currentDataHargaBuah,
        })
        .then((res) => {
          console.log(res)
          console.log(res.data)
          setDataHargaBuah(null)

          alert('Data Berhasil Diedit')
        })
        .catch((e) => {
          console.log(e)
        })
    }
    setCurrentDataHargaBuah({ name: '', price: '', weight: 0 })
    setCurrentId(null)
  }

  return (
    <>
      {dataHargaBuah !== null && (
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
                {dataHargaBuah.length === 0 ? (
                  <tr>
                    <td colSpan="6" style={{ textAlign: 'center' }}>
                      Tidak ada data
                    </td>
                  </tr>
                ) : (
                  dataHargaBuah.map((data, index) => {
                    return (
                      <tr key={index}>
                        <DataTable
                          no={index}
                          nama={data.name}
                          harga={data.price}
                          berat={data.weight / 1000}
                        />
                        <td style={{ width: '125px', textAlign: 'center' }}>
                          <button
                            className="buttonDelete"
                            onClick={() => handleDelete(data.id)}
                          >
                            Delete
                          </button>
                          <button
                            className="buttonEdit"
                            style={{ margin: '0 5px' }}
                            onClick={() => handleEdit(data.id)}
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
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Nama: </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="off"
                    value={currentDataHargaBuah.name}
                    onChange={handleChange}
                  ></input>
                </div>
                <div>
                  <label>Harga: </label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    autoComplete="off"
                    value={currentDataHargaBuah.price}
                    onChange={handleChange}
                  ></input>
                </div>
                <div>
                  <label>Berat (dalam gram): </label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    autoComplete="off"
                    value={currentDataHargaBuah.weight}
                    onChange={handleChange}
                  ></input>
                </div>
                <div>
                  <button className="buttonSubmit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Tugas13
