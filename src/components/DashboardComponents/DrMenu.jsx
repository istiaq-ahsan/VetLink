import React from 'react'
import MenuItem from './MenuItem'

const DrMenu = () => {
  return (
    <>
    <MenuItem label="Patients" address="/dashboard/patients" />
    <MenuItem label="Content Upload" address="/dashboard/dr-edu-input" />
    <MenuItem label="Call" address="/dashboard/dr-call" />
    </>
  )
}

export default DrMenu
