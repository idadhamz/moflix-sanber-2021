import React, { useState, createContext } from 'react'

// import DataBuahHarga from './data/dataHargaBuah'

export const BuahContext = createContext()

export const BuahProvider = (props) => {
  const [dataHargaBuah, setDataHargaBuah] = useState(null)
  const [idBuah, setIdBuah] = useState(null)

  const valueState = {
    dataHargaBuahState: [dataHargaBuah, setDataHargaBuah],
    idBuahState: [idBuah, setIdBuah],
  }

  return (
    <BuahContext.Provider value={valueState}>
      {props.children}
    </BuahContext.Provider>
  )
}
