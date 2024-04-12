// pages/project-single/[id].js

"use client"
export default function ProjectSingle({params}) 
{
    return(
        <>
            <div>
            {params.project_name}
        </div>
        </>
        
    )
}