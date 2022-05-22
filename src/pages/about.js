import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function About({data})
{
    const {
        markdownRemark: { html },
        graphCmsIcebreaker: { hobbies },
    } = data;
    return (
        <Layout>
            <div className="max-w-5xl mx-auto py-16 lg:py-24  text-center">
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
                <div>
                    <h2>Hobbies</h2>
                        {hobbies.join(", ")}
                    </div>
            </div>

        </Layout>
        
    )
}

export const query = graphql`
{
    markdownRemark(frontmatter: {type: {eq: "bio" }
})  
    {
        html
    }
    graphCmsIcebreaker {
        hobbies
    }
}
`

