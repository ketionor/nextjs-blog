import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./project.module.css";
import Button from "../CTA Button/Button";

const Project = ({ project }) => {
  console.log("inside project component", project);
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        {"feature_image" in project ? (
          <Image
            src={project.feature_image}
            alt="photo of site on a computer"
            layout="responsive"
            sizes="(min-width: 768px) 400px"
            width="400"
            height="200"
            objectFit="cover"
            priority={true}
            placeholder="empty"
          />
        ) : (
          <p>No Image</p>
        )}
      </div>
      <Link href={`/projects/${project.slug}`} passHref>
        <h2 className={styles.title}>{project.title}</h2>
      </Link>
      {"excerpt" in project ? (
        <p className={styles.description}>{project.excerpt}</p>
      ) : (
        <p>No excerpt</p>
      )}

      <Button type="" text="Read More" to={`/projects/${project.slug}`} />
    </div>
  );
};

export default Project;
