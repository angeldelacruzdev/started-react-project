import { CardFootet } from "./CardFootet";

type Props = {
  title: string;
  amount: string;
  counter: string;
  counterDescription: string;
  icon: React.ReactNode;
};

export const Card = ({
  title,
  counter,
  amount,
  counterDescription,
  icon,
}: Props) => {
  return (
    <>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
        <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
          {icon}
        </div>
        <div className="p-4 text-right">
          <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
            {title}
          </p>
          <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
            {amount}
          </h4>
        </div>
        <CardFootet counter={counter} description={counterDescription} />
      </div>
    </>
  );
};
