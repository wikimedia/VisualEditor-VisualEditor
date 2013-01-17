/*!
 * VisualEditor ContentEditable ImageNode class.
 *
 * @copyright 2011-2012 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/**
 * ContentEditable image node.
 *
 * @class
 * @extends ve.ce.LeafNode
 * @constructor
 * @param {ve.dm.ImageNode} model Model to observe.
 */
ve.ce.ImageNode = function VeCeImageNode( model ) {
	// Parent constructor
	ve.ce.LeafNode.call( this, 'image', model, $( '<img>' ) );

	// DOM Changes
	this.$.addClass( 've-ce-imageNode' );
};

/* Inheritance */

ve.inheritClass( ve.ce.ImageNode, ve.ce.LeafNode );

/* Static Properties */

/**
 * Node rules.
 *
 * @see ve.ce.NodeFactory
 * @static
 * @property
 */
ve.ce.ImageNode.rules = {
	'canBeSplit': false
};

/* Registration */

ve.ce.nodeFactory.register( 'image', ve.ce.ImageNode );
