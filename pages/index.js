import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Docs But Bettter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="bg-[#f1f3f4] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="py-6">
            <h2 className="text-black">Create a new document</h2>
          </div>
          <div className="place-items-center">
            <div className="relative h-52 w-40 cursor-pointer mb-2">
              <Image
                src="https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-4.png"
                layout="fill"
                alt="blank document"
              />
            </div>
            <p className="text-sm ml-1">Blank Document</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow">Document Name</h2>
            <p className="mr-12 text-grey-700">Date Created</p>
          </div>
        </div>
      </section>
    </div>
  );
}
