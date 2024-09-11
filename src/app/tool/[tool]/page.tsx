"use client"

import { useParams } from 'next/navigation'
import React from 'react'

const ToolPage = () => {
  const {tool} = useParams()
  return (
    <div>{tool}</div>
  )
}

export default ToolPage