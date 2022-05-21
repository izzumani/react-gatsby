import React from "react"
import {Link} from "gatsby"
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
const Index = () => {

    
    return (
        <div>
            {/*<StyleWrapper>*/}
            <Layout>
                <h1 >My Landing Page</h1>
                <p>This is my landing page.</p>
                <Link to="/about">About Me</Link>
            </Layout>
                
            {/*</StyleWrapper>*/}
            
        </div>
    )
}

export default Index