import React from 'react'
import Helmet from 'react-helmet'
import config from '../../utils/website.js'

const SEO = () => {
    const title = config.title
    const description = config.description
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
        </>
    )
}

export default SEO
