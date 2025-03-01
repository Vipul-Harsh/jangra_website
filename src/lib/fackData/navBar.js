import menu_image_1 from "@/assets/images/menu-image-1.png"
export const menuList = [
    {
        id: 1,
        name: "Home",
        path: "/home-2",
        isMegaMenu: false,
        isDropdown: false,
    },
    {
        id: 2,
        name: "About Us",
        path: '/about-us',
        isMegaMenu: false,
        isDropdown: false
    },
    {
        id: 3,
        name: "Portfolio",
        path: '/project-archive',
        isMegaMenu: false,
        isDropdown: false
    },
    {
        id: 4,
        name: "Services",
        path: "#",
        isDropdown: false,
        isMegaMenu: [
            {
                id: 1,
                menus: [
                    {
                        id: 1,
                        name: "Residential Design",
                        slug: "residential-interior-design",
                        path: "/service-single/residential-interior-design",
                        desc: "Comprehensive residential design solutions tailored to your lifestyle"
                    },
                    {
                        id: 2,
                        name: "Commercial Design",
                        slug: "commercial-interior-design",
                        path: "/service-single/commercial-interior-design",
                        desc: "Innovative commercial design optimizing space and aesthetics"
                    },
                    {
                        id: 3,
                        name: "Industrial Design",
                        slug:"industrial-interior-design",
                        path: "/service-single/industrial-interior-design",
                        desc: "Strategic industrial design maximizing functionality and efficiency"
                    }
                ]
            },
            {
                id: 2,
                menus: [
                    {
                        id: 4,
                        name: "Renovations & Remodelling",
                        slug: "renovations-remodeling",
                        path: "/service-single/renovations-remodeling",
                        desc: "Expert renovation and remodelling services enhancing your space"
                    },
                    {
                        id: 5,
                        name: "Furniture",
                        slug: "custom-furniture-design",
                        path: "/service-single/custom-furniture-design",
                        desc: "Bespoke furniture design ensuring harmony and elegance"
                    },
                    {
                        id: 6,
                        name: "Trunkey Project",
                        slug: "turnkey-project-solutions",
                        path: "/service-single/turnkey-project-solutions",
                        desc: "Comprehensive turnkey solutions for seamless project execution"
                    }
                ]
            },
            {
                id: 3,
                menus: [
                    {
                        id: 7,
                        name: "Civil Designs",
                        slug: "civil-design-architecture",
                        path: "/service-single/civil-design-architecture",
                        desc: "Innovative civil design concepts for structural integrity"
                    },
                    // {
                    //     id: 8,
                    //     name: "Revamps & Remodels",
                    //     path: "/service-single",
                    //     desc: "Renovation and remodeling services that breathe new life"
                    // }
                ]
            },
            {
                id: 5,
                menus: [
                    {
                        id: 9,
                        name: "Embark on a Design Journey with Us",
                        path: "#",
                        desc: "Contact Us",
                        img: menu_image_1
                    }
                ]
            }
        ]
    },
    // {
    //     id: 5,
    //     name: "Pages",
    //     path: "#",
    //     isMegaMenu: false,
    //     isDropdown: [
    //         {
    //             id: 1,
    //             name: "About Us",
    //             path: "/about-us"
    //         },
    //         {
    //             id: 2,
    //             name: "Services",
    //             path: "/services"
    //         },
    //         // {
    //         //     id: 3,
    //         //     name: "Service Single",
    //         //     path: "/service-single"
    //         // },
    //         {
    //             id: 4,
    //             name: "Project Single",
    //             path: "/project-single"
    //         },
    //         {
    //             id: 5,
    //             name: "Product Single",
    //             path: "/product-single"
    //         },
    //         {
    //             id: 6,
    //             name: "Product Archive",
    //             path: "/product-archive"
    //         },
    //         {
    //             id: 7,
    //             name: "Career",
    //             path: "/career"
    //         },
    //         {
    //             id: 8,
    //             name: "Job Details",
    //             path: "/job-details"
    //         },
    //         {
    //             id: 9,
    //             name: "Team",
    //             path: "/team"
    //         },
    //         {
    //             id: 10,
    //             name: "Team Single",
    //             path: "/team-single"
    //         },
    //         {
    //             id: 11,
    //             name: "Contact 2",
    //             path: "/contact-2"
    //         },
    //     ]
    // },
    {
        id: 6,
        name: "News & Blogs",
        path: "/blog-archive",
        isMegaMenu: false,
        isDropdown: false,
    },
    // {
    //     id: 6,
    //     name: "Contact Us",
    //     path: "/contact",
    //     isMegaMenu: false,
    //     isDropdown: false
    // },
]