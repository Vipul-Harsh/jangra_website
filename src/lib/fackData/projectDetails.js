import Image from 'next/image'
import project_img_1 from "@/assets/images/newimages/slide1.jpg"
import project_img_2 from "@/assets/images/newimages/slide2.jpg"
import project_img_3 from "@/assets/images/newimages/slide3.jpg"
import project_img_4 from "@/assets/images/newimages/slide4.jpg"

export const projectsData = [
    {
        id: 1,
        project_name: "Pixel House",
        project_img: project_img_2,
        project_desc: "A modern residential project located in Sao Paulo, Brazil, integrating natural elements with contemporary design.",
        client: "Sogeprom",
        area: "14,891 m²",
        project_year: "2020",
        project_type: "Residential",
        link: "/project-single/pixel-house",
        location: "Sao Paulo, Brazil"
    },
    {
        id: 2,
        project_name: "La Fuente",
        project_img: project_img_3,
        project_desc: "An elegant commercial space in the US, designed to optimize functionality while maintaining aesthetic appeal.",
        client: "Sogeprom",
        area: "14,891 m²",
        project_year: "2022",
        project_type: "Commercial",
        link: "/project-single/la-fuente",
        location: "US"
    },
    {
        id: 3,
        project_name: "Bovio House",
        project_img: project_img_1,
        project_desc: "A luxurious residential project in the UK, showcasing a blend of traditional and modern design elements.",
        client: "Sogeprom",
        area: "14,891 m²",
        project_year: "2021",
        project_type: "Residential",
        link: "/project-single/bovio-house",
        location: "UK"
    },
    {
        id: 4,
        project_name: "MFA Lakeside",
        project_img: project_img_4,
        project_desc: "A private lakeside house in the US, offering a serene and tranquil environment with a focus on sustainable design.",
        client: "Sogeprom",
        area: "14,891 m²",
        project_year: "2022",
        project_type: "Private House",
        link: "/project-single/mfa-lakeside",
        location: "US"
    },
];