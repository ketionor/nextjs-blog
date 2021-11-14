import React from "react";
// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
import Project from "../components/Project/Project";
import styles from "../styles/projects.module.css";
import { getPosts } from "../lib/functions";

const projects = ({ posts }) => {
  console.log(projects);
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <Project key={post.id} project={post} />
      ))}
    </div>
  );
};

export default projects;

export async function getStaticProps() {
  const posts = await getPosts();

  console.log(posts);

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
    revalidate: 1,
  };
}
