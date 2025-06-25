import {
  About,
  Events,
  Footer,
  Hero,
  JoinSection,
  Navigation,
} from "../components/landing-page/";
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation></Navigation>
      <Hero></Hero>
      <About></About>
      <Events></Events>
      <JoinSection></JoinSection>
      <Footer></Footer>
    </div>
  );
}
