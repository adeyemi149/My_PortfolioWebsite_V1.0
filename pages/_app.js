import '@fortawesome/fontawesome-svg-core/styles.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/theme'
import Fonts from '@/src/Fonts'
import MainLayout from '@/pages/main-layout/main-layout'
import { AnimatePresence } from 'framer-motion'
import '../styles/globals.scss'
import '../styles/general.scss'
import '../styles/animate.scss'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  }, [])
  return ( 
    loading
      ? (<div className='preloader'>
        <div className='loader'>
      </div>
      </div>)
      : (
    <ChakraProvider theme={theme}>
      <MainLayout>  
        <Fonts />
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
    )
  )
}
