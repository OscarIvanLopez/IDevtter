import Link from "next/link";
import AppLayout from "../../components/AppLayout";

const TimeLine = ({ userName }) => {
  return (
    <div>
      <AppLayout>
        <h1>This is the timeline of {userName}</h1>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </AppLayout>
      <style jsx>{`
        h1 {
          color: red;
        }
      `}</style>
    </div>
  );
};

TimeLine.getInitialProps = () => {
  return fetch("http://localhost:3000/api/hello")
    .then((res) => res.json());
};

export default TimeLine;
