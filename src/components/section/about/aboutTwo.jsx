import React from "react";
import Image from "next/image";
import SectionTitle from "../../ui/sectionTitle";
import about_bg from "@/assets/images/newimages/about1.jpg";
import SectionSidebarImg from "@/components/ui/sectionSidebarImg";

const AboutTwo = () => {
  return (
    <section>
      <div className="container-fluid">
        <SectionTitle
          sectionName={"About Us"}
          sectionTitle={"Unveil Jangra's Design Essence"}
          sectionDesc={"Discovering the Heart and Craft of Jangra Interiors"}
        />
        <div
          className={`bg-primary xl:mt-[220px] lg:mt-25 md:mt-44 mt-[540px] xl:mb-20 mb-0`}
        >
          <div className="container">
            <div className="flex lg:flex-row flex-col items-center justify-between gap-[66px]">
              <div className="md:-mt-25 -mt-[470px] -mb-25">
                <SectionSidebarImg img={about_bg} section_name={"about-bg"} />
              </div>
              <div className="max-w-[533px] lg:pt-0 pt-20 lg:pb-0 pb-10">
                <h2 className="text-secondary-foreground text-3xl 2sm:text-4xl font-bold leading-120 mb-14 max-w-[400px]">
                  Designing Dreams: Our Story
                </h2>
                <p className=" text-secondary-foreground">
                  At Jangra Interiors, located in Bhiwadi, we cater to the city
                  and beyond, turning dreams of luxurious living into reality.
                  Whether you're an individual or a busy family, we blend
                  opulence with comfort tailored to your lifestyle. Our
                  innovative solutions and skilled execution bring your vision
                  to life, prioritizing detail and distinctiveness in every
                  project. Trust us to guide you through design choices,
                  ensuring cost-effective, exceptional outcomes that resonate
                  with your style and budget.
                </p>
                <p className="text-secondary-foreground mt-7">
                  Embark on a design odyssey with Jangra Interiors, where every
                  space transforms into a masterpiece of creativity and
                  innovation. Together, let's bring your unique vision to life.
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
