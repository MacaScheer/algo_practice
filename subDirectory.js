#!/usr/bin/env node
'use strict';


/*
let str = "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"
represents:
dir
    subdir1
    subdir2
        file.ext

\n\t means new folder or file inside
\n\t\t means file inside previous directory

\n means new line, could be another directory in same level, or a file, if followed by \t
\t means folder or file inside previous

The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext


We are interested in finding the longest (number of characters)
absolute path to a file within our file system. For example,
in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext",
and its length is 32 (not including the double quotes).
Given a string representing the file system in the above format,
return the length of the longest absolute path to a file in the
abstracted file system. If there is no file in the system, return 0.

Note:

The name of a file contains at least a period and an extension.

The name of a directory or sub-directory will not contain a period.

Approach:
Brute Force Approach
Helper function builds the tree out of the string
Main function traverses tree to find longest branch
2nd Helper function builds string from longest branch
*/