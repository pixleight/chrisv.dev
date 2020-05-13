import CMS from 'netlify-cms'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import { v4 as uuid } from 'uuid'

// function Page({ data }) {
//   const orderingList = data.order.childMarkdownRemark.frontmatter.collection
//   const collections = data.collections.edges
//   return (
//     <div>
//       {order.map(item => {
//         const orderingName = item.collectionName
//         return collections.map(collection => {
//           if (
//             collection.node.childMarkdownRemark.frontmatter.title ===
//             orderingName
//           ) {
//             return (
//               <h2 key={collection.node.id}>
//                 {collection.node.childMarkdownRemark.frontmatter.title}
//               </h2>
//             )
//           } else {
//             return null
//           }
//         })
//       })}
//     </div>
//   )
// }

/**
 * Create the control widget, this will add a form element to the CMS UI
 */
const IdControl = createClass({
  getInitialState: function() { return {} },
  componentDidMount: function() {
    // If this widget doesn't have an ID yet, we create one
    if (!this.props.value) {
      this.props.onChange( uuid() );
    }
  },
  handleChange() {
    this.props.onChange( uuid() );
  },
  render: function() {
    return h('p', null, `${this.props.value}`);
  }
});

/**
 * Create the preview widget, this will display the widget's value in the preview pane
 */
const IdPreview = createClass({
  getInitialState: function() { console.log(this.props); return {}; },
  render: function () {
    return h('p', null, `ID: ${this.props.value}`);
  }
});

/**
 * Register the widget. This lets NetlifyCMS know about our custom widget
 */
CMS.registerWidget('id', IdControl, IdPreview);

CMS.registerMediaLibrary(cloudinary);
