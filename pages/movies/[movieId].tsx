import { useRouter } from "next/router";

const MovieDetail = () => {
  const router = useRouter();
  console.log(router);
  return "Detail";
};

export default MovieDetail;
