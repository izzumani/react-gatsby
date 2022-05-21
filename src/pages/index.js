import React from "react"
import {Link} from "gatsby"
import StyleWrapper from "../components/StyleWrapper"
const Index = () => {
    return (
        <div>
            <StyleWrapper>
                <h1>My Landing Page</h1>
                <p>This is my landing page.</p>
                <Link to="/about">About Me</Link>
            </StyleWrapper>
            
        </div>
    )
}

export default Index