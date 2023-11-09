# Homework 8: More Rust Practice

This homework will provide you the knowledge needed to become proficient in Rust.
## Setup

1. Create a new folder ```hw8-sols```
2. Open terminal, and
    ```bash
    cd hw8-sols
    ```


You are all ready to go!

## Writing Automated Tests in Rust

Let's create a new library project named adder:
```
$ cargo new adder --lib
     Created library `adder` project
$ cd adder
```

Now, look at the contents in ```src/lib.rs```.

You will notice that a new function called adder has been implemented as well as a test module with a test function in it is automatically generated for us. This module gives you a template for writing your tests so you don’t have to look up the exact structure and syntax every time you start a new project! 

Any time we make a new library project with Cargo, these test structure modules are given to us. Convenient!

*Important*: Note the #[test] annotation: this attribute indicates this is a test function, so the test runner knows to treat this function as a test.

Now, run
```
cargo test
```


Easy peasy! 

### Now, create another test function that asserts that 3 + 5 does not equal 9.
*Hint: read the rust documentation for testing!*


This is all fine and dandy, but what if we want to have informative error messages?

Let's create a bugged ```sub``` function, which computes the subtraction of two ints, and write a test for this function with an informative error message:

In your ```src/lib.rs```, add:

```rust
pub fn sub(left: usize, right: usize) -> usize {
    left - right + 1
}
```

### Now, write a test function that computes 5 - 4 and throws an error message that outputs the result of calling sub(5, 4)

*Hint: how can we use the ```assert!``` macro?*



## Accepting Command Line Arguments in Rust

What if we wanted to use our ```add``` function from the command line? This would be useful, as we could simply type in two numbers from the command line instead of having to create a testing function.

We’ll need to create a ```main.rs``` file in our ```src``` library in order to run commands from the command line.

### In your ```src``` directory, add a new file ```main.rs```

In this file, add the following contents:
```rust
use std::env;
use std::process;


use adder;

fn main() {
    // Skip the first argument, which is the path to the program.
    let args: Vec<String> = env::args().skip(1).collect();
    
    if args.len() < 2 {
        eprintln!("This program requires two numeric arguments.");
        process::exit(1);
    }

    // Parse the arguments to usize, handling invalid input.
    let arg1: usize = match args[0].parse() {
        Ok(num) => num,
        Err(_) => {
            eprintln!("Error: Argument 1 is not a valid number");
            process::exit(1);
        }
    };

    let arg2: usize = match args[1].parse() {
        Ok(num) => num,
        Err(_) => {
            eprintln!("Error: Argument 2 is not a valid number");
            process::exit(1);
        }
    };

    // Now that we've successfully parsed the arguments, we can use them.
    let result = adder::add(arg1, arg2);

    println!("The result of adding {} and {} is {}", arg1, arg2, result);
}

```

Now, in command line, run:

```
cargo run -- 1 2
```

Verify that your terminal outputs "The result of adding 1 and 2 is 3"







Now that we have some intuition behind testing and command-line arguments, let's create a program that can search of a file for a specified string.

# minigrep

## Overview

`minigrep` is a simplified version of the `grep` search tool that allows for command-line argument functionality for searching within files. This tool is intended for educational purposes to help Rust learners understand how to process command line arguments.

## Getting Started


In terminal, relocate to your original ```hw8-sols``` fiolder. Create a new project using Cargo:

```sh
cargo new minigrep
cd minigrep
```

## Usage

The `minigrep` program is designed to accept two command-line arguments:

1. A query string to search for.
2. A file path to search within.

To run the program, use the following syntax:

```sh
cargo run -- [SEARCH_STRING] [FILE_PATH]
```

For example:

```sh
cargo run -- "search string" example.txt
```

Notice that right now, the only output is "Hello word!". We will implement this program to output useful information.

## Command-Line Argument Processing

The program utilizes the `std::env::args` function from the Rust standard library to read arguments. These are then collected into a vector for further processing. Here's a sample of the main function setup:

```rust
use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();

    // Assuming the first argument is the query and the second is the file path
    let query = &args[1];
    let file_path = &args[2];

    // Outputs to verify the received command line arguments
    println!("Searching for {}", query);
    println!("In file {}", file_path);
}
```


Copy this code into ```main.rs``` and re-run:

```sh
cargo run -- "search string" example.txt
```

Check the command line for some baseline information.

## Error Handling

Please note that the current implementation does not handle errors such as:

- Lack of command-line arguments.
- Invalid Unicode in arguments.

For now, these issues are being set aside to focus on core functionality, which will be expanded upon later in the project.

## Adding File Reading Functionality

`minigrep` is now being enhanced to read and output the contents of a file specified by the user. A test file with the contents of an Emily Dickinson poem can be used for testing this functionality. 
Create a file named ```poem.txt``` in ```src``` with the following contents in the root directory of the project:

```text
I'm nobody! Who are you?
Are you nobody, too?
Then there's a pair of us - don't tell!
They'd banish us, you know.

How dreary to be somebody!
How public, like a frog
To tell your name the livelong day
To an admiring bog!
```

## Implementation

To enable file reading, the Rust standard library's `std::fs` module is used. The code snippet below demonstrates how to read the contents of the file:

```rust
use std::env;
use std::fs;

fn main() {
    // --snip--
    println!("In file {}", file_path);

    let contents = fs::read_to_string(file_path)
        .expect("Should have been able to read the file");

    println!("With text:\n{contents}");
}
```

### Using this example as inspiration, update your main file to print the contents of the file.


## Running the Program

To run the program and read the contents of `poem.txt`, use the command:

```sh
cargo run -- [SEARCH_STRING] poem.txt
```

Replace `[SEARCH_STRING]` with any string (as search functionality is not yet implemented). The output will display the contents of `poem.txt`.

## Next Steps

We now have a program that reads and outputs a file. However, we want to search this file for contents

### Given the following test and skeleton code, write a ```search``` function that returns the line that contains the string "duct" and passes the test:

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn one_result() {
        let query = "duct";
        let contents = "\
Rust:
safe, fast, productive.
Pick three.";

        assert_eq!(vec!["safe, fast, productive."], search(query, contents));
    }
}

pub fn search<'a>(query: &str, contents: &'a str) -> Vec<&'a str> {
    // YOUR CODE HERE
}
```


### Now, update your ```main``` function to print out all lines containing the provided target string!


# Submission

Submit your ```adder/src``` and ```minigrep/src``` directories to Gradescope!





