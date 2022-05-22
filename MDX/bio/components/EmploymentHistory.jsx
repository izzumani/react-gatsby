import React from "react";
const employment = [
    {
        company: "Craft Silicon",
        role: "Software Engineer"
    },
    {
        company: "Workspace Technology",
        role: "Technical Support Engineer"
    }
];

const EmploymentHistory = () => (
        <div className="text-left max-w-xl mx-auto">
            <div className="grid grid-cols-2 gap-2 mt-5">
            {
                employment.map(({role,company})=>{
                    <>
                        <div className="flex justify-end fontbold">
                            <p>{role}</p>
                        </div>
                        <p>{company}</p>
                    </>
                })
            }
            </div>
        
        </div>
);

export default EmploymentHistory