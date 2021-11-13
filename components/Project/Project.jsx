import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./project.module.css";

const Project = ({ project }) => {
  console.log("inside project component", project);
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={project.frontMatter.cover_image}
          alt="photo of site on a computer"
          layout="responsive"
          sizes="(min-width: 768px) 400px"
          width="400"
          height="200"
          objectFit="cover"
          priority={true}
        />
      </div>
      <Link href={`/projects/${project.slug}`} passHref>
        <h2 className={styles.title}>This Website</h2>
      </Link>
      <p className={styles.description}>
        Designed to be minimalist, edgey, and fast.
      </p>
    </div>
  );
};

export default Project;
