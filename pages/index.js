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
        <link rel="icon" href="/logo.png" />
      </Head>
      <AppLayout>
        <section>
          <img src="./rounded-idevtter.png" alt="logo" />
          <h1>IDevtter</h1>
          <h2>Talk about development with developers 👩‍💻👨‍💻</h2>
          <div className="form-wrapper">
            <form>
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
            </form>
          </div>
          <div>
            <Button>
              <GitHub fill="#fff" width={32} height={32} />
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

        form {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin: 0;
        }

        form input {
          margin: .5rem 0;
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 1rem;
          width: 20rem;
          border-radius: 1rem;
          outline: none;
          font-size: 1rem;
        }
      `}</style>
    </>
  );
}
