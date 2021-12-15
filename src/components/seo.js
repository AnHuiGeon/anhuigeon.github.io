import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ meta, description, lang, title }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						siteUrl
					}
				}
			}
		`
	)

	const metaDescription = description || site.siteMetadata.description

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			meta={[
				{
					name: `google-site-verification`,
					content: 'rvfbJtwRoRF0W7YEmxwXRYE3bX4SC4DrYAwy8SbtEd8',
				},
				{
					name: `description`,
					content: metaDescription,
				},
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
		/>
	)
}

Seo.defaultProps = {
	lang: `ko`,
	meta: [],
	description: ``,
}

Seo.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
}

export default Seo

// https://www.gatsbyjs.com/docs/add-seo-component/
    // SEO 구성 요소 추가, gatsby-config.js, SEO 구성 요소
// https://www.gatsbyjs.com/docs/how-to/adding-common-features/seo/
    // 서버 렌더링 확인, 속도 향상, 페이지 메타데이터, 구조화된 데이터를 사용하여 검색 엔진에서 리치 스니펫 생성
// https://www.gatsbyjs.com/tutorial/seo-and-social-sharing-cards-tutorial/
    // gatsby를 사용한 검색 엔진 최적화(SEO) 및 소셜 공유 카드
// https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
    // useStaticQuery Hook을 사용하여 구성 요소의 데이터 쿼리