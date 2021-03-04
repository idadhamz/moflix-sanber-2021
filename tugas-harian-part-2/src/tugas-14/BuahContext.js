import React, { useState, createContext } from 'react'

// import DataBuahHarga from './data/dataHargaBuah'

export const BuahContext = createContext()

export const BuahProvider = (props) => {
  const [dataHargaBuah, setDataHargaBuah] = useState(null)
  const [idBuah, setIdBuah] = useState(null)

  return (
    <BuahContext.Provider
      value={[dataHargaBuah, setDataHargaBuah, idBuah, setIdBuah]}
    >
      {props.children}
    </BuahContext.Provider>
  )
}
