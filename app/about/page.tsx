"use client";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Image from "next/image";
import bendsp from "@/components/assets/bendsp.png";
import WhiteHeader from "@/components/whiteheader"; // ✅ Updated header import

export default function AboutPage() {
  const team = [
    { name: "Daksh Chhatrola", role: "UI/UX Designer", image: "/assets/aboutimage/daksh.png" },
    { name: "Raj Marivad", role: "UI/UX Designer", image: "/assets/aboutimage/raj.png" },
    { name: "Kumar Suthik", role: "UI/UX Designer", image: "/assets/aboutimage/satwik.png" },
    { name: "Lady Gaga", role: "UI/UX Designer", image: "/assets/aboutimage/Lady gaga.png" },
    // { name: "Raj Marivad", role: "Backend Developer", image: "/assets/aboutimage/raj.png" },
    // { name: "Daksh Chhatrola", role: "Frontend Developer", image: "/assets/aboutimage/daksh.png" },
  ];

  return (
    <main className="bg-white text-black min-h-screen relative">
      {/* ✅ Add white background header with black text */}
      <WhiteHeader />

      {/* Page Content */}
      <Container className="pt-20 pb-16">
        <div className="max-w-3xl mx-auto mt-6 space-y-6 text-left text-neutral-700 leading-relaxed">
          <p>
            Tin cidunt ut laoreet dolore magna ali quam erat volutpat. Ut wisi enim ad minim veniam,
            quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy
            nibh euismod.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod.
          </p>
          <p>
            Tin cidunt ut laoreet dolore magna ali quam erat volutpat. Ut wisi enim ad minim veniam,
            quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy
            nibh euismod.
          </p>
        </div>

        {/* Team Section */}
        {/* <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-0">
  {team.map((person, idx) => (
    <div key={idx} className="flex flex-col items-center text-center">
      <div className="w-11/12 overflow-hidden shadow-md bg-neutral-100 border-t border-b border-gray-300 flex items-center justify-center">
        <Image
          src={person.image}
          alt={person.name}
          width={300}
          height={300}
          className="w-auto h-auto max-w-full max-h-full object-contain opacity-100 hover:opacity-100 transition-opacity"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-black">{person.name}</h3>
      <p className="text-neutral-600 text-sm">{person.role}</p>
    </div>
  ))}
</div> */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-0">
  {team.map((person, idx) => (
    <div key={idx} className="flex flex-col items-center text-center">
      <div className="w-11/12 h-[280px] overflow-hidden shadow-md bg-neutral-100 border-t border-b border-gray-300 flex items-center justify-center">
        <Image
          src={person.image}
          alt={person.name}
          width={300}
          height={300}
          className="w-auto h-auto max-w-full max-h-full object-contain opacity-100 hover:opacity-100 transition-opacity"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-black">{person.name}</h3>
      <p className="text-neutral-600 text-sm">{person.role}</p>
    </div>
  ))}
</div>


        {/* Back link */}
        <div className="mt-10 text-center">
          <a href="/" className="underline underline-offset-4 text-neutral-700 hover:text-black">
            ← Back to Home
          </a>
        </div>

        {/* Bend Image */}
        <div className="mt-12">
          <Image
            src={bendsp}
            alt="Bend Shape"
            className="w-full h-auto object-cover aspect-[16/9]"
          />
        </div>
      </Container>

      <Footer />
    </main>
  );
}
