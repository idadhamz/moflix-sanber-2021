import React, { useContext, useEffect, useState } from 'react'
import { BuahContext } from './BuahContext'
import axios from 'axios'

import DataTable from './components/dataTable'

const BuahList = () => {
  const [dataHargaBuah, setDataHargaBuah, idBuah, setIdBuah] = useContext(
    BuahContext,
  )

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

  const handleEdit = (event) => {
    let idDataBuah = parseInt(event.target.value)

    axios
      .get(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
      .then((res) => {
        let dataBuah = res.data
        setIdBuah(idDataBuah)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const handleDelete = (event) => {
    let idDataBuah = parseInt(event.target.value)

    let newdataHargaBuah = dataHargaBuah.filter((el) => el.id !== idDataBuah)
    setDataHargaBuah([...newdataHargaBuah])

    axios
      .delete(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
      .then((res) => {
        console.log(res.data)
        alert('Data Berhasil Dihapus')
      })
      .catch((e) => {
        console.log(e)
      })
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
                            onClick={handleDelete}
                            value={data.id}
                          >
                            Delete
                          </button>
                          <button
                            className="buttonEdit"
                            style={{ margin: '0 5px' }}
                            onClick={handleEdit}
                            value={data.id}
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
          </div>
        </div>
      )}
    </>
  )
}

export default BuahList
