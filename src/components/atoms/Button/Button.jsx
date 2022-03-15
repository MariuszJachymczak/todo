import React from 'react'
import "./Button.css"

export default function Button({onClick, type,children, label}) {
  return (
    <button className="button-wrapper"
    onClick={onClick}
    type={type}
    >{children}</button>
  )
}
