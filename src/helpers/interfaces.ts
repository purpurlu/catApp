/**
 * @interface Cat 
 * @description Cat interface
 * @param {string} url - Cat image URL
 * @param {number} width - Cat image width
 * @param {number} height - Cat image height
 * @param {any[]} breeds - Cat breeds
 */
export interface Cat {
    url: string,
    width: number,
    height: number,
    breeds: any[]
}

export interface CatProps {
    cat: Cat
}
