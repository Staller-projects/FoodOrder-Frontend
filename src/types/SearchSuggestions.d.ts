export interface RestaurantInfo {
    resId?: number;
    name?: string;
    image?: {
        url?: string;
    };
    o2FeaturedImage?: {
        url?: string;
    };
    rating?: {
        text?: string;
        color?: string;
    };
    ratingNew?: {
        newlyOpenedObj?: any; // You might want to define a type for this
        suspiciousReviewObj?: any; // You might want to define a type for this
        ratings?: {
            DINING?: {
                rating_type?: string;
                rating?: string;
                reviewCount?: string;
                reviewTextSmall?: string;
                subtext?: string;
                color?: string;
                ratingV2?: string;
                subtitle?: string;
                sideSubTitle?: string;
                bgColorV2?: {
                    type?: string;
                    tint?: string;
                };
                newOnDining?: boolean;
            };
            DELIVERY?: {
                rating_type?: string;
                rating?: string;
                reviewCount?: string;
                reviewTextSmall?: string;
                subtext?: string;
                color?: string;
                ratingV2?: string;
                subtitle?: string;
                sideSubTitle?: string;
                bgColorV2?: {
                    type?: string;
                    tint?: string;
                };
                newOnDelivery?: boolean;
            };
        };
    };
    cft?: {
        text?: string;
    };
    cfo?: {
        text?: string;
    };
    locality?: {
        name?: string;
        address?: string;
        localityUrl?: string;
    };
    timing?: {
        showTiming?: boolean;
        text?: string;
    };
    cuisine?: {
        deeplink?: string;
        url?: string;
        name?: string;
    }[];
    should_ban_ugc?: boolean;
    isDisabled?: boolean;
}

export interface RestaurantOrder {
    deliveryTime?: string;
    isServiceable?: boolean;
    hasOnlineOrdering?: boolean;
    promoOffers?: string;
    actionInfo?: {
        text?: string;
        clickUrl?: string;
    };
    isDeliveringNow?: boolean;
}

export interface RestaurantTable {
    isBookingActive?: boolean;
    isBookingAvailable?: boolean;
    actionInfo?: {
        text?: string;
        clickUrl?: string;
    };
}

export default interface SearchSuggestions {
    entityType?: string;
    entityId?: string;
    name?: string;
    info?: RestaurantInfo;
    order?: RestaurantOrder;
    table?: RestaurantTable;
    actionInfo?: {
        text?: string;
        clickUrl?: string;
    };
    isPromoted?: boolean;
    distance?: string;
    showRatingAsNew?: number;
}

//   export default interface RestaurantResponse {
//     results?: Restaurant[];
//   }

/**
 *
 * Dish response data types
 *
 */

export interface DishObject {
    entityType: string;
    entityId: string;
    name: string;
    info: Info;
    displayType: string;
    actionInfo: ActionInfo;
}

export interface Info {
    name: string;
    image: Image;
}

export interface Image {
    url: string;
}

export interface ActionInfo {
    text: string;
    clickUrl: string;
}
