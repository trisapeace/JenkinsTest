AsynchronousTest = AsyncTestCase("AsynchronousTest");

AsynchronousTest.prototype.testSteps = function(queue) {
	// Define common variables here
	var something = 'hello';
	
	queue.call('Step 1: initialization', function(callbacks) {
		// First step code goes here.
	});
	
	queue.call('Step 2: do something', function(callbacks) {
		// Second step code goes here.
	});
	
	// ...
	
	queue.call('Step n: final checks', function(callbacks) {
		// Last step code goes here.
	});
};

AsynchronousTest.prototype.testCallback = function(queue) {
	// Define common variables here
	var callback = function() {};
	
	queue.call('Step 1: run for 1 second', function(callbacks) {
		// Register callback function
		var callbackWrapper = callbacks.add(callback);
		
		// Set one second timer on the wrapper
		window.setTimeout(callbackWrapper, 1000);
	});
	
	queue.call('Step 2: whatever', function(callbacks) {
		// This will run 1 second after the first step
	});
};

AsynchronousTest.prototype.testAsynchronousFunction = function(queue) {
	// Create our callback function
	var callbackFinished = false;
	var callbackFunction = function() {
		callbackFinished = true;
	};
	
	// Set up asynchronous test
	queue.call('Step 1: set up asynchronous function', function(callbacks) {
		// js-test-driver wraps our callbacks and creates a 'real' callback
		var callbackWrapper = callbacks.add(callbackFunction);
		
		// Pass wrapper callback to the function under test
		var testee = new AsyncEvent();
		testee.asynchronousFunction(callbackWrapper);
	});
	
	queue.call('Step 2: assert callback function call', function() {
		assertTrue(callbackFinished);
	});
};
