type Props = {
  children: React.ReactNode;
};

const FormFooter = ({ children }: Props) => {
  return (
    <>
      <p className="mt-6 text-sm text-center text-gray-400">{children}</p>
    </>
  );
};

export default FormFooter;
