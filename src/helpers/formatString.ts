export const deleteTags = (str:string):string => {
    const tagRegex = /<[^>]*>/gi;
    return str.replace(tagRegex,'');
}