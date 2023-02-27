
class Logger {
    static makeLog(txt?: string): string {
        return `[${new Date().toString().split(" GMT")[0]}] ${txt || 'No log provided'}`;
    }

    static log(txt?: string): void {
        console.log(Logger.makeLog(txt) || 'No log provided');
    }

    static success(txt?: string): void {
        console.log(Logger.colour("green", Logger.makeLog(txt) || 'No log provided'));
    }

    static successb(txt?: string): void {
        console.log(Logger.colour("greenb", Logger.makeLog(txt) || 'No log provided'));
    }

    static info(txt?: string): void {
        console.log(Logger.colour("yellow", Logger.makeLog(txt) || 'No log provided'));
    }

    static infob(txt?: string): void {
        console.log(Logger.colour("yellowb", Logger.makeLog(txt) || 'No log provided'));
    }

    static colour(c: string, str: string): string {
        const colours: { [key: string]: string } = {
            "red": "\x1B[31m",
            "yellow": "\x1B[33m",
            "yellowb": "\x1B[1;33m",
            "greenb": "\x1B[1;32m",
            "green": "\x1B[32m",
            "black": "\x1B[39m",
            "close": "\x1B[0m"
        };
        return (colours[c]) + str + colours.close;
    }
}

export default Logger;
