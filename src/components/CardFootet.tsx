type Props = {
  counter: string;
  description: string;
};

export const CardFootet = ({ counter, description }: Props) => {
  return (
    <div className="border-t border-blue-gray-50 p-4">
      <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
        <strong className="text-green-500">{counter}</strong>&nbsp;{" "}
        {description}
      </p>
    </div>
  );
};
