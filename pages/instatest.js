import styles from '../styles/Instatest.module.css';
function createMarkup() {
  return {
    __html: `<div class="fb-post" data-href="https://www.facebook.com/20531316728/posts/10154009990506729/" data-width="500" data-show-text="true"><blockquote cite="https://www.facebook.com/20531316728/posts/10154009990506729/" class="fb-xfbml-parse-ignore">Posted by <a href="https://www.facebook.com/facebookapp/">Facebook App</a> on&nbsp;<a href="https://www.facebook.com/20531316728/posts/10154009990506729/">Thursday, August 27, 2015</a></blockquote></div>`,
  };
}
function Instatest() {
  return (
    <div className={styles.container}>
      <div className="main">
        <h1>instagram test page!</h1>
        <div dangerouslySetInnerHTML={createMarkup()}></div>
      </div>
    </div>
  );
}

export default Instatest;
