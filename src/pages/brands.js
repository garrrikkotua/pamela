import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Nav2 from "../components/common/navigation/nav2"

import Footer from "../components/sections/footer"
import BrandHeader from "../components/sections/brand_header";


const BrandsPage = () => {

    return (
    <Layout>
        <SEO title="Бренды"/>
        <BrandHeader/>
        <Nav2/>
        <div id='form'>
            <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js">
            </script>
            <iframe className="airtable-embed airtable-dynamic-height"
                    src="https://airtable.com/embed/shrJheSGZEQbfheih?backgroundColor=orange" frameBorder="0"
                    onmousewheel="" width="100%" height="1908"
                    style={{"background": "transparent", "border": "1px solid #ccc"}}>
            </iframe>
        </div>
        <Footer/>
    </Layout>
    )
}

export default BrandsPage
