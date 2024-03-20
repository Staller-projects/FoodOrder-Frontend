import React, { useEffect, useState } from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchResultCard from "./SearchResultCard";
import { getSearchSuggestionsApi } from "../../../api/GetRequests";
import type SearchSuggestions from "../../../types/SearchSuggestions";
import { useDebounce } from "../hooks";

const Search = () => {
    /**
     * TODO: Impliment: Debouncing and Throtelling
     */
    const [searchQuery, setSearchQuery] = useState("");
    // const [debounceSearchQuery, setDebounceSearchQuery] = useState(searchQuery);
    const debounceSearchQuery = useDebounce(searchQuery);
    const [searchSuggestions, setSearchSuggestions] = useState([]);

    useEffect(() => {
        debounceSearchQuery
            ? getSearchSuggestions(debounceSearchQuery)
            : setSearchSuggestions([]); // if the search input is not empty, null, undedfinedo rnull then only the api is called.
    }, [debounceSearchQuery]);

    console.log(searchSuggestions);

    const getSearchSuggestions = async (debounceSearchQuery: string) => {
        try {
            const searchSuggestionsResponse = await getSearchSuggestionsApi(
                debounceSearchQuery
            );
            setSearchSuggestions((searchSuggestionsResponse as any)?.results);
        } catch (error) {
            console.log("Error n file searchContainer: ", error);
        }
    };

    return (
        <div className="flex justify-center me-2">
            <div className="mx-2">
                <Button
                    buttonType="PRIMARY"
                    className=" w-fit h-fit py-2 hidden bg-primary-light md:flex sm:block"
                >
                    <LocationOnIcon className="my-auto" sx={{ fontSize: 19 }} />
                    <span className="my-auto">Pune</span>
                </Button>
            </div>
            <div className="md:w-3/6 sm:w-4/6">
                <div className="relative">
                    <Input
                        type="text"
                        className="py-1.5 ps-10 bg-"
                        placeholder="Search Resturents, Dishes, etc."
                        onChange={(userInput) => setSearchQuery(userInput)}
                    />

                    <SearchIcon className="absolute top-2 left-2 text-primary" />
                </div>

                {/* Search Result container */}
                <div className="my-1 md:max-h-[450px] sm:max-h-[450px] overflow-y-auto shadow-2xl space-y-2 drop-shadow-2xl  bg- backdrop-blur-lg rounded-lg">
                    {/* Loop the search result into cards */}
                    {searchSuggestions?.map(
                        (
                            singleResturentData: SearchSuggestions,
                            index: number
                        ) => (
                            <SearchResultCard
                                key={index}
                                resturentObject={singleResturentData}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
