import Link from "next/link";
import React from "react";

const about = () => {
  return (
    <>
      <div className=" text-7xl bg-violet-300 inline-block p-10 rounded-xl">
        about
      </div>
      <div className=" text-7xl bg-violet-300 inline-block p-10 rounded-xl">
        <Link href="/">
            home
        </Link>
      </div>
    </>
  );
};

export default about;
