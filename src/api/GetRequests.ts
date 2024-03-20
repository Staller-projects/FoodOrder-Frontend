import AxiosRequest from "./API";

export interface ResturnatParams {
    resturantCity: string;
    resturantName: string;
}

// const API_ENDPOINTS = {};

/**
 * EXTERNAL APIs CALLS [START]
 */

export const getSearchSuggestionsApi = async (
    searchQuery: string
): Promise<Object> => {
    try {
        const baseUrl = `zmt-apis/suggestions/?q=`;
        const customUrl = `${searchQuery}`;
        const searchSuggestionsResponse = await AxiosRequest({
            method: "GET",
            url: `${baseUrl}${customUrl}`,
        });

        return searchSuggestionsResponse;
    } catch (error) {
        return { error: error };
    }
};

export const getResturantDetailsApi = async ({
    resturantCity,
    resturantName,
}: ResturnatParams) => {
    try {
        const baseUrl = `zmt-apis/resturantpage/?resturantname=`;
        const customUrl = `${baseUrl}/${resturantCity}/${resturantName}`;

        const resturantDetailsApiResponse = await AxiosRequest({
            method: "GET",
            url: customUrl,
        });

        // console.log(resturantDetailsApiResponse);

        return resturantDetailsApiResponse;
    } catch (error) {
        return { error: error };
    }
};

/**
 * EXTERNAL APIs CALLS [END]
 */

// *****************************************************************************************************************************************

/**
 *
 * INTERNAL APIs CALLS [START]
 *
 */

/**
 *
 * INTERNAL APIs CALLS [END]
 *
 */
