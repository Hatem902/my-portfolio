import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import Chakra from '../components/chakra'
import Fonts from '../components/fonts'
import Layout from '../components/layouts/main'
if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}
export default dynamic(() => Promise.resolve(Website), { ssr: false })
