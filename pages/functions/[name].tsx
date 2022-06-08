import type { NextPage } from "next";
import { useRouter } from "next/router";

const SingleFunction: NextPage = () => {
  let router = useRouter();
  let { name } = router.query;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      SingleFunction: {name}
    </div>
  );
};

export default SingleFunction;
