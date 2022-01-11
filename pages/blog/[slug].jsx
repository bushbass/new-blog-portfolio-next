import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';

function PostPage({ frontmatter: { title, date, type }, slug, content }) {
  return (
    <div className="container ">
      {' '}
      <div className="main ">
        <h1 className="title blog-title">{title}</h1>
        <p>{date}</p>
        <div
          className="blog-content skills"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></div>
      </div>
    </div>
  );
}

// we are creating pages based on our md files so we need to tell next what
// routes to actually make as well
// so, read the directory 'posts' which returns an array of filenames.
// map through files array which returns a new array of objects that each have the form
// {params:{slug: filename}} without the .md extensions
//  this uses 'slug' because we called the file [slug].jsx
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('blog-posts'));
  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('blog-posts', slug + '.md'),
    'utf-8'
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  console.log({ slug });
  return { props: { frontmatter, slug, content } };
}

export default PostPage;
