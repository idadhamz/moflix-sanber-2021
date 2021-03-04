import React from 'react'
import './tugas14.css'

import { BuahProvider } from './BuahContext'
import BuahList from './BuahList'
import BuahForm from './BuahForm'

const Tugas14 = () => {
  return (
    <BuahProvider>
      <BuahList />
      <BuahForm />
    </BuahProvider>
  )
}

export default Tugas14
