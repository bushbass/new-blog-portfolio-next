import SocialIcons from '../components/SocialIcons';

function Contact() {
  return (
    <main className="main">
      <h1 className="title">Contact Me</h1>
      <p>
        My email address can be found on my{' '}
        <a href="http://AlexNielsen.com/resume">current resume</a>
      </p>
      <p>
        You can also reach me through{' '}
        <a href="https://linkedin.com/in/alex-nielsen-nj">LinkedIn</a> or{' '}
        <a href="https://twitter.com/BigAlsHouse">Twitter</a>
      </p>
      <SocialIcons />
    </main>
  );
}

export default Contact;
