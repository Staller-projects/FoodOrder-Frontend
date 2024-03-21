import React, { useEffect, useState } from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchResultCard from "./SearchResultCard";
import SearchCardSeletonLoading from "./SearchCardSeletonLoading";
import { getSearchSuggestionsApi } from "../../../api/GetRequests";
import type SearchSuggestions from "../../../types/SearchSuggestions";
import { useDebounce } from "../hooks";

const Search = () => {
    /**
     * declering the initial states for search container
     */
    const [searchQuery, setSearchQuery] = useState("");
    const [searchLoading, setSearchLoading] = useState(false);
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const debounceSearchQuery = useDebounce(searchQuery);

    /**
     * When the search input changes this useEffect will run
     */
    useEffect(() => {
        debounceSearchQuery
            ? getSearchSuggestions(debounceSearchQuery)
            : setSearchSuggestions([]);
    }, [debounceSearchQuery]);

    // console.log(searchSuggestions.length);

    /**
     *
     * @param debounceSearchQuery
     */
    const getSearchSuggestions = async (debounceSearchQuery: string) => {
        try {
            const searchSuggestionsResponse = await getSearchSuggestionsApi(
                debounceSearchQuery
            );
            setSearchSuggestions((searchSuggestionsResponse as any)?.results);
        } catch (error) {
            console.log("Error n file searchContainer: ", error);
        } finally {
            setSearchLoading(false);
        }
    };

    return (
        <div className="flex justify-center me-2">
            {/* Current location button */}
            <div className="mx-2">
                <Button
                    buttonType="PRIMARY"
                    className=" w-fit h-fit py-2 hidden bg-primary-light md:flex sm:block"
                >
                    <LocationOnIcon className="my-auto" sx={{ fontSize: 19 }} />
                    <span className="my-auto">Pune</span>
                </Button>
            </div>
            <div className="md:w-2/6 sm:w-4/6">
                {/* Search input container */}
                <div className="relative">
                    <Input
                        type="text"
                        value={searchQuery}
                        className="py-1.5 ps-10"
                        placeholder="Search Resturents, Dishes, etc."
                        onChange={(userInput) => {
                            setSearchQuery(userInput);
                            setSearchLoading(true);
                        }}
                    />

                    <SearchIcon className="absolute top-2 left-2 text-primary" />
                    {searchQuery && (
                        <div
                            className="my-auto cursor-pointer"
                            onClick={() => setSearchQuery("")}
                        >
                            <CloseIcon
                                className="absolute my-auto top-[10px] right-2 text-gray-600 "
                                sx={{ fontSize: 16 }}
                            />
                        </div>
                    )}
                </div>

                {/* Search Result container */}
                <div className="my-1 md:max-h-[360px] sm:max-h-[400px] overflow-y-auto shadow-2xl space-y-2 drop-shadow-2xl  bg- backdrop-blur-lg rounded-lg">
                    {/* showing loading till search api response comes */}
                    {searchLoading && searchQuery.length > 0 && (
                        <>
                            {new Array(5).fill(1).map((num, index) => (
                                <SearchCardSeletonLoading />
                            ))}
                        </>
                    )}

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
