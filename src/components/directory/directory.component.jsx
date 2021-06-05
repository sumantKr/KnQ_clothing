import React from 'react'
import { connect } from 'react-redux'
import { selectDirectory } from '../../redux/directory/directory.selector'
import './directory.scss';
import MenuItems from '../Menu-items/Menu-items.component.jsx';
import { createStructuredSelector } from 'reselect';
const Directory = ({ getDirectory }) => (
  <section className="directory-menu">
    {
      getDirectory.map(({ id, ...otherSectionProps }) => {
        return <MenuItems key={id} {...otherSectionProps} />
      })
    }
   
  </section>
)

const mapStateToProps = (state) => createStructuredSelector({
  getDirectory: selectDirectory
})

export default connect(mapStateToProps)(Directory)