
export const relativePath = (command: string): string => {
    return require('path').resolve(__dirname, command);
};

export const example = (): null => {
    return null;
};
