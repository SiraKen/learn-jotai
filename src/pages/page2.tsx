import { useAtom, getDefaultStore } from "jotai";
import { countAtom } from "../contexts/CounterAtom";
import Layout from "../layouts/Layout";
import { nameAtom } from "../contexts/NameStore";

const SecondPage = () => {
  const [count] = useAtom(countAtom);
  const store = getDefaultStore();

  store.sub(nameAtom, () => {
    console.log(`Name changed to ${store.get(nameAtom)}`);
  });

  return (
    <Layout>
      <div className="bg-white shadow p-5">
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-3xl">{count}</p>
          <p>Stored name: {store.get(nameAtom)}</p>
          <input
            className="p-3 border"
            onChange={(e) => {
              store.set(nameAtom, e.target.value);
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default SecondPage;
