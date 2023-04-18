import React, { forwardRef } from "react";
import Image from "next/image";

const Services = forwardRef<HTMLDivElement>((_, forwardedRef) => {
  return (
    <div
      ref={forwardedRef}
      className="px-3 lg:pt-14 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10	 font-roboto-mono"
    >
      <div className="lg:p-0">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl	">CO-NODES</h2>
          <p className="">
            Collaborative staking among users to pool to achieve threshold stake
            and operate collectively. This democratises participation and allows
            sub-stake holders to benefit from reward protocols. It also enables
            compounding as participants can sweep earned rewards into further
            Co-Nodes
          </p>
        </div>
        <div className="pt-9">
          <Image
            src={"/co-nodes.svg"}
            alt="co-nodes.svg"
            width={20}
            height={18}
          />
        </div>
      </div>
      <div className="pt-20	lg:p-0">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl	">MANAGED-NODES</h2>
          <p className="">
            Outsource node deployment, management, and maintenance to Node Army
            for a small commission of earned rewards. Develop a passive yield
            portfolio with minimum time and skill commitment.
          </p>
        </div>
        <div className="pt-9">
          <Image
            src={"/managedNodes.svg"}
            alt="co-nodes.svg"
            width={20}
            height={18}
          />
        </div>
      </div>
      <div className="pt-10 lg:p-0">
        <Image src={"/Frameone.png"} alt="frameone" width={351} height={410} />
      </div>
      <div className="pt-20 lg:p-0 lg:col-start-3 lg:row-start-2">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl	">NODES AS A SERVICE</h2>
          <p className="">
            An industrial node solution for projects requiring robust
            decentralised node infrastructures at scale. Node Army collaborates
            with projects during development phase and through a blockchain
            lifecycle.
          </p>
        </div>
        <div className="pt-9">
          <Image
            src={"/nodeservice.svg"}
            alt="co-nodes.svg"
            width={20}
            height={18}
          />
        </div>
      </div>
      <div className="pt-10 lg:p-0 lg:col-start-1 lg:row-start-3">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl	">REWARDS</h2>
          <p className="">
            Participate in underlying projects offering rewards for staking,
            validating, and securing their network through a transparent
            process. Node Army does not offer or promote its own Node Army
            yield, but rewards are transparently distributed on the blockchain
            according to the underlying project's protocol and tokenomics.
          </p>
        </div>
        <div className="pt-9">
          <Image
            src={"/rewards.svg"}
            alt="co-nodes.svg"
            width={20}
            height={18}
          />
        </div>
      </div>
      <div className="pt-20 lg:p-0 lg:col-start-2 lg:row-start-3">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl	">NODE BUILD TEMPLATES</h2>
          <p className="">
            Easily deploy nodes with pre-built templates hosted in the
            Marketplaces of premier cloud computing providers. Templates are
            specific to the different underlying blockchain networks, designed
            to make deployment seamless.
          </p>
        </div>
        <div className="pt-9">
          <Image
            src={"/nodetemplates.svg"}
            alt="co-nodes.svg"
            width={20}
            height={18}
          />
        </div>
      </div>
      <div className="pt-10 lg:col-start-2 lg:row-start-4">
        {" "}
        <Image src={"/Frametwo.png"} alt="frameone" width={351} height={410} />
      </div>
      <div className="pt-20 lg:col-start-3 lg:row-start-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl	">BLOCKCHAIN SCALABILITY </h2>
          <p className="">
            Leverage scalable blockchain infrastructure and a substantial and
            growing community of committed datapreneurs for rapid and effective
            scaling of blockchain-based applications. Maintain high performance
            and security in a decentralised approach.
          </p>
        </div>
        <div className="pt-9">
          <Image
            src={"/blockchain.svg"}
            alt="co-nodes.svg"
            width={20}
            height={18}
          />
        </div>
      </div>
    </div>
  );
});

Services.displayName = "Services";

export default Services;
