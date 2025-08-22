"use client"
import { useProducts } from '@/hooks/useProducts'
import React from 'react'

interface ProductsListProps{}

export function ProductsList({}: ProductsListProps) {
    const {data} = useProducts();

    console.log('data', data);
  return (
    <div>products-list</div>
  )
}