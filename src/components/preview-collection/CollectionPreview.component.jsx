import React from 'react';
import './collection-preview.scss'
import {CollectionItem} from '../collection-item/collection-item.component.jsx'
export const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                    .filter((item, i) => (i < 4))
                    .map(({item,...otherItemProps}) => (
                        <CollectionItem key={item}{...otherItemProps}/>
                    ))
            }
        </div>
    </div>
)