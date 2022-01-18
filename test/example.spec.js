const { expect } = require('chai');
const { createStubInstance } = require('sinon');

describe('example', () => {
    describe('test', () => {
        function setup() {
            const stub = createStubInstance(String);

            const subject = {};

            return {
                subject,
                stub,
            };
        }

        it('should work when ever', () => {
            // Arrange
            const test = setup();

            // Act
            test.stub.toString();

            // Assert
            expect(test.stub.toString.calledOnce).is.true;
        });
    });
});
