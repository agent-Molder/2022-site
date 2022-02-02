import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Mica Molder | Web Dev</title>
      </Head>

      <main className="relative">
        <section className="w-full mt-0 py-4 bg-amber-700 text-center">
        <h1 className="text-white">
          Mica Molder <span className="text-amber-900">|</span>
          <a href="https://github.com/agent-Molder/" className="text-black"> Web Dev</a>
        </h1>
        </section>

        <section className="max-w-full py-4 bg-red-100">
        <div className="mx-auto text-center max-w-md">
          <h2 className="text-slate-700">These colors are hideous</h2>
        <p className="text-xl text-slate-600">
        To live is to be marked. To live is to change, to acquire the words of a story,
        and that is the only celebration we mortals really know.
        In perfect stillness, frankly, I've only found sorrow. </p>
        <p className="text-slate-900">- Barbara Kingsolver, The Poisonwood Bible</p>
        </div>

      <article className="max-w-full text-center">
        <p className="text-red-900">I should test for accessibility</p>
        </article>
        </section>

      <section className="mx-auto py-4">
        <div className="mx-auto grid grid-cols-2 max-w-3xl">
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Portfolio &rarr;</h2>
            <p>Biscuit sugar donut cake sweet biscuit. Candy donut sprinkles marzipan lollipop cookie. Cream apple jelly croissant orange orange. Muffin candy biscuit sprinkles muffin jelly.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Photography &rarr;</h2>
            <p>Candy candy jelly sugar croissant tiramisu. Marzipan candy apple sugar lollipop cake. Vanilla cream ipsum biscuit biscuit tiramisu. Ipsum croissant biscuit biscuit tiramisu biscuit!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Blog &rarr;</h2>
            <p>Sprinkles donut muffin sweet croissant biscuit. Orange croissant biscuit pastry cream candy. Vanilla apple candy orange sweet cookie. Cream cake ipsum ipsum vanilla orange.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>About &rarr;</h2>
            <p>
            Apple jelly vanilla sprinkles muffin sweet. Biscuit cream jelly cake ipsum apple. Dolor jelly sugar orange vanilla orange. Orange pastry sweet muffin muffin dolor. 
            </p>
          </a>
        </div>
        </section>
      </main>

      <footer className="bg-amber-100 absolute sticky bottom-0 py-4 text-center w-full">
        Copyright Marica Molder{' '}
        <p>Portland, Oregon</p>
        <p>
        <a
          href="https://github.com/agent-Molder/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-900"
        >
        Contact Me <span className="text-slate-900">|</span> (spot for Social links)
        </a>
        </p>
      </footer>
    </div>
  )
}
