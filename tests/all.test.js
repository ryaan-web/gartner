const fs = require('fs');
const clickTransformer = require('../index.js');

test('object assignment', () => {
    let rawClicks1 = fs.readFileSync('./tests/data/clicks/clicks1.json');
    let rawExpected1 = fs.readFileSync('./tests/data/expected/expected1.json');
    let clicks1 = rawClicks1 && JSON.parse(rawClicks1);
    let expected1 = rawExpected1 && JSON.parse(rawExpected1);

    let output = clickTransformer(clicks1);
    expect(output).toEqual(expected1);
});

test('object assignment', () => {
    let rawClicks2 = fs.readFileSync('./tests/data/clicks/clicks2.json');
    let rawExpected2 = fs.readFileSync('./tests/data/expected/expected2.json');
    let clicks2 = rawClicks2 && JSON.parse(rawClicks2);
    let expected2 = rawExpected2 && JSON.parse(rawExpected2);

    let output = clickTransformer(clicks2);
    expect(output).toEqual(expected2);
});

test('object assignment', () => {
    let rawClicks3 = fs.readFileSync('./tests/data/clicks/clicks3.json');
    let rawExpected3 = fs.readFileSync('./tests/data/expected/expected3.json');
    let clicks3 = rawClicks3 && JSON.parse(rawClicks3);
    let expected3 = rawExpected3 && JSON.parse(rawExpected3);

    let output = clickTransformer(clicks3);
    expect(output).toEqual(expected3);
});

test('object assignment', () => {
    let rawClicks4 = fs.readFileSync('./tests/data/clicks/clicks4.json');
    let rawExpected4 = fs.readFileSync('./tests/data/expected/expected4.json');
    let clicks4 = rawClicks4 && JSON.parse(rawClicks4);
    let expected4 = rawExpected4 && JSON.parse(rawExpected4);

    let output = clickTransformer(clicks4);
    expect(output).toEqual(expected4);
});

test('object assignment', () => {
    let rawClicks5 = fs.readFileSync('./tests/data/clicks/clicks5.json');
    let rawExpected5 = fs.readFileSync('./tests/data/expected/expected5.json');
    let clicks5 = rawClicks5 && JSON.parse(rawClicks5);
    let expected5 = rawExpected5 && JSON.parse(rawExpected5);

    let output = clickTransformer(clicks5);
    expect(output).toEqual(expected5);
});