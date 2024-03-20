interface Dish {
    name: string;
    description: string;
    inStock: boolean;
    isVeg: boolean;
    price: number;
}

interface MenuCategory {
    title: string;
    dishes: Dish[];
}

interface RestaurantData {
    About: {
        Name: string;
        Ratings: string;
        Locality: string;
        AreaName: string;
        City: string;
        Cuisines: string[];
    };
    Menu: MenuCategory[];
    URL: string;
}

interface InitialState {
    data: RestaurantData | null;
    loading: boolean;
    error: string | null;
}

const initialState: InitialState = {
    data: null,
    loading: false,
    error: null,
};

export default initialState;
