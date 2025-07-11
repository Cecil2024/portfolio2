'use client'

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Lottie  from 'lottie-react';
import animationData from './components/animations/bloques.json'; 


export default function Home() {;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Portfolio</h1>
        <div className={styles.containerIcons}>
        <div title="connievisualarts@gmail.com"><Image src="/email-32.png" alt="Icon Email" width={32} height={32}/></div>
        <div title="https://www.linkedin.com/in/connie-ramirez-arts/"><Link href="https://www.linkedin.com/in/constanza-ram%C3%ADrez-arts/" target="_blank"><Image src="/linkedin.png" alt="Icon LinkedIn" width={32} height={32}/></Link></div>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.lottieContainer}>
        <p className={styles.headerAuthor}>Connie Ramirez</p>
        <Lottie className={styles.icon} animationData={animationData} loop={true} />
        </div>
      </section> 

      <section className={styles.aboutMe}>
        <div className={styles.aboutMeContainer}>
        <div className={styles.aboutMeText}>
        <h2>About me</h2>
        <Image src="/Connie animated1.gif" alt="girl icon" width={280} height={280}
        onMouseEnter={() => ('/open mouth winking hand.png')}
        onMouseLeave={() => ('/smiling open eyes.png')}/>
        </div>
        <p>
          I am a <Link href="https://www.saatchiart.com/en-gb/connievisualarts?srsltid=AfmBOop_Z4_1uFdaTnYN_-eeAcnDMbaCedD4C6y6IHp-Db9IyuhRCQLp" target="_blank"> Visual Artist </Link> and <Link href="https://www.connieramphoto.co.uk/" target="_blank"> Photographer </Link> with nearly a decade of experience in photography, visual arts, and graphic design. I love capturing the beauty of the world and telling stories through my visuals. Recently, I’ve developed a strong focus on UX/UI design, aiming to create user-friendly digital experiences that address real-world challenges.

          I’m skilled in tools like Figma, Photoshop, After Effects, and Lightroom, and I have a solid foundation in HTML, CSS, React, and JavaScript. My unique blend of creativity and technical know-how helps me collaborate effectively with Agile teams to deliver impactful designs.

          Accessibility is a priority for me—I believe that everyone should enjoy inclusive digital experiences. I’m always learning to refine my approach, ensuring my designs are both functional and beautiful.
        </p>
        </div>
      </section>

      <section className={styles.stack}>
        <div className={styles.stackContainer}>
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
        </div>
      </section>

      <section className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.projectGrid}>
          <div className={styles.project}>
            <Link href="https://baggit-app.vercel.app/home" target="_blank"><h3> <Image src="/suitcase-64.png" alt="Suitcase icon" width={64} height={64} /> BaggIt App</h3></Link>
            <p>
            The primary challenge BaggIt addresses is the lack of a convenient, organised solution for travellers to store and manage their belongings on the go. On this project (see the process  <Link href="https://www.figma.com/board/KStmAELGoiVoV5DzSUPtWX/BaggIt-APP-(detailed)?node-id=0-1&t=pNCvtnCgvnZl8md2-1" target="_blank"><u>here</u></Link>), I led the design and contributed to the front-end development, creating intuitive, user-friendly interface components that ensure a seamless user experience. I also developed the logo, brand identity, and all the visual assets used within the app. For a summary, check <Link href="https://www.canva.com/design/DAGTvkGibmw/KAmHrgLba2rMl0N8s5CV5w/view?utm_content=DAGTvkGibmw&utm_campaign=designshare&utm_medium=link&utm_source=editor#1" target="_blank"><u>here</u>.</Link></p>
          </div>
          <div className={styles.project}>
            <Link href="https://weather-lthn86kmi-connie-ramirezs-projects.vercel.app/" target="_blank"><h3> <Image src="/barometer-64.png" alt="Barometer icon" width={64} height={64} /> Weather App</h3> </Link>
            <p>
            This simple, user-friendly tool allows you to quickly check the weather for any city. The development process behind the app involved a structured approach, starting with brainstorming various features and layouts to ensure the design was intuitive and easy to use (see the process  <Link href="https://www.figma.com/board/GXsyW08KfIt33EWqtGOkiH/Weather-App-Process?node-id=0-1" target="_blank"><u>here</u></Link>). Feedback played a key role in this iteration process, helping us plan a more efficient and accessible tool.To see the repo, click <Link href="https://github.com/Cecil2024/Weather-App/tree/main" target="_blank"><u>here</u>.</Link></p>
          </div>
          <div className={styles.project}>
            <Link href="https://www.figma.com/board/JRbX20xi3cogIFmaBYi3pA/User-Research-and-Ideation-Methods-for-LPA-App?node-id=0-1&t=E1eLVbVUFXJ0VzeF-1" target="_blank"><h3> <Image src="/letter-clinic-64.png" alt="Medical Letter icon" width={64} height={64} /> LPA Research and Ideation</h3></Link>
            <p>
            In this project, we explored various approaches to develop an optimal Low Power Application (LPA) solution. Our focus was on analyzing different user journeys and scenarios, carefully considering the needs and behaviours of our target users. Based on self-conducted research, we examined a wide range of potential solutions, evaluating how each one could enhance both functionality and user experience.</p>
          </div>
          <div className={styles.project}>
            <Link href="https://www.connieramphoto.co.uk/" target="_blank"><h3> <Image src="/camera-64.png" alt="Camera icon" width={64} height={64} /> Photographic website</h3></Link>
            <p>A visually striking and user-centred photography portfolio designed and developed to highlight the artistic work of Connie Ramirez Photography, make bookings and contact the photographer. In addition to the website, I also crafted the entire branding and social content, ensuring a cohesive identity across all platforms. The website features a clean, minimalist layout with responsive design, intuitive navigation, and a focus on high-quality imagery. The UX/UI design ensures an immersive experience, allowing the photography to take centre stage while offering seamless interaction across devices.To see the repo, click <Link href="https://github.com/Cecil2024/photo" target="_blank"><u>here</u>.</Link></p>
          </div>
          <div className={styles.project}>
            <Link href="https://pruebapaginade.my.canva.site/sweet-sips-of-happiness" target="_blank"><h3> <Image src="/bee-64.png" alt="Bee icon" width={64} height={64} /> Website optimization</h3></Link>
            <p>This board outlines the processes for optimizing and enhancing the website for "Mrs. Bee Coffee London." I began by identifying the strengths of the current website, then explore potential user personas. (See the process  <Link href="https://www.figma.com/board/KqL6poiU120C3r5EFA2R89/Mrs.-Bee?node-id=0-1&p=f&t=1WEU3xpSTPEgNoPP-0" target="_blank"><u>here</u></Link>) With the suggested improvements implemented, I designed a new website that features clean visuals and professional content, ensuring smooth navigation for users.</p>
          </div>
          <div className={styles.project}>
            <Link href="https://v0-clone-this-project-plum.vercel.app/" target="_blank"><h3> <Image src="/book-64.png" alt="Book icon" width={64} height={64} /> The Know-it-all</h3></Link>
            <p>Welcome to an AI chatbot that holds the answers to all your questions! But what makes it truly special is that you can tailor its responses to suit your preferences—so go ahead and explore! You might just be amazed by what you discover!
            In this project, I had the exciting opportunity to lead the UI and front-end development, crafting an engaging and intuitive user experience. To see the repo, click <Link href="https://github.com/Cecil2024/The-Know-It-ALL" target="_blank"><u>here</u>.</Link></p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.contact}>
          <h3 className={styles.getInTouch}>Get in touch</h3>
          <div className={styles.footerButtons}>
          
          <Link href="https://github.com/Cecil2024" target="_blank" className={styles.buttonFooter2}>View on GitHub</Link>
          <Link href="https://www.linkedin.com/in/constanza-ram%C3%ADrez-arts/" target="_blank" className={styles.buttonFooter3}>Connect on LinkedIn</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
