import Head from "next/head";

const HeadTitle = ({ title }) => {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
};

export default HeadTitle;
