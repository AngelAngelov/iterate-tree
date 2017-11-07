const assert = require('assert'),
    iterator = require('../lib/iterate-tree'),
    tree = require('./family-tree');

describe('same count', function () {
    it('number', function () {
        const realPeopleCount = 9;
        var countedPeople = 0;

        iterator.iterateTree(tree, 'descendants', (person) => {
            if (person) {
                countedPeople++;
            }
        })

        assert.equal(countedPeople, realPeopleCount);
    })
})

describe('oldest person', function () {
    it('number', function () {
        const oldestPersonAge = 83;
        var foundAge = 0;

        iterator.iterateTree(tree, 'descendants', (person) => {
            if (person.age > foundAge) {
                foundAge = person.age;
            }
        })

        assert.equal(oldestPersonAge, foundAge);
    })
})

describe('youngest person', function () {
    it('number', function () {
        const youngestPersonAge = 2;
        var foundAge = 1000;

        iterator.iterateTree(tree, 'descendants', (person) => {
            if (person.age < foundAge) {
                foundAge = person.age;
            }
        })

        assert.equal(youngestPersonAge, foundAge);
    })
})

describe('find person', function () {
    it('number', function () {
        const searchedPerson = 'Tom',
              maxIterations = 6;
        var foundPerson,
            numberOfIterations = 0;

        iterator.iterateTree(tree, 'descendants', (person) => {
            numberOfIterations++; 

            if (person.name == searchedPerson) {
                foundPerson = person;
                return false;
            }
        })

        assert.equal(searchedPerson, foundPerson.name);
        assert.equal(numberOfIterations, maxIterations);
    })
})