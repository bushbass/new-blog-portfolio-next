import Image from 'next/image';
function About() {
  return (
    <main className="main">
      <h1 className="title">About </h1>
      <div>
        <h1>About Me</h1>
        <p>
          <a href="http://AlexNielsen.net/resume">Link to my current resume</a>
        </p>
        <div>
          I&apos;ve loved computers for a long time. Although I studied music in
          college, I worked as a web developer for a few years. Since then,
          I&apos;ve tried out a few other career paths, but I&apos;ve always
          come back to web development. Not long ago I decided to try to keep
          pace with the new technologies in web development and I&apos;ve been
          doing projects to showcase my skills.{' '}
          <a href="https://www.youtube.com/channel/UCqdNQHOLz3PmB4cDvQkdQ1w/">
            I have a YouTube channel
          </a>{' '}
          where I talk about web development and I&apos;ve even given a few
          talks at a local freeCodeCamp Meetup group.{' '}
          <p>
            {' '}
            <Image
              width={150}
              height={100}
              src="/images/alex-presenting.png"
              className="presenting-image"
              alt="Alex Nielsen doing a presentation at a Meetup"
            />
          </p>
          <p>
            HTML and CSS are the mainstays of course, but I&apos;ve really come
            to love JavaScript and React. I&apos;m not a Node expert but I can
            get a REST API running with Express.
          </p>
          <p>
            I&apos;ve been at home taking care of the kids the past few years
            but now I&apos;m ready to make a move back into full-time. Ideally
            I'd like to be working in music/entertainment or education (I spent
            a few years teaching music), but I would be very happy working
            anywhere that has a supportive team and that will allow me to
            continue learning and growing my skills.{' '}
          </p>
          <p>
            I&apos;m currently living almost in the country, in northwest New
            Jersey, the Garden State. Wife, two kids, two dogs and a cat. I love
            my vegetable garden (and attempting to keep the deer out of it) and
            my wife and I are tyring our best to maintain a healthy lifestyle.
            We try to keep in shape so our yearly Spartan Race is not that tough
            on us (we even have the kids into the mud races too!).
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
