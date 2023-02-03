import { useAtom } from "jotai";
import { Helmet } from "react-helmet-async";
import { countAtom } from "../contexts/CounterAtom";
import Layout from "../layouts/Layout";
import CounterButton from "../components/CounterButton";

const IndexPage = () => {
  const [count, setCount] = useAtom(countAtom);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <Helmet>
        <title>Jotai Index</title>
      </Helmet>
      <Layout>
        <div className="bg-white shadow p-5">
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-3xl">{count}</p>
            <div className="flex gap-3">
              <CounterButton onClick={increment}>
                <span className="mr-3">+</span>Increment
              </CounterButton>
              <CounterButton onClick={decrement}>
                <span className="mr-3">-</span>Decrement
              </CounterButton>
              <CounterButton onClick={reset}>
                <span className="mr-3">@</span>Reset
              </CounterButton>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
