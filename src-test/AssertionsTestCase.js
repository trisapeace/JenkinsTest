/* List of possible Assertions: http://code.google.com/p/js-test-driver/wiki/Assertions */

functionUnderTest = function(number, callback) {
	for (var i = 0; i < number; i++) {
		callback(i);
	}
};

AssertionsTestCase = TestCase("AssertionsTestCase");

AssertionsTestCase.prototype.testAlwaysPass = function() {
	var expected = 1;
	var actual = 1;
	assertEquals("The values should be the same", expected, actual);
	assertEquals(expected, actual);
	
	var myStr = "hello";
	assertString("The variable should contain a string", myStr);
	assertString(myStr);
};

AssertionsTestCase.prototype.testAlwaysFail = function() {
	assertEquals(1, 2);
};

AssertionsTestCase.prototype.testAlwaysFailWithMessage = function() {
	assertEquals("1 <> 2", 1, 2);
}

AssertionsTestCase.prototype.testExpectedCalls = function() {
	var parameterCheck = function(number) {
		assertNumber(number);
	};
	
	expectAsserts(3);
	functionUnderTest(3, parameterCheck);
};