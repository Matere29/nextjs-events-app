import Layout from '@/components/layout/layout'
import { NotificationContextProvider } from '@/store/notification-context'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta name='description' content='NextJS Events'/>
         {/* added to pages to ensure that the page is responsive and scales correctly */}
        <meta name="viewport" content="width-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
     
    </Layout>
    </NotificationContextProvider>
  )
}
//root app component, it is rendered for each page that is displayed