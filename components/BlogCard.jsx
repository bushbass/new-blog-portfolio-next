import Link from 'next/link'
import styles from '../styles/Home.module.css'
function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a classname={styles.card}>
        <h2>{post.frontmatter.title} &rarr;</h2>
      </a>
    </Link>
  )
}

export default BlogCard
