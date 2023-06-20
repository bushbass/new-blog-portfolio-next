import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import SocialIcons from '../components/SocialIcons'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alex Nielsen - Web Developer</title>
        <meta
          name='description'
          content='Personal home page for Alex Nielsen.  A web developer from New Jersey, USA'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Alex Nielsen</h1>
        <h1 className={styles.title}>Full Stack Developer</h1>
        <p className={styles.designAlert}>
          This site has gotten an update!
          <br />
          All of my old content is still right here for now, but please
        </p>
        <p className={styles.designAlert}>
          Take a look the new design here:
          <br />
          <a href='https://alexnielsen.com'>https://alexnielsen.com</a>
        </p>
        <div className='image-wrapper'>
          {/* <Image
            src="/images/me-wearing-hat.jpg"
            alt="Alex Nielsen wearing a baseball cap"
            width={200}
            height={200}
          /> */}
          <iframe
            width='300'
            height='300'
            src='https://www.youtube.com/embed/j44vqjIN1kw'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            rel='0'></iframe>
        </div>

        <section className='skills {styles.skills}'>
          <div className={`${styles.new} ${styles.container}`}>
            <Link href='/projects/PERN-to-do'>
              <a>
                <strong>
                  <em>NEW!</em>
                </strong>{' '}
                Code walkthroughs. I&lsquo;m adding video walkthroughs of my
                coding projects. I&lsquo;ll go through the app and explain what
                the code does and why it&lsquo;s there. The first one is is a
                PERN stack project and <strong>you can watch it here</strong>.
              </a>
            </Link>
          </div>
          <h3>TECHNICAL SKILLS</h3>
          <p>
            HTML, CSS, JavaScript, React, Next.js, Gatsby, Node/Express, MERN,
            REST APIs, Bootstrap, Git, Responsive Web Design, Photoshop{' '}
          </p>
          <h3>SOFT SKILLS</h3>
          <p>
            Eager to learn and develop new skills, Adaptable, Strong Work Ethic,
            Great Customer Service, Effective Communicator
          </p>

          <div>
            <p>
              I&apos;m a freelance web developer looking to make a move back
              into full-time. Ideally I&apos;d like to be working in
              music/entertainment or education (I spent a few years teaching
              music), but I would be very happy working anywhere that has a
              supportive team and that will allow me to continue learning and
              growing my skills.
            </p>
          </div>
          <SocialIcons />
        </section>
      </main>
      {console.log('Social Icons are from https://designmodo.com/')}
    </div>
  )
}
