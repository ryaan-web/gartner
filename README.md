# About

This is a nodeJS project targeted at solving a particular DS and Algorithms challenge.


# Setup

The project can be cloned from this repository or a zip file can be downloaded. Once clone/downloaded, move to the root directory of project and run **npm  install**
```
npm install
```
This will install all the required dependencies.

# Usage

Once dependencies are installed, run the following command in the root directory.
```
npm run solution
```
> **Note:** This will require a `clicks.json` file to be present in the root directory. This is used as input for the code and the data is obtained by reading this file.

# Testing

To run the tests, run the following command on the terminal from the root directory

```
npm run tests
```
This run several several tests by feeding different data sets to the code and equating the output with already expected values.
> **Note:** This requires other data sets to work. Currently their are some files named as `clicks[num].json` in the project under `tests/data/clicks` . Also, the expected values are stored in files named as `expected[num].josn` under `tests/data/expected` .

# Approach

The problem requires to filter an array of clicks ( a composite of an IP address, a timestamp, and a click amount.  ) based on certain criteria.

This project makes use of hashes to filter the data and transform it in a single loop and again iterates through the keys in the hash to re-transform the filtered data back into an array of objects, thus, keeping the time complexity to O(n) (2Cn, where C denoted other operations while in the loop.


# Output

Once the code is run using `npm run solution` , the final transformed array is logged on the console and also written to a separate file `result.json` in the root directory.