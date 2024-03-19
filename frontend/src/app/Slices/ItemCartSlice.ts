import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../../types/ResturentMenu";

interface SelectedItemDataType {
    itemId?: string;
    itemCount?: number;
    item?: Item;
}

interface SelectedItemListType {
    [key: string]: SelectedItemDataType[];
}

interface FinalTypes {
    data: SelectedItemListType;
}

const initialStateofSelectedItems: FinalTypes = {
    data: {},
};

export const SelectedItemCartSlice = createSlice({
    name: "SelectedItems",
    initialState: initialStateofSelectedItems,
    reducers: {
        addSelectedItemsToCart: (state, action) => {
            /**
             * below 3 variables are coming from passing parameter from "FoodITemCard.tsx" file
             */
            const resturandId = action.payload.resturandId as number;
            const typeOfOperation = action.payload.typeOfOperation;
            const item = action.payload.item;

            if (state.data.hasOwnProperty(resturandId)) {
                // checking the array of current ResturantId is present or not
                const selectedItemArray: SelectedItemDataType[] =
                    state.data[resturandId]; // if the current resturant array is present then select it

                const selectedItem = selectedItemArray.find(
                    (singleItem) => singleItem.itemId === item?.id
                ); // now checking that whatever item is selected currently is already presented or not

                let itemCount: number;
                if (selectedItem && selectedItem.itemCount !== undefined) {
                    // this if block is just for Typescript. [to preventing from detecting itemCount is "undefined"]
                    itemCount = selectedItem.itemCount;
                } else {
                    itemCount = 0;
                }

                if (selectedItem) {
                    let tempStore: number | {}; // this is temperory use for whatever is coming from the below statement

                    tempStore =
                        typeOfOperation === "add" // checking type of operation wether it is item to be "add" or "remove"
                            ? itemCount + 1
                            : itemCount === 1
                            ? (state.data = {
                                  ...state.data,
                                  [resturandId]: state.data[resturandId].filter(
                                      (currItem) =>
                                          currItem.itemId !==
                                          selectedItem.itemId
                                  ),
                              })
                            : itemCount - 1;

                    typeof tempStore == "number"
                        ? (selectedItem.itemCount = tempStore)
                        : (state.data = tempStore);
                } else {
                    state.data = {
                        ...state.data,
                        [resturandId]: [
                            ...state.data[resturandId],
                            {
                                itemId: item?.id,
                                item: item,
                                itemCount: 1,
                            },
                        ],
                    };
                }
            } else {
                state.data = {
                    ...state.data,
                    [resturandId]: [
                        {
                            itemId: item?.id,
                            item: item,
                            itemCount: 1,
                        },
                    ],
                };
            }
        },
    },
});

export const { addSelectedItemsToCart } = SelectedItemCartSlice.actions;
export default SelectedItemCartSlice.reducer;
