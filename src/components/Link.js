import React from 'react'
import styles from './Link.module.css'

export const Link = ({ text, path }) => {
  return (
  <a href={path} className={styles.link}>
    {text}
  </a>
  )
}
