import Header from "@/components/Header";
import Button from "@/components/Button";
import bgPicture from "@/public/assets/efe-kurnaz-RnCPiXixooY-unsplash.jpg";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between"
      style={{
        backgroundImage: `url(${bgPicture.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Header name="TESS" span="TALK" />
      <Button />
    </main>
  );
}
