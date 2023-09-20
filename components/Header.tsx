type HeaderProps = {
  name: string;
  span: string;
};

const Header = ({ name, span }: HeaderProps) => {
  return (
    <h1>
      {name}
      <br />
      <span>{span}</span>
    </h1>
  );
};

export default Header;
