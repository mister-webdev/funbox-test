import React, { useState } from 'react'
import styles from '../styles/Products.module.css'
import cardback from '../images/card-back.png'
import cardbackpink from '../images/card-back-pink.png'
import cardbackblue from '../images/card-back-blue.png'
import cardbackgray from '../images/card-back-gray.png'
import cat from '../images/cat.png'

export const ProductsCard = ({
  brand,
  name,
  type,
  portion,
  gift,
  weight,
  qty,
  description
}) => {
  const [selected, setSelected] = useState(false)

  const handleToggle = () => setSelected((selected) => !selected)

  return (
    <div className={styles['card-wrapper']}>
      <div className={styles.card}>
        <div
          className={
            qty === 0
              ? `${styles.cutcorner} ${styles['card-disabled']}`
              : styles.cutcorner
          }
          onClick={handleToggle}
        >
          <div
            className={
              qty === 0
                ? `${styles.info} ${styles['info-disabled']}`
                : styles.info
            }
          >
            <p className={styles.brand}>{brand}</p>
            <p className={styles.name}>{name}</p>
            <p className={styles.type}>{type}</p>
            <p className={styles.portion}>{portion}</p>
            <p className={styles.portion}>{gift}</p>
          </div>

          <img
            className={styles.cardback}
            src={cardback}
            alt=''
            role='presentation'
          />

          <img
            className={styles['cardback-selected']}
            src={qty ? (selected ? cardbackblue : cardbackpink) : cardbackgray}
            alt=''
            role='presentation'
          />

          <img
            className={
              qty === 0
                ? `${styles.herocat} ${styles['herocat-disabled']}`
                : styles.herocat
            }
            src={cat}
            alt=''
            role='presentation'
          />

          <div
            className={styles.weight}
            style={{
              background:
                qty === 0
                  ? 'var(--clr-lightgray)'
                  : selected
                  ? 'var(--clr-blue)'
                  : 'var(--clr-pink)'
            }}
          >
            <p className={styles['weight-kg']}>{weight}</p>
            <p className={styles['weight-kg-tag']}>кг</p>
          </div>
        </div>
      </div>

      <footer className={styles['card-footer']}>
        {selected ? (
          <p className={styles.description}>{description}</p>
        ) : qty !== 0 ? (
          <p className={styles.description}>
            Чего сидишь? Порадуй котэ,{' '}
            <span className={styles['dashed-text']} onClick={handleToggle}>
              купи.
            </span>
          </p>
        ) : (
          <p className={styles.disabled}>Печалька, {type} закончился.</p>
        )}
      </footer>
    </div>
  )
}
