import { useRouter } from "next/router";
function DetailPage() {
  const router = useRouter();

  console.log(router.query.newsId);

  return <h1>The detail page</h1>;
}
export default DetailPage;
