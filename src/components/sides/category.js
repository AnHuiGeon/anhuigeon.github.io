import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

const Category = ({ data }) => {
  const categoriesData = data.categoriesGroup.group
  const tagsData = data.tagsGroup.group
  let pathname = typeof window !== "undefined" ? window.location.pathname : ""
  let urlPathName = pathname.split("/")[1]

  return (
    <article>
      <section>
        <ul>
          {categoriesData.map((categorydata) => (
            <li key={categorydata.fieldValue}>
              {urlPathName === categorydata.fieldValue
                ?<Link
                style={{fontWeight: "900", textDecoration: 'none'}}
                to={`/${kebabCase(categorydata.fieldValue)}`}
                className="category">
                  {categorydata.fieldValue} ({categorydata.totalCount})
                </Link>
                :<Link
                style={{textDecoration: 'none'}}
                to={`/${kebabCase(categorydata.fieldValue)}`}
                className="category">
                  {categorydata.fieldValue} ({categorydata.totalCount})
                </Link>
              }
            </li>
          ))}
          <li>
            {urlPathName === "tags"
            ?<Link
            style={{fontWeight: "900", textDecoration: 'none'}}
            to="/tags"
            >
              AllTags ({tagsData.length})
            </Link>
            :<Link to="/tags"
            style={{textDecoration: 'none'}}
            >
              AllTags ({tagsData.length})
            </Link>
            }
          </li>
        </ul>
      </section>
    </article>
  )
}

export default Category