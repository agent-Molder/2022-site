import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Mica Molder | Web Dev</title>
      </Head>

      <main className="relative bg-gradient-to-b from-soft-slate to-soft-navy">
        <section className="w-full py-4 bg-transparent text-center">
          <h1 
            className="text-eggshell-2 text-5xl font-['Gerogia']"
          >
            Mica Molder <span className="text-green-moss">|</span>
            <a href="https://github.com/agent-Molder/" className="text-amber hover:text-eggshell-2"> Web Dev</a>
          </h1>
        </section>

        <section className="mx-auto py-8 bg-transparent">
        <div className="mx-auto grid gap-4 grid-cols-2 max-w-3xl text-slate-1 p-4">
          <a href="#" 
          className={styles.ctabutton}>
            <h2 className="m-r-1 text-md">Portfolio</h2>
            <p>Biscuit sugar donut cake sweet biscuit. Candy donut sprinkles marzipan lollipop cookie. Cream apple jelly croissant orange orange. Muffin candy biscuit sprinkles muffin jelly.</p>
          </a>

          <a href="https://www.instagram.com/ufonotation/"
          className={styles.ctabutton}>
            <h2>Photography</h2>
            <p>Candy candy jelly sugar croissant tiramisu. Marzipan candy apple sugar lollipop cake. Vanilla cream ipsum biscuit biscuit tiramisu. Ipsum croissant biscuit biscuit tiramisu biscuit!</p>
          </a>

          <a
            href="https://brackettobracket.wordpress.com/"
            className={styles.ctabutton}
          >
            <h2>Blog</h2>
            <p>Sprinkles donut muffin sweet croissant biscuit. Orange croissant biscuit pastry cream candy. Vanilla apple candy orange sweet cookie. Cream cake ipsum ipsum vanilla orange.</p>
          </a>

          <a
            href="#about"
            className={styles.ctabutton}
          >
            <h2>About</h2>
            <p>
            Apple jelly vanilla sprinkles muffin sweet. Biscuit cream jelly cake ipsum apple. Dolor jelly sugar orange vanilla orange. Orange pastry sweet muffin muffin dolor. 
            </p>
          </a>
        </div>
        </section>

        <section className="max-w-full bg-transparent">
        <div className="mx-auto text-center max-w-md p-4">
          <p className="text-xl text-green-moss">
          To live is to be marked. To live is to change, to acquire the words of a story,
          and that is the only celebration we mortals really know.
          In perfect stillness, frankly, I've only found sorrow. </p>
          <p className="text-slate-900">- Barbara Kingsolver, The Poisonwood Bible</p>
        </div>

        <article id="about" className="max-w-full text-center text-green-moss bg-transparent p-8">
          <h2 className="text-green-forest m-0 pb-4">About</h2>
            <p className="m-0 p-4 mx-auto max-w-lg">
              Hey! My name is Mica Molder, and
              I'm a Full Stack Engineer based in Portland, OR,
              and I've been working at 1Password for three years.
              Most days, you can find me contributing across and maintaining their various sites,
              mentoring, and diving deep into reviews.
              </p>
            <p className="m-0 p-4 mx-auto max-w-lg">
              I'm all about making sure I help my team out however I can, but in my time away from work, I'm your quintessential nerd.</p>
            <p className="m-0 pt-4 mx-auto max-w-md">
              I love video games, and when I'm not playing them, I'm working on my own.
              I also dig programming, anime,
              plain old tv (With a surname like mine,
              you'd better believe I grew up on X-Files).
              I'm majorly into all of it. I'm even a bit of a music geek.
              Aside from that, I'm big on crafts and like to sew and draw when I'm not in front of a screen.</p>
        </article>
        </section>

        <section className="max-w-full text-center bg-transparent p-8">
          <h2>A Little More About Me</h2>
          <h3>My engineering journery</h3>
          <p className="m-0 p-4 mx-auto max-w-lg">I grew up coding. The early late 90's to early 2000's were very wild west for a kid learning to program, but I loved every second of it.
            Nowadays, I work at 1Password as a Full Stack dev. Aside from work, I spent 9 months studying Object Oriented Programming in an intensive bootcamp.
            My cohort was part of a grant initiative called TechHire, and the skills and concepts I learned during that time were invaluable to my career as a programmer.
            </p>
          <h3>Soft Skills</h3>
          <p className="m-0 p-4 mx-auto max-w-lg">
          While I'm actually very shy, I'm also secretly charismatic.
          I try my hardest to be the person my teammates can come to when they need something to get done.
          I'm grateful for their feedback, mentorship, and seek to return the favor in any way I can.
          It's so important to me to be on a team that fosters growth and encourages ambition.
          I'm motivated, diligent, resilient, and above all -- I like to make sure everyone's having a good time. We all get a little bogged down from here and there,
          so I try to be that ray of sunshine on a rainy day.
          </p>
        </section>
      </main>

      <footer className="bg-green-moss absolute sticky bottom py-4 text-center w-full">
      © 2022 Copyright <a 
        href="https://www.linkedin.com/in/mmolder/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white"
        >Marica Molder
        </a>
        <p>Portland, Oregon</p>
        <p>
        <a
          href="https://github.com/agent-Molder/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
        Contact Me
        </a>
        <span className="text-slate-900"> | </span>
        <a
        href="https://www.linkedin.com/in/mmolder"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white"
        >
          LinkedIn
        </a>
        <span className="text-slate-900"> | </span>
        <a
          href="https://www.linkedin.com/in/mmolder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
            LinkedIn
        </a>
        </p>
      </footer>
    </div>
  )
}
