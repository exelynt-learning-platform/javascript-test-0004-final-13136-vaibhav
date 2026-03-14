let n = 4;

for (let i = 1; i <= 7; i++) {
    let row = "";

    for (let j = 1; j <= 7; j++) {
        let top = i - 1;
        let left = j - 1;
        let bottom = 7 - i;
        let right = 7 - j;

        let min = Math.min(top, left, bottom, right);

        row += (n - min) + " ";
    }

    console.log(row.trim());
}
