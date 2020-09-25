import React from 'react'
import { ProductsTitle } from './ProductsTitle'
import { ProductsCard } from './ProductsCard'
import styles from '../styles/Products.module.css'

export const Products = ({ data }) => {
  return (
    <div className={styles.products}>
      <ProductsTitle />
      <section className={styles['cards-box']}>
        {data.map((item) => (
          <ProductsCard key={item.id} {...item} />
        ))}
      </section>
    </div>
  )
}
