import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './BooksList.css'

const BooksList = () => {
  const [dataBuku, setDataBuku] = useState(null)
  const [currentDataBuku, setCurrentDataBuku] = useState({
    title: '',
    description: '',
    review: '',
    release_year: 2020,
    totalPage: 0,
    price: 0,
    image_url: '',
  })

  const [isLoading, setIsLoading] = useState(true)
  const [currentId, setCurrentId] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (dataBuku === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/books`)
        .then((res) => {
          let data = res.data
          setDataBuku(data)
          setIsLoading(false)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }, [dataBuku])

  const searchHandleChange = (event) => {
    setSearch(event.target.value)
  }

  let updateBuku =
    dataBuku !== null
      ? dataBuku.filter((buku) => {
          return buku.title.toLowerCase().includes(search.toLocaleLowerCase())
        }, [])
      : []

  const handleChange = (event) => {
    let nameInput = event.target.name

    switch (nameInput) {
      case 'title': {
        setCurrentDataBuku({
          ...currentDataBuku,
          title: event.target.value,
        })
        break
      }
      case 'description': {
        setCurrentDataBuku({
          ...currentDataBuku,
          description: event.target.value,
        })
        break
      }
      case 'review': {
        setCurrentDataBuku({
          ...currentDataBuku,
          review: event.target.value,
        })
        break
      }
      case 'release_year': {
        setCurrentDataBuku({
          ...currentDataBuku,
          release_year: event.target.value,
        })
        break
      }
      case 'totalPage': {
        setCurrentDataBuku({
          ...currentDataBuku,
          totalPage: event.target.value,
        })
        break
      }
      case 'price': {
        setCurrentDataBuku({
          ...currentDataBuku,
          price: event.target.value,
        })
        break
      }
      case 'image_url': {
        setCurrentDataBuku({
          ...currentDataBuku,
          image_url: event.target.value,
        })
        break
      }
      default: {
        break
      }
    }
  }

  const handleEdit = (event) => {
    let idBuku = parseInt(event.target.value)

    axios
      .get(`http://backendexample.sanbercloud.com/api/books/${idBuku}`)
      .then((res) => {
        let data = res.data
        setCurrentDataBuku(data)
        setCurrentId(data.id)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const handleDelete = (event) => {
    let idBuku = parseInt(event.target.value)

    axios
      .delete(`http://backendexample.sanbercloud.com/api/books/${idBuku}`)
      .then((res) => {
        let newDataBuku = dataBuku.filter((el) => el.id !== idBuku)
        setDataBuku([...newDataBuku])
        console.log(res.data)
        alert('Data Berhasil Dihapus')
      })
      .catch((e) => {
        console.log(e)
      })
    if (currentId === idBuku) {
      setCurrentId(null)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let title = currentDataBuku.title
    let description = currentDataBuku.description
    let review = currentDataBuku.review
    let release_year = currentDataBuku.release_year
    let totalPage = currentDataBuku.totalPage
    let price = currentDataBuku.price.toString()
    let image_url = currentDataBuku.image_url

    if (currentId === null) {
      axios
        .post(`http://backendexample.sanbercloud.com/api/books`, {
          title,
          description,
          review,
          release_year,
          totalPage,
          price,
          image_url,
        })
        .then((res) => {
          alert('Data Berhasil Dibuat')
          setDataBuku([
            ...dataBuku,
            {
              id: res.data.id,
              title,
              description,
              review,
              release_year,
              totalPage,
              price,
              image_url,
            },
          ])
        })
        .catch((e) => {
          console.log(e)
        })
    } else {
      axios
        .put(`http://backendexample.sanbercloud.com/api/books/${currentId}`, {
          title,
          description,
          review,
          release_year,
          totalPage,
          price,
          image_url,
        })
        .then((res) => {
          console.log(res)
          console.log(res.data)
          alert('Data Berhasil Diedit')
          setDataBuku(null)
          setIsLoading(true)
        })
        .catch((e) => {
          console.log(e)
        })
    }
    setCurrentDataBuku({
      title: '',
      description: '',
      review: '',
      release_year: 0,
      totalPage: 0,
      price: 0,
      image_url: '',
    })
  }

  if (isLoading)
    return (
      <section>
        <h1>Data sedang dimuat...</h1>
      </section>
    )

  return (
    <div style={{ padding: '30px' }}>
      {dataBuku !== null && (
        <section>
          <div className="div_table">
            <div>
              <h1>Tabel Daftar Buku</h1>
            </div>
            <div style={{ margin: '20px 0', float: 'right' }}>
              <label style={{ fontSize: '16px', fontWeight: 'bold' }}>
                Cari Buku :{' '}
              </label>
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Tuliskan title buku..."
                autoComplete="off"
                style={{
                  margin: '0 10px',
                  borderRadius: '20px',
                  padding: '10px 15px',
                }}
                value={search}
                onChange={searchHandleChange}
              ></input>
            </div>
            <table>
              <thead>
                <tr>
                  <th width="40px">No</th>
                  <th width="150px">Title</th>
                  <th width="200px">Description</th>
                  <th width="150px">Review</th>
                  <th width="100px">Release Year</th>
                  <th width="100px">Total Page</th>
                  <th width="100px">Price</th>
                  <th width="150px">Cover</th>
                  <th width="200px">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {(search === '' ? dataBuku : updateBuku).map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.title}</td>
                      <td>{data.description}</td>
                      <td>{data.review}</td>
                      <td>{data.release_year}</td>
                      <td>{data.totalPage}</td>
                      <td>
                        {data.price.toLocaleString('id', {
                          style: 'currency',
                          currency: 'IDR',
                        })}
                      </td>
                      <td>
                        {data.image_url === null ? (
                          <span>Gambar Tidak Ada</span>
                        ) : (
                          <img
                            src={data.image_url}
                            style={{
                              width: '100px',
                              height: '100px',
                              objectFit: 'cover',
                            }}
                          ></img>
                        )}
                      </td>
                      <td style={{ width: '125px', textAlign: 'center' }}>
                        <button
                          className="buttonEdit"
                          style={{ margin: '0 5px' }}
                          onClick={handleEdit}
                          value={data.id}
                        >
                          Edit
                        </button>
                        <button
                          className="buttonDelete"
                          onClick={handleDelete}
                          value={data.id}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="div_form">
            <div>
              <h1>Form Daftar Buku</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Title: </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  autoComplete="off"
                  value={currentDataBuku.title}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <label>Description: </label>
                <textarea
                  id="description"
                  name="description"
                  value={currentDataBuku.description}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <div>
                <label>Review: </label>
                <textarea
                  id="review"
                  name="review"
                  value={currentDataBuku.review}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <div>
                <label>Release Year: </label>
                <input
                  type="number"
                  id="release_year"
                  name="release_year"
                  autoComplete="off"
                  value={currentDataBuku.release_year}
                  onChange={handleChange}
                  required
                  min="1980"
                ></input>
              </div>
              <div>
                <label>Total Page: </label>
                <input
                  type="number"
                  id="totalPage"
                  name="totalPage"
                  autoComplete="off"
                  value={currentDataBuku.totalPage}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <label>Price: </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  autoComplete="off"
                  value={currentDataBuku.price}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <label>Image URL: </label>
                <input
                  type="text"
                  id="image_url"
                  name="image_url"
                  autoComplete="off"
                  value={currentDataBuku.image_url}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <label></label>
                <button className="buttonSubmit">Submit</button>
              </div>
            </form>
          </div>
        </section>
      )}
    </div>
  )
}

export default BooksList
