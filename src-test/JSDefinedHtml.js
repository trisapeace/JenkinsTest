JSDefinedHtml = TestCase("JSDefinedHtml");

JSDefinedHtml.prototype.setUp = function() {
	// Create a new div and store it in the objects variable
	this.mainDiv = document.createElement('div');
	this.mainDiv.id = 'main';
	
	// Create inner div
	var innerDiv = document.createElement('div');
	this.mainDiv.appendChild(innerDiv);
	innerDiv.className = 'text';
	innerDiv.innerHtml = "Hello word.";
	
	// Add the whole thing to the document body
	document.body.appendChild(this.mainDiv);
};

JSDefinedHtml.prototype.testHtml = function() {
	var mainDiv = document.getElementById('main');
	var child = mainDiv.childNodes[0];
	
	// Stored object is the same as the one found in the document
	assertEquals(this.mainDiv, mainDiv);
	assertEquals("text", child.className);
	assertEquals("Hello word.", child.innerHtml);
};

JSDefinedHtml.prototype.tearDown = function() {
	// Clean up document
	var mainDiv = document.getElementById('main');
	document.body.removeChild(mainDiv);
};