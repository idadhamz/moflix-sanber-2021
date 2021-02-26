import React from 'react'
import './tugas9.css'

function tugas9() {
  return (
    <div>
      <div>
        <h1>Form Pembelian Buah</h1>
      </div>
      <div class="div_section">
        <form action="/" method="POST">
          <p>
            <label for="nama">Nama Pelanggan</label>
            <input type="text" id="nama" name="nama" />
          </p>
          <p>
            <label for="list-item">Daftar Item </label>

            <div>
              <input type="checkbox" id="buah1" name="buah1" value="semangka" />
              <label for="buah1"> Semangka</label>
            </div>
            <div>
              <input type="checkbox" id="buah2" name="buah2" value="jeruk" />
              <label for="buah2"> Jeruk</label>
            </div>
            <div>
              <input type="checkbox" id="buah3" name="buah3" value="nanas" />
              <label for="buah3"> Nanas</label>
            </div>
            <div>
              <input type="checkbox" id="buah4" name="buah4" value="salak" />
              <label for="buah4"> Salak</label>
            </div>
            <div>
              <input type="checkbox" id="buah5" name="buah5" value="anggur" />
              <label for="buah5"> Anggur</label>
            </div>
          </p>
          <p>
            <input type="submit" class="submit-button" value="Kirim" />
          </p>
        </form>
      </div>
    </div>
  )
}

export default tugas9
