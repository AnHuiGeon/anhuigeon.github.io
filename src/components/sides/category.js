import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'
import styled from 'styled-components'

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
            <List key={categorydata.fieldValue}>
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
            </List>
          ))}
          <List>
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
          </List>
        </ul>
      </section>
    </article>
  )
}

const List = styled.li`
  list-style: none;
`;
export default Category