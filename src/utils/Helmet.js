import React from 'react'
import {Helmet} from 'react-helmet'

export const HelmetTitle = ({title, desc}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={desc} />
        </Helmet>
    )
}


