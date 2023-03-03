import Link from 'next/link';
import styles from '../styles/Home.module.css';
function ProjectCard({ post }) {
  return (
    <Link href={`/projects/${post.projectName}`}>
      <a className={styles.card}>
        <h2>{post.frontmatter.title} &rarr;</h2>
        <p>{post.frontmatter.appType}</p>
        {console.log(post)}
      </a>
    </Link>
  );
}

export default ProjectCard;
