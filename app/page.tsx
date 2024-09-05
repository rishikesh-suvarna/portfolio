import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";

export default function Home() {


  return (
    <main className="min-h-screen">
      <section className="hero">
        <div className="container px-18 mx-auto py-20">
          <div className="grid grid-cols-2 gap-2">
            <div className="hero-text">
              <h1 className="text-5xl font-light">Hello, I&apos;m <span className="text-blue-500">Rishikesh Suvarna</span></h1>
              <p className="text-lg mt-10">I&apos;m a full-stack developer with a passion for building beautiful and functional websites.</p>
            </div>
            <div className="hero-image">
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
