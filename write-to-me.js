const { Writable } = require("stream");

class MyWritable extends Writable {
    _write(chunk, encoding, callback) {
        console.log("writing: " + chunk.toString());
        callback();
    }
}

const writable = new MyWritable();

process.stdin.pipe(writable);
