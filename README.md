This program prints a square pattern of numbers that decrease toward the center.

n = 4 defines the highest number in the pattern.
The grid size becomes 2 * n - 1, which is 7.

The outer loop controls the rows and the inner loop controls the columns.

For each position (i, j), the program finds the minimum distance from the four sides:

top

left

bottom

right

Math.min() is used to get the smallest distance.
That value is subtracted from n to decide which number to print.

This creates layers of numbers forming a concentric square pattern.
