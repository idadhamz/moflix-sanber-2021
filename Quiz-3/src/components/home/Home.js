import React, { Component } from 'react'
import axios from 'axios'
import './Home.css'

class home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataBuku: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    axios
      .get(`http://backendexample.sanbercloud.com/api/books`)
      .then((res) => {
        this.setState({ dataBuku: res.data, isLoading: false })
        console.log(this.state.dataBuku)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  render() {
    if (this.state.isLoading)
      return (
        <section>
          <h1>Data sedang dimuat...</h1>
        </section>
      )

    return (
      <div>
        <section>
          <h1>Daftar Buku-Buku Pilihan</h1>
          <div className="div-list-buku">
            {this.state.dataBuku.map((data, index) => (
              <div className="div-buku">
                <h2>
                  Buku {index + 1} {data.title}
                </h2>
                <div class="div-content-buku">
                  <img className="div-img" src={data.image_url}></img>
                  <div
                    style={{
                      padding: '0 30px',
                      fontWeight: 'bold',
                      fontSize: '16px',
                      margin: 'auto 0',
                    }}
                  >
                    <p>Tahun Terbit: {data.release_year}</p>
                    <p>Harga: {data.price}</p>
                    <p>Jumlah Halaman: {data.totalPage}</p>
                  </div>
                </div>
                <p style={{ fontSize: '16px' }}>
                  <span style={{ fontWeight: 'bold' }}>Deskripsi : </span>{' '}
                  {data.review}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  }
}

export default home
