export const load = status => ({
    type: 'load',
    status,
});


export const searchBook = text => ({
    type: 'searchBook',
    text,
});
