import Image from 'next/image'
import Link from 'next/link'
import RightArrow from '@/assets/icons/rightArrow'
import video_thumb from "@/assets/images/newimages/6.jpg"
import SectionTitle from '../ui/sectionTitle'
import { cn } from '@/lib/utils'
import VideoPlay from '../ui/videoPlay'
  

import ButtonOutline from '../ui/buttons/buttonOutline'

const VideoPortfolio = ({ text_muted, bg_muted, after_bg_muted }) => {
    return (
        <section className='pt-20'>
            <div className='container-fluid '>
                <SectionTitle sectionName={"Process"} sectionTitle={"Journey Through Inspiring Spaces"} sectionDesc={"Where Creativity Soars with Inspiring Interior Design Insights"} bg_muted={bg_muted} text_muted={text_muted} />
            </div>
            <div className='container-fluid lg:pt-30 2sm:pt-20 pt-14'>
                <div className={cn(` relative after:contents-[""] after:absolute after:left-0 after:top-0 after:max-w-[1320px] after:w-full z-[1] after:h-full after:bg-primary ${after_bg_muted} pt-[90px] pb-[110px]`)}>
                    <div className='container flex lg:flex-row flex-col justify-between relative z-10'>
                        <div className='2xl:max-w-[637px] lg:max-w-[500px] w-full'>
                            <h4 className='text-secondary-foreground text-3xl 2sm:text-4xl font-bold leading-135'>Step into the dynamic realm of Interior Design Mastery.</h4>
                            <p className='text-secondary-foreground mt-5'>Witness our designs unfold through captivating visuals highlighting our creativity, innovation, and the evolution of spaces from concept to completion.</p>
                            <ul className='mt-[35px]'>
                                <li className='text-secondary-foreground flex items-center gap-[27px]'><RightArrow width={"35"} height={"22"} /> <span className='text-secondary-foreground text-2xl leading-160 font-bold'>Conceptual Insight</span> </li>
                                <li className='text-secondary-foreground flex items-center gap-[27px] mt-4'><RightArrow width={"35"} height={"22"} /> <span className='text-secondary-foreground text-2xl leading-160 font-bold'>Team-driven Solutions</span> </li>
                                <li className='text-secondary-foreground flex items-center gap-[27px] mt-4'><RightArrow width={"35"} height={"22"} /> <span className='text-secondary-foreground text-2xl leading-160 font-bold'>Impeccable Implementation</span> </li>
                            </ul>
                            <Link href={""} className='mt-[70px] inline-block'>
                                <ButtonOutline className={'border-secondary text-secondary-foreground sm:px-10 px-3 after:hover:bg-secondary after:left-0 hover:text-primary-foreground'}>Process of Our Work <RightArrow width={"35"} height={"22"} /></ButtonOutline>
                            </Link>
                        </div>
                        <VideoPlay img={video_thumb} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default VideoPortfolio