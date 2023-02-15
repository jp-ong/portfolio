import AboutSection from "@/components/AboutSection";
import InfoSection from "@/components/InfoSection";
import Layout from "@/components/Layout";
import TechsSection from "@/components/TechsSection";

export default function Home() {
  return (
    <Layout>
      <InfoSection />
      <AboutSection />
      <TechsSection />
    </Layout>
  );
}
