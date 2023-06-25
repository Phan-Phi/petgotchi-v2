import dynamic from "next/dynamic";

const Container = dynamic(() => import("@/containers/Home/Container"), {
  ssr: false,
});

function HomePage() {
  return <Container />;
}

export default HomePage;
