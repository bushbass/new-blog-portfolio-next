import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// import Post from "../components/Post";
import { sortByDate } from '../../utils'
import styles from '../../styles/Home.module.css'
import BlogCard from '../../components/BlogCard'
function Blog({ posts }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Web Development Blog</h1>
        <div className='grid'>
          {console.log(posts)}
          <div className={styles.grid}>
            {posts.map((post) => (
              <BlogCard key={post.frontmatter.title} post={post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Blog

// export default function Home({ posts }) {
//   // this 'posts' prop comes from the getStaticProps function below

//   return (

//   );
// }

export async function getStaticProps() {
  // get files from the posts dir
  // filters out directories so we only get md files ignoring images directory
  // returns array of filenames
  const dirents = fs.readdirSync(path.join('blog-posts'), {
    withFileTypes: true,
  })
  const filesNames = dirents
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name)
  // get slug and frontmatter from markdown files
  // maps over the array of filenames returned in the last step

  const posts = filesNames.map((filename) => {
    // create slug by removing extension from filename
    const slug = filename.replace('.md', '')

    // get frontmatter from each file
    const markdownWithMeta = fs.readFileSync(
      path.join('blog-posts', filename),
      'utf-8'
    )

    // use gray-matter to convert the markdown/frontmatter
    const { data: frontmatter } = matter(markdownWithMeta)
    // return posts array that has each post's slug and frontmatter
    return { slug, frontmatter }
  })

  // now send that posts array as a prop to be used in the page
  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
  // btw, this whole thing could be from an API or something instead of .md files
}
