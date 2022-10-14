import HeadTitle from "../../components/HeadTitle";
import { useRouter } from "next/router";

export default function MovieDetail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <div>
      <HeadTitle title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
