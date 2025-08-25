//updated protflio
import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
export default function Home() {
  return (
  <main className="relative">
    <div>
      <h1 className="text-
      xl font-bold">
        <FloatingNav navItems={[
          { name: "Home", link: "#home" ,icon:<FaHome/>},
          { name: "About", link: "#about" },
          { name: "Projects", link: "#projects" },
          { name: "Contact", link: "#contact" },
        ]}/>
       <Hero/>
      </h1>
    </div>
  </main>
  );
}
