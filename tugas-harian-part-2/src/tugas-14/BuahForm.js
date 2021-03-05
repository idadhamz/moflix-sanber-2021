import React, { useContext, useState, useEffect } from 'react'
import { BuahContext } from './BuahContext'
import axios from 'axios'

const BuahForm = () => {
  // context
  const { dataHargaBuahState, idBuahState } = useContext(BuahContext)

  const [dataHargaBuah, setDataHargaBuah] = dataHargaBuahState
  const [idBuah, setIdBuah] = idBuahState

  // state
  const [currentDataHargaBuah, setCurrentDataHargaBuah] = useState({
    name: '',
    price: '',
    weight: '',
    id: null,
  })

  useEffect(() => {
    if (idBuah !== null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
        .then((res) => {
          let data = res.data
          setCurrentDataHargaBuah(data)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }, [idBuah])

  const handleChange = (event) => {
    let nameInput = event.target.name

    switch (nameInput) {
      case 'name': {
        setCurrentDataHargaBuah({
          ...currentDataHargaBuah,
          name: event.target.value,
        })
        break
      }
      case 'price': {
        setCurrentDataHargaBuah({
          ...currentDataHargaBuah,
          price: event.target.value,
        })
        break
      }
      case 'weight': {
        setCurrentDataHargaBuah({
          ...currentDataHargaBuah,
          weight: event.target.value,
        })
        break
      }
      default: {
        break
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let name = currentDataHargaBuah.name
    let price = currentDataHargaBuah.price.toString()

    if (currentDataHargaBuah.id === null) {
      axios
        .post(`http://backendexample.sanbercloud.com/api/fruits`, {
          name,
          price,
          weight: currentDataHargaBuah.weight,
        })
        .then((res) => {
          setDataHargaBuah([
            ...dataHargaBuah,
            {
              id: res.data.id,
              name,
              price,
              weight: currentDataHargaBuah.weight,
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
          `http://backendexample.sanbercloud.com/api/fruits/${currentDataHargaBuah.id}`,
          {
            name,
            price,
            weight: currentDataHargaBuah.weight,
          },
        )
        .then((res) => {
          console.log(res)
          console.log(res.data)
          let dataBuah = dataHargaBuah.find(
            (el) => el.id === currentDataHargaBuah.id,
          )
          dataBuah.name = name
          dataBuah.price = price
          dataBuah.weight = currentDataHargaBuah.weight
          setDataHargaBuah([...dataHargaBuah])

          alert('Data Berhasil Diedit')
        })
        .catch((e) => {
          console.log(e)
        })
    }
    setCurrentDataHargaBuah({ name: '', price: '', weight: 0, id: null })
  }

  return (
    <>
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
    </>
  )
}

export default BuahForm
