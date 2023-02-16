import Head from "next/head";
import Navbar from "../Navbar";

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>John Paul Ong | Web Developer</title>
        <meta
          name="description"
          content="I'm a fresh graduate web developer based in Metro Manila, Philippines. I enjoy the challenge in taking on project requirements and complex designs and implementing them into simple and beautiful systems for clients and customers while doing it in the most elegant and efficient way I am capable of for other developers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
