import React from 'react'
import './tugas10.css'

import DataTable from './components/dataTable'

import DataHargaBuah from './data/dataHargaBuah'

function tugas10() {
  return (
    <div>
      <div>
        <h1>Tabel Harga Buah</h1>
      </div>
      <div className="div_table">
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Buah</th>
            </tr>
          </thead>
          <tbody>
            {DataHargaBuah.map((data, index) => {
              return (
                <tr key={index}>
                  <DataTable
                    nama={data.nama}
                    harga={data.harga}
                    berat={data.berat / 1000}
                  />
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default tugas10
