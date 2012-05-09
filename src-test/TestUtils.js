var TestUtils = function() {
};

TestUtils.prototype.constructor = TestUtils;

/**
 * Finds first child div.
 *
 * @param element to be searched.
 * @returns first found inner div or undefined if no div is found.
 */
TestUtils.prototype.findFirstDiv = function(element) {
	var result, child;

	for( i = 0; i < element.childNodes.length; i++) {
		child = element.childNodes[i];
		if(child.nodeType == 1 && child.tagName == 'DIV')
			result = child;
	}

	return result;
}; 