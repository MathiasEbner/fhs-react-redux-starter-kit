import React from 'react'
import styles from './CustomLink.module.css'
import { Link } from 'react-router-dom'

export const CustomLink = ({ text, path }) => {
  return (
    <Link to={path} className={styles.link}>{text}</Link>
  )
}
