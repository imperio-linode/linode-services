import fs from "fs";

export const relativePath = (command: string): string => {
    return require('path').resolve(__dirname, command);
};

export const fileToString = path => {
    return fs.readFileSync(relativePath(path)).toString()
}
