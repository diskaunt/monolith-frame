'use client'
import React, { useState } from 'react';
import styles from './Home.module.css';
import Preloader from './Preloader/Preloader';

export default function Home() {
	let [loadLevel, setloadLevel] = useState(0);
  return (
    <>
			{
			// loadLevel !== 100
			true
			? <Preloader loadLevel={loadLevel} setloadLevel={setloadLevel}/> :
      <section className={styles.section}>
				<div className={styles.first}></div>
			</section>}
    </>
  );
}
