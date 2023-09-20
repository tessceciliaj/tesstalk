type HeaderProps = {
  name: string;
  span: string;
};

const Header = ({ name, span }: HeaderProps) => {
  return (
    <h1 className="pt-4 text-white text-xl">
      {name}
      <br />
      <span className="text-[#F94390] text-2xl">{span}</span>
    </h1>
  );
};

export default Header;
