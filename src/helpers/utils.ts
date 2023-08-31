import { API_KEY, API_URL } from "./constants"
import { Cat } from "./interfaces"

/**
 * This function gets one cat from the cat API
 * @returns {Cat}
 */
export const getOneCat = async (): Promise<Cat> => {
    const response = await fetch(API_URL, {
        headers: {
            "Authorization": API_KEY
        }
    })

    if (response.status !== 200) {
        return {} as Cat
    } 

    const res = await response.json()

    const cat: Cat = {
        url: res[0].url,
        width: res[0].width,
        height: res[0].height,
        breeds: res[0].breeds

    }

    return cat

}

export const getCats = async (): Promise <Cat[]> => {
    const response = await fetch (`${API_URL}?limit=2`, {
        headers: {
            "Authorization": API_KEY
        }
    })

    if (response.status !== 200) {
        return [] as Cat[]
    }

    const cats: Cat[] = await response.json()
    return cats 
}
