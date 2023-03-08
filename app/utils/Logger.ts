import {colors} from "../object/Constants";


class Logger {
    static makeLog(txt?: string): string {
        return `[${new Date().toString().split(" GMT")[0]}] ${txt || 'No log provided'}`;
    }

    static log(txt?: string): void {
        console.log(Logger.makeLog(txt) || 'No log provided')
    }

    static success(txt?: string): void {
        console.log(Logger.colour("green", Logger.makeLog(txt) || 'No log provided'))
    }

    static successb(txt?: string): void {
        console.log(Logger.colour("greenb", Logger.makeLog(txt) || 'No log provided'))
    }

    static info(txt?: string): void {
        console.log(Logger.colour("yellow", Logger.makeLog(txt) || 'No log provided'))
    }

    static infob(txt?: string): void {
        console.log(Logger.colour("yellowb", Logger.makeLog(txt) || 'No log provided'))
    }

    static colour(c: string, str: string): string {
        return (colors[c]) + str + colors.close;
    }
}

export default Logger;
