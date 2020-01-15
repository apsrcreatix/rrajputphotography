import { graphql, useStaticQuery } from 'gatsby';

const useInstagram = () => {
  const data = useStaticQuery(graphql`
    query {
  allInstaNode(sort: {order: ASC, fields: localFile___birthtime}) {
    edges {
      node {
        id
        caption
        username
        likes
        comments
        mediaType
        preview
        original
        timestamp
        caption
        localFile {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        thumbnails {
          src
          config_width
          config_height
        }
        dimensions {
          height
          width
        }
      }
    }
  }
}
  `);
  return data.allInstaNode.edges.map(node => ({
    ...node.node.localFile.childImageSharp,
    id: node.node.id,
    caption: node.caption,
    username: node.node.username,
    thumbnail_640: node.node.thumbnails,
    original: node.node.original
  }));
};

export default useInstagram;
