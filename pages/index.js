import Head from 'next/head'
import Image from 'next/image'
import Homepage from '@/src/components/home/home-page'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alimi Adeyemi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Portfolio_icon.png" />
      </Head> 
      <Homepage />
    </>
  )
}
