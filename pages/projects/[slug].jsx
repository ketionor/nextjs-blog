import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getSinglePost, getPosts } from "../../lib/functions";
import styles from "./projectPage.module.css";

const ProjectPage = ({ post }) => {
  console.log(post);
  return (
    <div className={styles.container}>
      <Image
        src={post.feature_image}
        alt="photo of site on a computer"
        layout="responsive"
        sizes="(min-width: 768px) 400px"
        width="400"
        height="200"
        objectFit="cover"
        priority={true}
        placeholder="empty"
      />
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </div>
  );
};

export default ProjectPage;

export async function getStaticPaths() {
  const posts = await getPosts();

  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // "fallback: false" gives us a 404 if post not found
  return { paths, fallback: false };
}

// Pass the page slug to "getSinglePost()" function
// Which then passes it to "posts.read()" to query the GhostContentAPI
export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
    revalidate: 1,
  };
}
