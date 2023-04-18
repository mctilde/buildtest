import Nav from "@/components/ui/Nav";
import Layout from "@/components/layaouts/layoutHome";
import Head from "next/head";


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Build Test</title>
        <link rel="icon" href="/nxodetor.svg" />
      </Head>
      <Nav />
      <Layout></Layout>
    </div>
  );
}
