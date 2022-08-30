import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'

function ProjectPage({
  frontmatter: { title, date, type, appType, demo, hosting, repo, skills },
  projectName,
  content,
}) {
  return (
    <div className='container '>
      {' '}
      <div className='main '>
        <h1 className='title blog-title'>{title}</h1>
        <p>{appType}</p>
        <div className='blog-content skills'>
          <div>
            <a href={repo}>Link to github repo</a>
          </div>
          <div>
            <a href={demo}>Link to demo</a>
          </div>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          <div>Skills: {skills}</div>
          <div>Hosted on {hosting}</div>
        </div>
      </div>
    </div>
  )
}

// we are creating pages based on our md files so we need to tell next what
// routes to actually make as well
// so, read the directory 'posts' which returns an array of filenames.
// map through files array which returns a new array of objects that each have the form
// {params:{projectName: filename}} without the .md extensions
//  this uses 'projectName' because we called the file [projectName].jsx
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('projects'))
  const paths = files.map((filename) => ({
    params: { projectName: filename.replace('.md', '') },
  }))
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { projectName } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('projects', projectName + '.md'),
    'utf-8'
  )
  const { data: frontmatter, content } = matter(markdownWithMeta)
  console.log({ projectName })
  return { props: { frontmatter, projectName, content } }
}

export default ProjectPage
