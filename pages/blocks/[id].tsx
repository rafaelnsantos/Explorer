import type { GetServerSideProps, NextPage } from "next";

interface Props {
  id: string;
}

const Block: NextPage<Props> = ({ id }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      Showing block: {id}
    </div>
  );
};

export default Block;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const id = context.query?.id || "";
  return { props: { id: id.toString() } };
};
