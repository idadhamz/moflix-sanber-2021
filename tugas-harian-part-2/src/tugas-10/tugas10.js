import React from 'react'
import './tugas10.css'

import DataTable from './components/dataTable'

import DataHargaBuah from '../data/dataHargaBuah'

function tugas10() {
  return (
    <div>
      <div>
        <h1>Tabel Harga Buah</h1>
      </div>
      <div class="div_table">
        <table>
          <thead>
            <th>Nama</th>
            <th>Harga</th>
            <th>Buah</th>
          </thead>
          <tbody>
            {DataHargaBuah.map((data) => {
              return (
                <DataTable
                  nama={data.nama}
                  harga={data.harga}
                  berat={data.berat}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default tugas10
