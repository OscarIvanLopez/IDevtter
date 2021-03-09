import Head from "next/head";
import { colors } from "../styles/theme";

import AppLayout from "../components/AppLayout/index";
import Button from "../components/Button/index";
import GitHub from "../components/Icons/Github";

export default function Home() {
  return (
    <>
      <Head>
        <title>IDevtter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <section>
          <img src="../logo.png" alt="logo" />
          <h1>IDevtter</h1>
          <h2>Talk about development with developers 👩‍💻👨‍💻</h2>
          <div>
            <Button>
              <GitHub fill='#fff' width={32} height={32} />
              Login with Github
            </Button>
          </div>
        </section>
      </AppLayout>

      <style jsx>{`
        img {
          width: 120px;
        }
        div {
          margin-top: 16px;
        }
        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }
        h1 {
          color: ${colors.primary};
          font-weight: 800;
          margin-bottom: 16px;
        }
        h2 {
          color: ${colors.secondary};
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </>
  );
}
