import type { NextPage } from "next";
import Link from "next/link";

const InteractIndex: NextPage = () => {
  return (
    <nav className="flex w-full justify-end py-5 space-x-5 px-5">
      <Link href="/interact">
        <a>Interact</a>
      </Link>
      <Link href="/blocks">
        <a>Blocks</a>
      </Link>
      <Link href="/functions">
        <a>Funtions</a>
      </Link>
    </nav>
  );
};

export default InteractIndex;
