function SocialIcons() {
  return (
    <div className="social-image-container">
      <a href="http://AlexNielsen.com/resume">
        <img
          className="social-image"
          src={`/images/social/gmail.png`}
          alt="gmail logo"
        />
      </a>
      <a href="https://linkedin.com/in/alex-nielsen-nj">
        <img
          className="social-image"
          src={`/images/social/linkedin.png`}
          alt="linkedin logo"
        />
      </a>
      <a href="https://twitter.com/BigAlsHouse">
        <img
          className="social-image"
          src={`/images/social/twitter.png`}
          alt="twitter logo"
        />
      </a>
      <a href="https://www.youtube.com/channel/UCqdNQHOLz3PmB4cDvQkdQ1w/">
        <img
          className="social-image"
          src={`/images/social/youtube.png`}
          alt="youtube logo"
        />
      </a>
    </div>
  );
}

export default SocialIcons;
