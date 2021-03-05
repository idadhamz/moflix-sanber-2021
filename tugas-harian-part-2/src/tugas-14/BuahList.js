import React, { useContext, useEffect } from 'react'
import { BuahContext } from './BuahContext'
import axios from 'axios'

import DataTable from './components/dataTable'

const BuahList = () => {
  // context versi panjang
  // const [dataHargaBuah, setDataHargaBuah, idBuah, setIdBuah] = useContext(
  //   BuahContext,
  // )

  const { dataHargaBuahState, idBuahState } = useContext(BuahContext)

  const [dataHargaBuah, setDataHargaBuah] = dataHargaBuahState
  const [idBuah, setIdBuah] = idBuahState

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
    setIdBuah(idDataBuah)
  }

  const handleDelete = (event) => {
    let idDataBuah = parseInt(event.target.value)

    axios
      .delete(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
      .then((res) => {
        let newdataHargaBuah = dataHargaBuah.filter(
          (el) => el.id !== idDataBuah,
        )
        setDataHargaBuah([...newdataHargaBuah])
        console.log(res.data)
        alert('Data Berhasil Dihapus')
      })
      .catch((e) => {
        console.log(e)
      })
    if (idBuah === idDataBuah) {
      setIdBuah(null)
    }
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
