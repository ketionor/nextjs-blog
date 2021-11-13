import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Project from "../components/Project/Project";
import styles from "../styles/projects.module.css";

const projects = ({ projects }) => {
  console.log(projects);
  return (
    <div className={styles.container}>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
      {/* <Project /> */}
    </div>
  );
};

export default projects;

export async function getStaticProps() {
  //Get files from posts dir
  const files = fs.readdirSync(path.join("projects"));

  //Get slug and frontmatter from posts
  const projects = files.map((filename) => {
    const slug = filename.replace(".md", "");

    //Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("projects", filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      slug,
      frontMatter,
    };
  });

  return {
    props: {
      projects,
    },
  };
}
