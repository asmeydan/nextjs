import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout >
      <div className=' text-5xl'>
        home
      </div>
    </Layout>
  )
}
