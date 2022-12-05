import Layout from "../../components/Layout";

export default function Post({ post }) {
  return (
    <Layout>
      <div className=" flex flex-col items-center">
        <picture>
          <source srcSet={post.image} type="image/webp" />
          <img src={post.image} alt={post.name} />
        </picture>
        <h1 className=" text-2xl">{post.name}</h1>
      </div>
    </Layout>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.results.map((post) => ({
    params: { id: `${post.id}` },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}


// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
}
