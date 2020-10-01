// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//Exercise 1
//Unit tests for the sayHello function

describe('sayHello', function(){
   it('should be a defined function', function() {
       expect(typeof sayHello).toBe('function');
   });
   it('should return a string when called', function() {
       expect(typeof sayHello()).toBe("string");
   });
   it('should return "Hello, Jane!"', function() {
      expect(sayHello("Jane")).toBe("Hello, Jane!");
   });
   it('should return "Hello, Alex!"', function() {
      expect(sayHello("Alex")).toBe("Hello, Alex!");
   });
   it('should return "Hello, Pat!', function() {
      expect(sayHello("Pat")).toBe("Hello, Pat!");
   });
   it('should return "Hello, World!"', function() {
      expect(sayHello()).toBe("Hello, World!");
   });
   it('should return "Hello, World!" if input === true', function() {
      expect(sayHello(true)).toBe("Hello, World!");
   });
    it('should return "Hello, World!" if input === false', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function(){
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', function() {
       expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when passed 5', function() {
        expect(isFive(5)).toBe(true);
    });
});

describe('isEven', function(){
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean', function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when passed 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed "banana"', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when passed 8', function() {
        expect(isEven(8)).toBe(true);
    });
    it('should return false when passed Infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed a boolean', function() {
        expect(isEven(true || false)).toBe(false);
    });
    it('should return false if no argument is provided', function() {
        expect(isEven()).not.toBe(undefined);
    })
});