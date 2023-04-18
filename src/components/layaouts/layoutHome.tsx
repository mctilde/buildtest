import State from "../ui/State";
import Scroll from "../Scroll";
import Services from "../ui/Services";
import Faq from "@/components/ui/Faq";

export default function Layout({}) {
  return (
    <>
      <div className="pt-20">
        <h1 className="font-bold text-[45px] px-3 lg:text-9xl">SERVICES</h1>
        <Services></Services>
      </div>

      <div className="pt-20 pb-14 lg:pb-20 lg:pt-36">
        <Scroll></Scroll>
      </div>

      <div>
        <h1 className="font-bold text-[45px] px-3 lg:text-9xl">
          ENVIROMENT STATEMENT
        </h1>
        <State />
      </div>

      <div className="pt-20	lg:pt-36">
        <h1 className="font-bold text-[45px] px-3 lg:text-9xl sm:text-center">
          FREQUENTLY ASKED
        </h1>
        <Faq></Faq>
      </div>
    </>
  );
}
