"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules"
import 'swiper/css';

import QuoteIcon from '@/assets/icons/quoteIcon';
import SectionTitle from '../ui/sectionTitle'
import ProgressAndNatigation from '../ui/progressAndNatigation';
import { cn } from '@/lib/utils';

const testimonialData = [
    {
        id: 1,
        name: "Sarah Johnson",
        position: "Lead Designer at Modern Spaces Inc.",
        review: "Impressed by Jangra's design prowess. They transformed my home into a stylish retreat."
    },
    {
        id: 2,
        name: "John Smith",
        position: "Principal Architect at Smith & Co. Architecture",
        review: "Jangra brought my vision to life, delivering a design that's both stunning and functional."
    },
    {
        id: 3,
        name: "Emily Roberts",
        position: "Design Lead at UrbanLiving Interiors",
        review: "Jangra revamped our office space with precision and innovation. Their designs are truly remarkable."
    },
    {
        id: 4,
        name: "Sarah Johnson",
        position: "Lead Designer at Modern Spaces Inc.",
        review: "Impressed by Jangra's design prowess. They transformed my home into a stylish retreat."
    },
    {
        id: 5,
        name: "John Smith",
        position: "Principal Architect at Smith & Co. Architecture",
        review: "Jangra brought my vision to life, delivering a design that's both stunning and functional."
    }
];

const Testimonial = ({ text_muted, bg_muted }) => {
    const pagination = {
        clickable: true,
        el: ".progressbar-pagination",
        type: 'progressbar'
    };
    return (
        <section className='pt-20'>
            <div className='container-fluid '>
                <SectionTitle
                    sectionName={"Testimonial"}
                    sectionTitle={"What Our Client Says"}
                    sectionDesc={"Inspiring Stories from Our Clients, Where Dreams Find Their Designers"}
                    bg_muted={bg_muted}
                    text_muted={text_muted}
                />

                <div className='lg:pt-30 2sm:pt-20 pt-14'>
                    <Swiper
                        spaceBetween={30}
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            700: {
                                slidesPerView: 2
                            },
                            1300: {
                                slidesPerView: 3
                            }
                        }}
                        pagination={pagination}
                        loop={true}
                        modules={[Pagination, Navigation]}
                        className=''
                    >
                        {
                            testimonialData.map(({ id, name, position, review }) => {
                                return (
                                    <SwiperSlide key={id}>
                                        <div className='flex md:gap-6 gap-2'>
                                            <div className='text-secondary-foreground'><QuoteIcon /></div>
                                            <div className='mt-16'>
                                                <p className={cn(`text-lg text-primary-foreground ${text_muted}`)}>{review}</p>
                                                <div className='relative after:absolute after:-left-5 after:top-0 after:w-[1px] after:h-full after:bg-primary ml-5 mt-6'>
                                                    <h5 className={cn(`text-primary-foreground font-extrabold leading-160 text-lg ${text_muted}`)}>{name}</h5>
                                                    <p className={cn(`text-primary-foreground font-medium ${text_muted}`)}>{position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                        <div className='container'><ProgressAndNatigation /></div>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonial