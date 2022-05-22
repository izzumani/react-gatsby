import React from "react"
import {Link, graphql} from "gatsby"
//import StyleWrapper from "../components/StyleWrapper"
// import styled from "styled-components"
import Layout from "../components/Layout"
// const Box = styled.div'
// background-color: #333;
// padding: 20px;
// h1 {
// color: #fff;
// margin: 0 0 10px;
// padding: 0;
// }
// p {
// color: #fff
// }
// )'
export  default function Index  ({data})  {
const {
    site: {
        siteMetadata: {name, role},
    }
} = data

// let name ="Isaac Njiru"
// let role ="Senior Software Engineer"
    
    return (
        <div>
            {/*<StyleWrapper>*/}
            <Layout>
                <div className="max-w-5xl mx-auto py-16 lg:py-24">
                    <h1 className="text-4xl md:text-6xl font-bold text-black pb-4">{name}</h1>
                    <p className="mb-4">{role}</p>
                    <Link to="/about" className="btn">About Me</Link>
                </div>
                
            </Layout>
                
            {/*</StyleWrapper>*/}
            
        </div>
    )
}

 export const query = graphql`
 {
     site {
         siteMetadata {
             name
             role
         }
     }
 }
 `; 