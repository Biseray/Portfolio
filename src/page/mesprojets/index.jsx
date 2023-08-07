import React from 'react'
import style from '../../style/mesprojet.module.css'
import { useLoaderData } from 'react-router-dom'
import projetList from '../../datas/projet';
import ListCard from '../../components/ListCard';


export default function MesProjets() {
  const dataProjets = useLoaderData();

  return (
    <div className={style.projet}>
      <ListCard dataProjets={dataProjets} />
    </div>
  )
}

export function projetLoader() {
  return projetList
}

