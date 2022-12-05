import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";

const index = ({ data }) => {
  const chars = data.results;

  return (
    <Layout>
      <ul className="w-full h-full flex justify-center items-center flex-col p-20">
        {chars.map((char) => (
          <li className=" p-2 hover:bg-slate-800 rounded-3xl" key={char.id}>
            <Link href={`rickandmorty/${char.id}`}>{char.name}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  };
}

export default index;
