import { Button } from "@/components/ui/button";
import { BrainCogIcon, EyeIcon, GlobeIcon, MonitorSmartphoneIcon, ServerCogIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const features = [
  {
    name: "Store your pdf documents",
    description: "keep all you PDF files securely stored and easily accessible anytime, anywhere",
    icon: GlobeIcon
  },
  {
    name: "Blazing fast responses",
    description: "Experience lightning fast answers to your queries, ensuring you get the information you need instantly",
    icon: ZapIcon
  },
  {
    name: "Chat memorisation",
    description: "Our intelligent chatbot members previous interactions, providing a seamless and personalised experience",
    icon: BrainCogIcon
  },
  {
    name: "Interactive pdf viewer",
    description: "Engage with your PDF like never before using our intuitive and interactive viewer",
    icon: EyeIcon
  },
  {
    name: "Backup in the cloud",
    description: "Rest assured knowing your PDFs are backed up in the cloud,protected from loss or damage ",
    icon: ServerCogIcon
  },
  {
    name: "Responsive across devices",
    description: "Access your chat PDFs seamlessly on any device whether it's your desktop, laptop, phone or tablet",
    icon: MonitorSmartphoneIcon
  }
]

export default function Home() {
  return (
    <main className=" flex-1 bg-gradient-to-bl from-white to-indigo-400 overflow-scroll lg:p-5 p-2">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Your Interactive Document Companion </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your PDFs into Interactive Conversations
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Introducing{" "}
              <span className="font-bold text-indigo-600">Chat with PDF</span>
              <br />
              <br /> Upload your document, and our <span className="text-indigo-600">
                AI powered chatbot
              </span>{" "} will answer your questions, summarize content. Ideal for everyone, <span className="text-indigo-600">
                Chat with PDF
              </span>{" "}
              turns static documents into{" "}
              <span className="font-bold">dynamic conversations</span>,
              <span className="text-indigo-600">
                enhancing productivity
              </span>{" "} 10x fold effortlessly


            </p>
          </div>
          <Button asChild className="px-4 mt-3">
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>

        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-800/10" alt="app screenshot" src="https://imgur.com/VciRSTI.jpeg" width={2432} height={1442} />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 inset-x-32 bg-gradient-to-t from-white/90 pt-[5%]" />
            </div>
          </div>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((featuer,id) => (
              <div className="relative pl-9" key={id}>
                <dt className="inline font-semibold text-gray-900">
                  <featuer.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                </dt>
                <dd>{featuer.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
