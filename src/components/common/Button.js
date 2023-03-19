import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export const Button = ({ text, path, size, onClick }) => {
  const sizeClassName = size === 'large' ? styles.large : styles.small
  return (
  <button className={`${styles.button} ${sizeClassName}`} onClick={onClick} >
    {
      path !== '' ? <Link to={path}>{text}</Link> : text
    }
  </button>
  )
}
