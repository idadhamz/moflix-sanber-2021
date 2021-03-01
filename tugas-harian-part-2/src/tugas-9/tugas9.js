import React from 'react'
import './tugas9.css'

function Tugas9() {
  return (
    <div>
      <div className="div_section">
        <div>
          <h1>Form Pembelian Buah</h1>
        </div>
        <form action="/" method="POST">
          <p>
            <label htmlFor="nama">Nama Pelanggan</label>
            <input type="text" id="nama" name="nama" />
          </p>
          <p>
            <label htmlFor="list-item">Daftar Item </label>

            <div>
              <input type="checkbox" id="buah1" name="buah1" value="semangka" />
              <label htmlFor="buah1"> Semangka</label>
            </div>
            <div>
              <input type="checkbox" id="buah2" name="buah2" value="jeruk" />
              <label htmlFor="buah2"> Jeruk</label>
            </div>
            <div>
              <input type="checkbox" id="buah3" name="buah3" value="nanas" />
              <label htmlFor="buah3"> Nanas</label>
            </div>
            <div>
              <input type="checkbox" id="buah4" name="buah4" value="salak" />
              <label htmlFor="buah4"> Salak</label>
            </div>
            <div>
              <input type="checkbox" id="buah5" name="buah5" value="anggur" />
              <label htmlFor="buah5"> Anggur</label>
            </div>
          </p>
          <p>
            <input type="submit" className="submit-button" value="Kirim" />
          </p>
        </form>
      </div>
    </div>
  )
}

export default Tugas9
