import { Link as RouterLink } from "react-router-dom";
import { useAtom } from "jotai";
import { countAtom } from "../contexts/CounterAtom";

const Link = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <RouterLink to={to} className="pb-1 border-b border-gray-500">
      {children}
    </RouterLink>
  );
};

const Menu = () => {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <p>Count: {count}</p>
      <ul className="flex flex-row gap-3 p-3">
        <li>
          <Link to="/">Index</Link>
        </li>
        <li>
          <Link to="/page2">Page 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
