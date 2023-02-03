import { ReactNode } from "react";

const CounterButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: React.MouseEventHandler;
}) => {
  return (
    <button
      type="button"
      className="bg-gray-500 text-white p-3"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CounterButton;
