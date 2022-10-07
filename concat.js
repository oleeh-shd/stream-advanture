const concat = require("concat-stream");

process.stdin.pipe(
    concat((buf) => {
        const st = buf.toString().split("").reverse().join("");
        console.log(st);
    })
);
