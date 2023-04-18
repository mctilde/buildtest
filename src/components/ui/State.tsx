import React, { forwardRef } from "react";
import Image from "next/image";

const State = forwardRef<HTMLDivElement>((_, forwardedRef) => {
  return (
    <div
      ref={forwardedRef}
      className="px-3 pt-14	lg:pt-20 lg:grid lg:grid-cols-3 lg:gap-x-8	lg:gap-y-10	font-roboto-mono"
    >
      <div className="lg:p-0">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl	">PROOF OF STAKE</h2>
          <p className="">
            Proof of stake blockchain validation is more environmentally
            friendly than proof of work, as it consumes significantly less
            energy by not requiring computational puzzles to be solved.
            Validators are selected based on cryptocurrency holdings, reducing
            the carbon footprint of the network.
          </p>
          <p> Unless directly disclosed none
            of the projects we support will operate through Proof of Work.</p>
        </div>
        <div className="pt-9">
          <Image src={"/proof.svg"} alt="co-nodes.svg" width={20} height={18} />
        </div>
      </div>
      <div className="pt-8 lg:p-0">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl	">CLOUD COMPUTING</h2>
          <p className="">
            Cloud computing provides more efficient resource usage , reducing
            the need for physical hardware and lowering the carbon footprint of
            the network. Other benefits include increased scalability, faster
            transaction speeds, and improved accessibility.
          </p>
          <p>
            Overall, cloudcomputing provides an eco-friendly and efficient
            solution for validating and recording transactions on PoS
            blockchains.
          </p>
        </div>
        <div className="pt-9">
          <Image
            src={"/managedNodes.svg"}
            alt="cloud.svg"
            width={20}
            height={18}
          />
        </div>
      </div>
      <div className="pt-16 lg:p-0 lg:col-start-2 lg:row-start-2">
        <Image
          src={"/Framethree.png"}
          alt="frameone"
          width={351}
          height={410}
        />
      </div>
      <div className="pt-8 lg:p-0 lg:col-start-3 lg:row-start-2">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl	">NODE ARMY</h2>
          <p className="">
            We regularly review cloud computing platforms to ensure you can
            choose from proven, reliable, scalable and environmentally
            responsible providers. Node Army will endeavor to integrate a energy
            utilization metric to our and your dashboards in the near future for
            transparency of impact
          </p>
        </div>
        <div className="pt-9">
          <Image
            src={"/nodeArmy.svg"}
            alt="co-nodes.svg"
            width={20}
            height={18}
          />
        </div>
        <div className="pt-9"></div>
      </div>
    </div>
  );
});

State.displayName = "State";

export default State;
