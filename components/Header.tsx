import Link from "next/link";

type HeaderProps = {
  name: string;
  span: string;
};

const Header = ({ name, span }: HeaderProps) => {
  return (
    <Link href="/">
      <h1 className="pt-4 text-white">
        {name}
        <br />
        <span className="text-2xl md:text-white text-shadow">{span}</span>
      </h1>
    </Link>
  );
};

export default Header;
