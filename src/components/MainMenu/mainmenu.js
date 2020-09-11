import React from 'react';

import { useStaticQuery, graphql, Link } from 'gatsby';

import OrderButton from '../OrderButton/orderButton'

import mainMenuStyles from './mainmenu.module.scss';

const MainMenu = () => {
  const data = useStaticQuery(graphql`
  {
    allWordpressWpApiMenusMenusItems(filter: {
      name: {
        eq: "Main-menu"
      }
    }) {
      edges {
        node {
          items {
            title
            object_slug
          }
        }
      }
    }
  }
  `);
  return (
    <div>
      {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
        <Link className={mainMenuStyles.mainmenuLink} to={`#${item.object_slug}`} key={item.title}>
          {item.title}
        </Link>
      ))}
      <OrderButton />
    </div>
  )
}

export default MainMenu