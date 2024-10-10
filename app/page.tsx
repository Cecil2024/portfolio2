'use client'

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Lottie  from 'lottie-react';
import animationData from './components/animations/bloques.json'; 

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Portfolio</h1>
        <Image src="/linkedin.png" alt="Icon LinkedIn" width={32} height={32} />
      </header>

      <section className={styles.hero}>
        <div className={styles.lottieContainer}>
        <p className={styles.headerAuthor}>Connie Ramirez</p>
        <Lottie className={styles.icon} animationData={animationData} loop={true} />
        </div>
      </section> 

      <section className={styles.aboutMe}>
        <div className={styles.aboutMeContainer}>
        <h2>About me</h2>
        <p>
          I am a <Link href="https://www.saatchiart.com/en-gb/connievisualarts?srsltid=AfmBOop_Z4_1uFdaTnYN_-eeAcnDMbaCedD4C6y6IHp-Db9IyuhRCQLp" target="_blank"> Visual Artist </Link> and <Link href="https://www.connieramphoto.co.uk/" target="_blank"> Photographer </Link> with a passion for capturing the beauty of the world through my lens. My journey has taken me through various creative landscapes, from fine arts to digital photography, where I've honed my skills in visual storytelling. Now, I'm exploring the fascinating intersection of art and technology by integrating code into my portfolio.
        </p>
        </div>
      </section>

      <section className={styles.stack}>
        <h2>Tech Stack</h2>
        <div className={styles.techContainer}>
          <ul>
            <button className={styles.techStackButton} data-lang="JavaScript">JavaScript</button>
            <button className={styles.techStackButton2} data-lang="TypeScript">TypeScript</button>
            <button className={styles.techStackButton3} data-lang="CSS">CSS</button>
            <button className={styles.techStackButton4} data-lang="HTML">HTML</button>
            <button className={styles.techStackButton5} data-lang="React">React</button>
            <button className={styles.techStackButton} data-lang="Next">Next</button>
            <button className={styles.techStackButton2} data-lang="Vercel">Vercel</button>
            <button className={styles.techStackButton} data-lang="Tailwind">Tailwind</button>
            <button className={styles.techStackButton3} data-lang="Figma">Figma</button>
            <button className={styles.techStackButton4} data-lang="Postgres">Postgres</button>
            <button className={styles.techStackButton5} data-lang="Adobe">Adobe</button>
            <button className={styles.techStackButton} data-lang="AdobePhotoshop">Adobe Photoshop</button>
            <button className={styles.techStackButton2} data-lang="AdobeAfterEffects">Adobe After Effects</button>
            <button className={styles.techStackButton3} data-lang="Adobe Lightroom">Adobe Lightroom</button>
            <button className={styles.techStackButton4} data-lang="Git Hub">Git Hub</button>
          </ul>
        </div>
      </section>

      <section className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.projectGrid}>
          <div className={styles.project}>
            <Image src="/my-app/app/public/baggit-logo.png" alt="Logo BaggIt App" width={500} height={300} />
            <Link href="https://www.figma.com/board/KStmAELGoiVoV5DzSUPtWX/BaggIt-APP-(detailed)?node-id=0-1&t=pNCvtnCgvnZl8md2-1" target="_blank"><h3>BaggIt App</h3></Link>
            <p>
            The primary challenge BaggIt addresses is the lack of a convenient, organized solution for travelers to store and manage their belongings on the go. On this project, I led the design and contributed to the front-end development, creating intuitive, user-friendly interface components that ensure a seamless user experience. I also developed the logo, brand identity, and all the visual assets used within the app..</p>
          </div>
          <div className={styles.project}>
            <Image src="/image2.jpg" alt="Project 2" width={500} height={300} />
            <Link href="https://www.figma.com/board/GXsyW08KfIt33EWqtGOkiH/Weather-App-Process?node-id=0-1&t=PiTMoylOHIh6Z6oz-1" target="_blank"><h3>Weather App</h3> </Link>
            <p>
            This simple, user-friendly tool allows you to quickly check the weather for any city. The development process behind the app involved a structured approach, starting with brainstorming various features and layouts to ensure the design was intuitive and easy to use. Feedback played a key role in this iteration process, helping us plan a more efficient and accessible tool. Looking ahead, we have plans for future improvements, including changing the visuals, and enhanced accessibility features, with the goal of continuously improving the app for a diverse range of users.</p>
          </div>
          <div className={styles.project}>
            <Image src="/image2.jpg" alt="Project 2" width={500} height={300} />
            <Link href="https://www.figma.com/board/JRbX20xi3cogIFmaBYi3pA/User-Research-and-Ideation-Methods-for-LPA-App?node-id=0-1&t=E1eLVbVUFXJ0VzeF-1" target="_blank"><h3>LPA Research and Ideation</h3></Link>
            <p>
            In this project, we explored various approaches to develop an optimal Low Power Application (LPA) solution. Our focus was on analyzing different user journeys and scenarios, carefully considering the needs and behaviours of our target users. Based on self-conducted research, we examined a wide range of potential solutions, evaluating how each one could enhance both functionality and user experience.</p>
          </div>
          <div className={styles.project}>
            <Image src="/photowebsite.png" alt="Project 1" width={500} height={300} />
            <Link href="https://www.connieramphoto.co.uk/" target="_blank"><h3>Photographic website</h3></Link>
            <p>A visually striking and user-centered photography portfolio designed and developed to highlight the artistic work of Connie Ramirez Photography. The website features a clean, minimalist layout with a mobile-first responsive design, intuitive navigation, and a focus on high-quality imagery. The UX/UI design ensures an immersive experience, allowing the photography to take center stage while offering seamless interaction across devices. Designed with a full-stack approach, integrating modern web technologies to ensure speed and functionality.</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.contact}>
          <h3 className={styles.getInTouch}>Get in touch</h3>
          <div className={styles.footerButtons}>
          <a href="/resume.pdf" className={styles.buttonFooter1}>Download CV</a>
          <Link href="https://github.com/Cecil2024" target="_blank" className={styles.buttonFooter2}>View on GitHub</Link>
          <Link href="https://www.linkedin.com/in/constanza-ram%C3%ADrez-arts/" target="_blank" className={styles.buttonFooter3}>Connect on LinkedIn</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
