import Image from "next/image"
import Button from "@/components/Buttons"
import { motion } from "framer-motion"
import SectionContainer from "@/components/SectionContainer"

export const metadata = {
  title : "Homepage | Portfolio"
}

const Homepage = () => {
  return (
    <SectionContainer>
      <div className="h-full flex flex-col lg:flex-row max-w-[1720px] mx-auto px-[15px]">
        {/* Image Container */}
        <div className="h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* Text Container */}
        <div className="h-full lg:w-[767px] flex flex-col gap-4 md:gap-8 items-center justify-center">
            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left text-black">
              Crafting Digital Experiences, Designing Tomorrow.
            </h1>
            {/* DESC */}
            <p className="md:text-xl text-center md:text-left text-black ">
              Welcome to my digital canvas, where innovation and creativity
              converge. With a keen eye for aesthetics and a mastery of code, my
              portfolio showcases a diverse collection of projects that reflect my
              commitment to excellence.
            </p>
            {/* BUTTONS */}
            <div className="w-full flex gap-4 ">
              <Button className="p-4 rounded-lg ring-1 ring-black bg-black text-white mx-auto md:mx-0 w-full md:w-auto" href={"/portfolio"}>
                View My Work
              </Button>
              <Button className="border-2 border-black p-4 w-full md:w-auto" variant="outline" href={"/contact"}>
                Contact Me
              </Button>
            </div>
          </div>
      </div>
    </SectionContainer>
  )
}

export default Homepage