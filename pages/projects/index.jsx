import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// import Post from "../components/Post";
import { sortByDate } from '../../utils';
import styles from '../../styles/Home.module.css';
import ProjectCard from '../../components/ProjectCard';
function Project({ projects }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Web Development Projects</h1>
        <div className="grid">
          {console.log({ projects })}
          <div className={styles.grid}>
            {projects.map((post) => (
              <ProjectCard key={post.frontmatter.title} post={post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Project;

// export default function Home({ projects }) {
//   // this 'projects' prop comes from the getStaticProps function below

//   return (

//   );
// }

export async function getStaticProps() {
  // get files from the projects dir
  // filters out directories so we only get md files ignoring images directory
  // returns array of filenames
  const dirents = fs.readdirSync(path.join('projects'), {
    withFileTypes: true,
  });
  const filesNames = dirents
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);
  // get projectName and frontmatter from markdown files
  // maps over the array of filenames returned in the last step

  const projects = filesNames.map((filename) => {
    // create projectName by removing extension from filename
    const projectName = filename.replace('.md', '');

    // get frontmatter from each file
    const markdownWithMeta = fs.readFileSync(
      path.join('projects', filename),
      'utf-8'
    );

    // use gray-matter to convert the markdown/frontmatter
    const { data: frontmatter } = matter(markdownWithMeta);
    // return projects array that has each post's projectName and frontmatter
    return { projectName, frontmatter };
  });

  // now send that projects array as a prop to be used in the page
  return {
    props: {
      projects: projects.sort(sortByDate),
    },
  };
  // btw, this whole thing could be from an API or something instead of .md files
}
