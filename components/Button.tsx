import Link from "next/link";

const Button = () => {
  return (
    <div className="w-full">
      <Link href="/game">
        <button className="box border-2 border-white w-[330px] h-[50px] m-6 rounded font-semibold text-white text-lg bg-[rgba(97,0,207,0.3)]">
          STEP IN
        </button>
      </Link>
    </div>
  );
};

export default Button;
