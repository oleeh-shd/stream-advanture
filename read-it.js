const { Readable } = require("stream");

class myReadable extends Readable {
    _read(size) {
        const buffer = Buffer.from(process.argv[2], "utf8");
        this.push(buf);
        if (buffer.length === process.argv[2].length) {
            this.push(null);
        }
    }
}

const stream = new myReadable();

stream.pipe(process.stdout);
