import Link from 'next/link'
import styles from '../styles/Home.module.css'
function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a className={styles.card}>
        <h2>{post.frontmatter.title} &rarr;</h2>
        <p>{post.frontmatter.date}</p>
      </a>
    </Link>
  )
}

export default BlogCard
