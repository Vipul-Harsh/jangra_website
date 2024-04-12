import Image from 'next/image';
import SectionTitle from '@/components/ui/sectionTitle';
import Title from '@/components/ui/title';
import ServiceSingleSidebar from '@/components/ui/serviceSingleSidebar';
import Feedback from '@/components/section/feedback';
import { servicesData } from "@/lib/fackData/servicesData";

export const metadata = {
  title: "Jangra Build Wave",
  description: "Jangra Interior",
};

const Page = ({ params }) => {
  const service = servicesData.find((service) => service.slug === params.slug);

  return (
    <>
      <section>
        <div className='container-fluid '>
          <SectionTitle sectionName={"Services"} sectionTitle={service.service_name} sectionDesc={"Exploring Excellence in Every Meticulous Design Detail"} />
        </div>
        <div className='container lg:pt-30 2sm:pt-20 pt-14'>
          <div className='grid lg:grid-cols-[58%_auto] xl:gap-[120px] gap-15 items-start'>
            <div>
              <Image src={service.img} loading='lazy' alt='service-img' />
              <div className='pt-12.5'>
                <Title title_text={"Overview"} />
                <p className='text-primary-foreground '>
                  {service.overview}
                </p>
              </div>
              <div className='pt-12.5'>
                <Title title_text={"What's Included"} />
                <ul>
                  {service.whatsIncluded.map((item, index) => (
                    <li key={index}>
                    <h5 className='font-bold  pt-3 pb-3'>{item.heading}</h5>
            <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10  pt-3 pb-3'>{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='pt-12.5'>
                <Title title_text={"How It Works"} />
                <ul>
                  {service.howItWorks.map((item, index) => (
                    <li key={index}>
                    <h5 className='font-bold pt-3 pb-3'>{item.heading}</h5>
                     <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10 pt-3 pb-3'>{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <strong className='mt-12.5 block'>
              Elevate your surroundings with the transformative impact of meticulously chosen designs. Let us at Jangra bring your vision to reality through our expertise in interior design services.
              </strong>
            </div>
            <ServiceSingleSidebar />
          </div>
        </div>
      </section>
      <Feedback />
    </>
  );
}

export default Page;
