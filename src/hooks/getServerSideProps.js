import { projectsData } from "@/lib/fackData/projectsData";
import { useRouter } from 'next/router';
export async function getServerSideProps({ params }) {
    const project = projectsData.find((p) => p.slug === params.slug);
    return { props: { project } };
}