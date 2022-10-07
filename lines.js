const split2 = require("split2");

let lineNumber = 0;

process.stdin
    .pipe(split2())
    .pipe(
        through(function (line, _, next) {
            if (lineNumber % 2 !== 0) {
                this.push(line.toString().toUpperCase() + "\n");
            } else {
                this.push(line.toString().toLowerCase() + "\n");
            }
            lineNumber++;
            next();
        })
    )
    .pipe(process.stdout);
