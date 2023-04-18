import React, { useState, forwardRef } from "react";
import Image from "next/image";

const data = [
  "What is Node Army? ",
  "How can I benefit from using Node Army?",
  "Do I need technical expertise to use Node Army?",
  "What kind of support does Node Army provide?",
  "How do I get started with Node Army?",
  "How will I be rewarded by using Node Army?",
];

const Faq = forwardRef<HTMLDivElement>(({}, forwardedRef) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleContent = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-roboto-mono pt-16" ref={forwardedRef}>
      <div className="p-4 flex flex-col gap-1">
        {data.map((v, k) => {
          const isSelected = openIndex === k;
          return (
            <div key={k} className="flex flex-col">
              <div
                className={`flex flex-row justify-between font-medium text-[24px] py-0.5 cursor-pointer px-3 ${
                  isSelected ? "lg:bg-custom-gradient lg:text-black-test" : ""
                }`}
                onClick={() => toggleContent(k)}
              >
                {v}
                <div className="basis-1/2 flex justify-end">
                  <Image
                    src={isSelected ? "/min.svg" : "/more.svg"}
                    alt="more"
                    width={20}
                    height={20}
                    className="min-w-[20px] min-h-[20px]"
                  />
                </div>
              </div>
              {openIndex === k && (
                <div className="py-2 text-lg justify-center">
                  Node Army is a cloud-native blockchain infrastructure provider
                  that empowers individuals and businesses to deploy and manage
                  nodes, even without technical expertise. Our infrastructure is
                  secure and scalable, with advanced features such as co-nodes,
                  compounding, and managed nodes.
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
});

Faq.displayName = "Faq";

export default Faq;
