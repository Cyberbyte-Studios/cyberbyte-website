import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
        <Head>
            <title>Page not found</title>
        </Head>

      {/*<Header />*/}

      <main className="flex-grow">

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tighter">Uh oh. That page does not exist.</h1>
                <p className="text-lg text-gray-400">Head to our <Link href="/"><a className="text-primary hover:text-gray-200 transition duration-150 ease-in-out">homepage</a></Link> that does exist, or try double-checking the URL.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
