import { Space } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FeaturesCards } from '../components/FeatureCard'

import HeaderMegaMenu from '../components/Header'
import { FooterSocial } from '../components/HeroFooter'
import { HeroContentLeft } from '../components/HeroHeader'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeaderMegaMenu/>
      <HeroContentLeft/>
      <Space/>
      <FeaturesCards/>
      <FooterSocial/>
    </div>
  )
}

export default Home
