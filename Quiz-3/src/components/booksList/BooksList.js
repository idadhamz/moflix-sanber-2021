import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './BooksList.css'

const BooksList = () => {
  const [dataBuku, setDataBuku] = useState(null)
  const [currentDataBuku, setCurrentDataBuku] = useState({
    title: '',
    description: '',
    review: '',
    release_year: 0,
    totalPage: 0,
    price: 0,
    image_url: '',
  })

  const [isLoading, setIsLoading] = useState(true)

  const [currentId, setCurrentId] = useState(null)

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
      .get(`http://backendexample.sanbercloud.com/api/fruits/${idBuku}`)
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
      .delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuku}`)
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

    if (currentDataBuku.id === null) {
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
          alert('Data Berhasil Dibuat')
        })
        .catch((e) => {
          console.log(e)
        })
    } else {
      axios
        .put(
          `http://backendexample.sanbercloud.com/api/books/${currentDataBuku.id}`,
          {
            title,
            description,
            review,
            release_year,
            totalPage,
            price,
            image_url,
          },
        )
        .then((res) => {
          console.log(res)
          console.log(res.data)
          let dataBuku = dataBuku.find((el) => el.id === currentDataBuku.id)
          dataBuku.title = title
          dataBuku.description = description
          dataBuku.review = review
          dataBuku.release_year = release_year
          dataBuku.totalPage = totalPage
          dataBuku.price = price
          dataBuku.image_url = image_url
          setDataBuku([...dataBuku])

          alert('Data Berhasil Diedit')
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
    <>
      {dataBuku !== null && (
        <section>
          <div>
            <label style={{ fontSize: '16px', fontWeight: 'bold' }}>
              Cari Buku :{' '}
            </label>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Tuliskan data buku..."
              autoComplete="off"
              style={{
                margin: '0 10px',
                borderRadius: '20px',
                padding: '10px 15px',
              }}
            ></input>
          </div>
          <div className="div_table">
            <div>
              <h1>Tabel Daftar Buku</h1>
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
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {dataBuku.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.title}</td>
                      <td>{data.description}</td>
                      <td>{data.review}</td>
                      <td>{data.release_year}</td>
                      <td>{data.totalPage}</td>
                      <td>{data.price}</td>
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
                })}
              </tbody>
            </table>

            <div>
              <h1>Form Daftar Buku</h1>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default BooksList
