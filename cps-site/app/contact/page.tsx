import {
  Navigation,
  Footer,
} from "../../components/landing-page/";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation></Navigation>
      <h1>contacts goes here</h1>
      <div className='absolute bottom-0 w-full'>
        <Footer></Footer>
      </div>
    </div>
  );
}
