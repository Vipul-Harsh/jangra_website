import Link from "next/link";
import Logo from "@/assets/icons/logo";
import SocialMediaList from "./ui/socialMediaList";

const Footer = () => {
  return (
    <footer className=" container-fluid  mx-auto ">
      <div className=" bg-secondary ">
        <div className="container">
          <div className="grid lg:grid-cols-3 grid-cols-1 items-center pt-[100px] pb-20">
            <div>
              <Link href={""} className="text-primary-foreground">
                <Logo height={"30"} width={"218"} />
              </Link>
              <h5 className="xl:text-2xl text-xl font-semibold text-primary-foreground leading-160 pt-2.5 pb-3">
                Shaping Interior Excellence
              </h5>
              <SocialMediaList />
            </div>
            <div className="mt-12 lg:mt-0 flex gap-x-10">
              <span className="h-[198px] w-[1px] bg-primary block my-2.5"></span>
              <div>
                <h5 className="text-2xl font-extrabold block text-primary-foreground leading-160 ">
                  Our Services
                </h5>
                <span className="w-[99px] h-[1px] bg-primary block my-2.5"></span>
                <div className="mt-[17px]">
                
                  <Link
                    href="/service-single/residential-interior-design"
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    Residential Designs
                  </Link>
                  <Link
                    href="/service-single/commercial-interior-design"
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                   Commercial Design 
                  </Link>
                  <Link
                    href="/service-single/industrial-interior-design"
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                   Industrial Design
                  </Link>
                  <Link
                    href="/service-single/renovations-remodeling"
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    Renovations & Remodeling
                  </Link>
                  <Link
                    href="/service-single/custom-furniture-design"
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                   Furnitures
                  </Link>
                  <Link
                    href="/service-single/turnkey-project-solutions"
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    Turnkey Projects
                  </Link>
                </div>
                
              </div>
            </div>
            <div className="mt-12 lg:mt-0 flex gap-x-10">
              <span className="h-[198px] w-[1px] bg-primary block my-2.5"></span>
              <div>
              <h5 className="text-2xl font-extrabold block text-primary-foreground leading-160 ">
                  Quick Links
                </h5>
                <span className="w-[99px] h-[1px] bg-primary block my-2.5"></span>
                <div className="mt-[17px]">
                
                  <Link
                    href="/about-us"
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/project-archive"
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/blog-archive"
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    News & Blogs
                  </Link>
                  <Link
                    href="/contact"
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="bg-pritext-primary-foreground" />
          <div className="py-8 lg:flex justify-between items-center">
            <span className="text-sm text-primary-foreground block">
              Made and Managed By <Link href={""}> Rightlabs</Link>{" "}
            </span>
            <span className="text-sm text-primary-foreground block mt-3 lg:mt-0">
              ©2024,Jangra, All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
