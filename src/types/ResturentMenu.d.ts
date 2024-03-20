export interface ResturentMenu {
    //default
    pages?: Pages;
    blogData?: BlogData;
    pageUrlMappings?: PageUrlMappings;
    careers?: Careers;
    allJobs?: AllJobs;
    department?: Department;
    aboutus?: Aboutus;
    sneakpeek?: Sneakpeek;
    apiState?: ApiState;
    entities?: Entities;
    user?: User3;
    uiLogic?: UiLogic;
    location?: Location;
    gAds?: any[];
    footer?: Footer;
    langKeys?: LangKeys;
    deviceSpecificInfo?: DeviceSpecificInfo;
    pageBlockerInfo?: PageBlockerInfo;
    fullPageAds?: FullPageAds;
    networkState?: NetworkState;
    fetchConfigs?: FetchConfigs;
    hrefLangInfo?: HrefLangInfo[];
    pageConfig?: PageConfig;
    partnershipLoginModal?: PartnershipLoginModal;
    partnershipLoginOptionModal?: PartnershipLoginOptionModal;
    doesNotDeliverModal?: DoesNotDeliverModal;
    backButton?: BackButton;
}

export interface Pages {
    current?: Current;
    contact?: Contact;
    gift?: Gift;
    goodbye?: Goodbye;
    restaurant?: Restaurant;
    awards?: Awards;
    user?: User;
    userSettings?: UserSettings;
    sauceBlog?: SauceBlog;
    Kitchen?: Kitchen;
    celebrations?: Celebrations;
    cdng?: Cdng;
    postOrder?: PostOrder;
    zomaland?: Zomaland;
    orderOnline?: OrderOnline;
    deliverycities?: Deliverycities;
    zomatoForWork?: ZomatoForWork;
    pageNotFound?: PageNotFound;
    collections?: Collections;
    collectionDetails?: CollectionDetails;
    appDownload?: AppDownload;
    contests?: Contests;
    search?: Search;
    singleJob?: SingleJob;
    goldSubscriptionAgreement?: GoldSubscriptionAgreement;
    zoomBackgrounds?: ZoomBackgrounds;
    country?: Country;
    tablePostBooking?: TablePostBooking;
    city?: City;
    gold?: Gold;
    feedingPhilippines?: FeedingPhilippines;
    feedingIndonesia?: FeedingIndonesia;
    talentHub?: TalentHub;
    dining?: Dining2;
    scanner?: Scanner;
    cupcake?: Cupcake;
    partnershipInit?: PartnershipInit;
    paymentStatus?: PaymentStatus;
    planPage?: PlanPage;
    dotePdp?: DotePdp;
    doteHome?: DoteHome;
    familyPlanPage?: FamilyPlanPage;
    orderCartProgress?: OrderCartProgress;
    financialInformation?: FinancialInformation;
    investorRelations?: InvestorRelations;
    investorRelationsV2?: InvestorRelationsV2;
    goldMarketingPage?: GoldMarketingPage;
    agentSearch?: AgentSearch;
    agentRestaurant?: AgentRestaurant;
    diningPay?: DiningPay;
    bloggers?: Bloggers;
    neighbourhoods?: Neighbourhoods;
    resAdminToolkit?: ResAdminToolkit;
    individualPhotoPage?: IndividualPhotoPage;
    openGiftCard?: OpenGiftCard;
    proPage?: ProPage;
    zopayStoryUploader?: ZopayStoryUploader;
    orderShare?: OrderShare;
    giftCard?: GiftCard;
    zLiveHomePageReducer?: ZLiveHomePageReducer;
    zLiveCartReducer?: ZLiveCartReducer;
    irctcPartnership?: IrctcPartnership;
}

export interface Current {
    name?: string;
    pageTitle?: string;
    pageDescription?: string;
    resId?: Number;
    pageUrl?: string;
    title?: string;
    subType?: string;
    key?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogUrl?: string;
    ampHtmlUrl?: string;
    isFloodReliefRes?: boolean;
    isNoIndex?: boolean;
    checkoutUrl?: string;
    show_rating_v15?: boolean;
    isMobile?: number;
    isOAuthV2Enabled?: boolean;
    useAuthSdkForLogin?: boolean;
    useAuthSdkForLogout?: boolean;
    gaPageType?: string;
}

export interface Contact {
    contactPageBannerData?: any[];
    snippetData?: any[];
    formData?: FormData;
    buisinessEnquiriesData?: BuisinessEnquiriesData;
}

export interface FormData {}

export interface BuisinessEnquiriesData {}

export interface Gift {
    crystalData?: CrystalData;
}

export interface CrystalData {}

export interface Goodbye {}

export interface Restaurant {
    [key: string]: MainResturantOrderDetails;
}
// export interface Restaurant {
//   [key: string]?: N6505963
// }

export interface MainResturantOrderDetails {
    sections?: Sections;
    navbarSection?: NavbarSection[];
    trackingData?: TrackingData;
    orderDetails?: OrderDetails;
    takeAwayDetails?: any;
    experimentParams?: ExperimentParams;
    metaData?: MetaData;
    order?: Order;
    trackingDataLogin?: TrackingDataLogin;
    cartData?: CartData;
}

export interface Sections {
    SECTION_IMAGE_CAROUSEL?: SectionImageCarousel;
    SECTION_BASIC_INFO?: SectionBasicInfo;
    SECTION_FEATURE_RAIL?: any[];
    SECTION_RES_HEADER_DETAILS?: SectionResHeaderDetails;
    SECTION_RES_CONTACT?: SectionResContact;
    SECTION_MAGIC_LINKS?: SectionMagicLinks[];
    SECTION_RATING_DATA?: SectionRatingData;
    SECTION_OBP_TAGS?: any[];
    SECTION_BREADCRUMBS?: SectionBreadcrumbs[];
    SECTION_USER_ACTIONS?: SectionUserActions;
}

export interface SectionImageCarousel {
    entities?: Entity[];
    has_more_photo?: boolean;
    obpImage?: ObpImage;
    is_partner?: boolean;
}

export interface Entity {
    entity_type?: string;
    entity_ids?: string[];
}

export interface ObpImage {
    entity_type?: string;
    entity_ids?: string;
}

export interface SectionBasicInfo {
    res_id?: number;
    name?: string;
    cuisine_string?: string;
    rating?: Rating;
    rating_new?: RatingNew;
    res_status_text?: string;
    timing?: Timing;
    is_delivery_only?: boolean;
    is_perm_closed?: boolean;
    is_temp_closed?: boolean;
    is_opening_soon?: number;
    should_ban_ugc?: boolean;
    is_shelled?: boolean;
    media_alert?: number;
    learn_more_text?: string;
    res_thumb?: string;
    disclaimer_text?: string;
    resUrl?: string;
    is_partner?: boolean;
    disable_open_app?: number;
    backToHomeUrl?: string;
}

export interface Rating {
    has_fake_reviews?: number;
    aggregate_rating?: string;
    rating_text?: string;
    rating_subtitle?: string;
    rating_color?: string;
    votes?: string;
    subtext?: string;
    is_new?: boolean;
}

export interface RatingNew {
    newlyOpenedObj?: any;
    suspiciousReviewObj?: any;
    ratings?: Ratings;
}

export interface Ratings {
    DINING?: Dining;
    DELIVERY?: Delivery;
}

export interface Dining {
    rating_type?: string;
    rating?: string;
    reviewCount?: string;
    reviewTextSmall?: string;
    subtext?: string;
    color?: string;
    ratingV2?: string;
    subtitle?: string;
    sideSubTitle?: string;
    bgColorV2?: BgColorV2;
    newOnDining?: boolean;
}

export interface BgColorV2 {
    type?: string;
    tint?: string;
}

export interface Delivery {
    rating_type?: string;
    rating?: string;
    reviewCount?: string;
    reviewTextSmall?: string;
    subtext?: string;
    color?: string;
    ratingV2?: string;
    subtitle?: string;
    sideSubTitle?: string;
    bgColorV2?: BgColorV22;
    newOnDelivery?: boolean;
}

export interface BgColorV22 {
    type?: string;
    tint?: string;
}

export interface Timing {
    timing_desc?: string;
    customised_timings?: CustomisedTimings;
    show_open_now?: boolean;
    show_timing_info?: boolean;
}

export interface CustomisedTimings {
    opening_hours?: OpeningHour[];
}

export interface OpeningHour {
    timing?: string;
    days?: string;
}

export interface SectionResHeaderDetails {
    LOCALITY?: Locality;
    CUISINES?: Cuisines[];
    ESTABLISHMENTS?: any[];
}

export interface Locality {
    text?: string;
    url?: string;
}

export interface Cuisines {
    deeplink?: string;
    url?: string;
    name?: string;
}

export interface SectionResContact {
    city_id?: number;
    city_name?: string;
    country_id?: number;
    country_name?: string;
    zipcode?: string;
    is_dark_kitchen?: boolean;
    locality_verbose?: string;
    latitude?: string;
    longitude?: string;
    static_map_url?: string;
    address?: string;
    is_phone_available?: number;
    phoneDetails?: PhoneDetails;
    res_chain_text?: string;
    res_group_text?: string;
    res_chain_url?: string;
    res_group_url?: string;
    show_res_map?: boolean;
}

export interface PhoneDetails {
    title?: string;
    phoneStr?: string;
}

export interface SectionMagicLinks {
    title?: string;
    magicLinks?: MagicLink[];
}

export interface MagicLink {
    url?: string;
    title?: string;
    displayName?: string;
}

export interface SectionRatingData {
    header?: string;
    options?: Option[];
    selected?: string;
}

export interface Option {
    value?: string;
    label?: string;
}

export interface SectionBreadcrumbs {
    title?: string;
    url?: string;
}

export interface SectionUserActions {
    share?: Share;
    review?: Review;
    photo?: any[];
    bookmark?: Bookmark;
}

export interface Share {
    url?: string;
}

export interface Review {
    reviewed?: boolean;
}

export interface Bookmark {
    count?: number;
    bookmarked?: boolean;
}

export interface NavbarSection {
    name?: string;
    pageTitle?: string;
    pageDescription?: string;
    resId?: number;
    pageUrl?: string;
    title?: string;
    subType?: string;
    key?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogUrl?: string;
    ampHtmlUrl?: string;
    isFloodReliefRes?: boolean;
    isNoIndex?: boolean;
    checkoutUrl?: string;
    children?: Children[];
}

export interface Children {
    key?: string;
    title?: string;
}

export interface TrackingData {
    googleAdsPayload?: GoogleAdsPayload;
}

export interface GoogleAdsPayload {
    addToCart?: AddToCart;
}

export interface AddToCart {
    eventName?: string;
    payload?: Payload;
}

export interface Payload {
    send_to?: string;
}

export interface OrderDetails {
    hasOnlineOrdering?: boolean;
    isServiceable?: boolean;
    promoOffer?: string;
    promoSubText?: string;
    deeplink?: string;
    deliveryTime?: string;
    onlineStatusCode?: number;
    statusReasonCode?: number;
    trackingText?: string;
    minOrderAmountDetails?: MinOrderAmountDetails;
    isTrackingAvailableOnApp?: boolean;
    isO2Active?: boolean;
}

export interface MinOrderAmountDetails {
    minOrderAmount?: number;
    minOrderDisplayAmount?: string;
    minOrderAmountDisplayText?: string;
}

export interface ExperimentParams {
    promo_blocker_on_page_load?: boolean;
    show_native_promo_blocker?: boolean;
}

export interface MetaData {
    currencyDetails?: CurrencyDetails;
    offers?: Offers;
}

export interface CurrencyDetails {
    currency?: string;
    currencyISOCode?: string;
    currency_affix?: string;
    currency_on_right?: number;
}

export interface Offers {
    offer?: Offer;
}

export interface Offer {
    isActive?: number;
    minOrderAmount?: number;
    discountType?: string;
    discountPercentage?: any;
    discountAmount?: any;
    discountValue?: number;
    subText?: string;
    voucherId?: string;
    freebieData?: FreebieDaum[];
}

export interface FreebieDaum {
    minOrder?: number;
    count?: number;
}

export interface Order {
    menuList?: MenuList;
    proBranchDeeplink?: string;
    liveTrackingDeeplink?: string;
}

export interface MenuList {
    menus?: Menu[];
    modifierGroups?: ModifierGroups;
    promosOnMenu?: PromosOnMenu;
    offerSnackbar?: any[];
    postbackParams?: string;
    onlinePaymentsFlag?: number;
    showItemsFilter?: number;
    address?: any[];
    fssaiInfo?: FssaiInfo;
}

export interface Menu {
    menu?: MenuSection;
}

export interface MenuSection {
    id?: string;
    name?: string;
    cart_category_id?: number;
    categories?: Category[];
    is_expanded?: number;
    should_disable_items?: boolean;
    subtitle?: any;
    stepper_disabled_text?: string;
    is_hidden?: boolean;
}

export interface Category {
    category?: CategoryObject;
}

export interface CategoryObject {
    id?: string;
    name?: string;
    items?: Item[];
    reference_items?: any[];
    tag_ids?: string;
    is_expanded?: number;
}

export interface Item {
    item?: SingleFoodItem;
}

export interface SingleFoodItem {
    id?: string;
    name?: string;
    price?: number;
    desc?: string;
    min_price?: number;
    max_price?: number;
    default_price?: number;
    display_price?: number;
    variant_id?: string;
    parent_menu_id?: string;
    item_image_url?: string;
    item_image_thumb_url?: string;
    always_show_on_checkout?: number;
    is_bogo_active?: boolean;
    order?: number;
    auto_add?: number;
    auto_add_quantity?: number;
    show_item_image?: boolean;
    visible?: boolean;
    item_state?: string;
    rating?: Rating2;
    name_slug?: string;
    free_dish_quantity?: number;
    item_type?: string;
    added_bottom_text_field?: any;
    modifier_group_ids?: any[];
    not_added_bottom_text_field?: any;
    tracking_dish_type?: string;
    disabled_text?: any;
    media?: Medum[];
    info_tags?: any[];
    tag_slugs?: string[];
    service_slugs?: string[];
    dietary_slugs?: string[];
    inapplicable_filter_tag_slugs?: any[];
    secondary_tag_slugs?: string[];
    disclaimer_tag_slugs?: any[];
    entity_type?: string;
    primary_tag_slug?: string;
    food_legends?: any;
    search_alias?: string;
    fb_slug?: string;
    item_metadata?: string;
    added_bottom_text?: string;
    not_added_bottom_text?: string;
    not_added_bottom_text_color?: string;
    remove_popup_text?: string;
    item_auto_add_toast_message?: string;
    item_auto_already_added_toast_message?: string;
    remove_popup_title?: string;
    tag_ids?: string;
    item_tag_image?: string;
    tag_images?: any[];
    tag_texts?: any[];
    tag_objects?: any[];
    hide_in_meals_menu?: number;
    groups?: Group[];
    enable_customisation_on_cart?: boolean;
    customisation_tracking_metadata?: string;
    offer?: Offer2;
}

export interface Rating2 {
    total_rating_text?: string;
    value?: number;
}

export interface Medum {
    mediaType?: string;
    image?: Image;
    video?: any;
    audio?: any;
    lottie?: any;
}

export interface Image {
    url?: string;
    data?: any;
    bgColor?: any;
    borderColor?: any;
    bgColorHex?: any;
    animation?: any;
    animate?: any;
    aspectRatio?: any;
    type?: any;
    height?: any;
    width?: any;
    clickAction?: any;
    border?: any;
    shouldIgnoreResizing?: any;
    tracking?: any;
    placeholderColor?: any;
    heightRatio?: any;
    scaleMode?: any;
    filter?: any;
    overlayTextData?: any;
    overlayIcon?: any;
    containerAnimations?: any;
    overlayAnimation?: any;
    offsetRatio?: any;
    shouldExpand?: any;
    cornerRadius?: any;
    trackingData?: any;
    gravity?: any;
    repeatCount?: any;
}

export interface Group {
    group?: Group2;
}

export interface Group2 {
    id?: string;
    name?: string;
    label?: string;
    min?: number;
    max?: number;
    parent_menu_id?: string;
    hasFocus?: number;
    entity_type?: string;
    name_slug?: string;
    tracking_metadata?: string;
    max_selections_per_item?: number;
    parent_visiblity?: number;
    show_customisation?: boolean;
    items?: Item3[];
    reference_items?: any[];
}

export interface Item3 {
    item?: Item4;
}

export interface Item4 {
    id?: string;
    name?: string;
    price?: number;
    desc?: string;
    min_price?: number;
    max_price?: number;
    default_price?: number;
    display_price?: number;
    variant_id?: string;
    parent_menu_id?: string;
    always_show_on_checkout?: number;
    is_bogo_active?: boolean;
    order?: number;
    auto_add?: number;
    auto_add_quantity?: number;
    show_item_image?: boolean;
    visible?: boolean;
    item_state?: string;
    rating?: any;
    name_slug?: string;
    free_dish_quantity?: number;
    item_type?: string;
    added_bottom_text_field?: any;
    modifier_group_ids?: any[];
    not_added_bottom_text_field?: any;
    tracking_dish_type?: string;
    disabled_text?: any;
    media?: any[];
    info_tags?: any[];
    tag_slugs?: any[];
    service_slugs?: any[];
    dietary_slugs?: any[];
    inapplicable_filter_tag_slugs?: any[];
    secondary_tag_slugs?: any[];
    disclaimer_tag_slugs?: any[];
    entity_type?: string;
    primary_tag_slug?: string;
    food_legends?: any;
    search_alias?: string;
    fb_slug?: string;
    item_metadata?: string;
    added_bottom_text?: string;
    not_added_bottom_text?: string;
    not_added_bottom_text_color?: string;
    remove_popup_text?: string;
    item_auto_add_toast_message?: string;
    item_auto_already_added_toast_message?: string;
    remove_popup_title?: string;
    show_customisation?: boolean;
}

export interface Offer2 {
    id?: string;
    display_only_title?: any;
    offer_title?: OfferTitle;
    click_action?: any;
    button_message?: any;
    offer_category?: any;
    config_id?: any;
}

export interface OfferTitle {
    text?: string;
    font?: any;
    color?: any;
    bgColor?: any;
    prefixIcon?: any;
    suffixIcon?: any;
    prefixImage?: any;
    suffixImage?: any;
    deeplink?: any;
    strike?: any;
    prefixText?: any;
    suffixText?: any;
    numberOfLines?: any;
    alignment?: any;
    disableTitleLetterSpacing?: any;
    kerning?: any;
    gradient?: any;
    isMarkdown?: any;
    suffixButton?: any;
    clickAction?: any;
    markdownVersion?: any;
    maxCharLimit?: any;
    type?: any;
    size?: any;
    prefixTextHexCode?: any;
    hexCode?: any;
    isClickable?: any;
    expandedText?: any;
    collapsedText?: any;
    trackingData?: any;
    underline?: any;
    shouldNotAdjustFontSize?: any;
    maxLines?: any;
    animation?: any;
    leftIcon?: any;
    icon?: any;
    rightIcon?: any;
    maxTruncationLineLimit?: any;
    shouldShowReadMore?: any;
    spacing_config?: any;
    time?: any;
    id?: any;
    rightTagText?: any;
}

export interface ModifierGroups {}

export interface PromosOnMenu {
    is_applied_color?: IsAppliedColor;
    is_not_applied_color?: IsNotAppliedColor;
    promos?: Promo[];
    is_hidden?: boolean;
}

export interface IsAppliedColor {
    type?: string;
    tint?: string;
}

export interface IsNotAppliedColor {
    type?: string;
    tint?: string;
}

export interface Promo {
    voucher_code?: string;
    offer?: Offer3;
    titleObj?: TitleObj;
    title?: string;
    sub_title?: string;
    title1?: Title1;
    sub_title1?: SubTitle1;
    image?: string;
    terms?: string[];
    button_title?: ButtonTitle;
    Button_sub_title?: ButtonSubTitle;
    isSalt?: boolean;
    isPro?: boolean;
    proDetails?: any;
}

export interface Offer3 {
    id?: string;
}

export interface TitleObj {
    text?: string;
    prefixIcon?: any[];
}

export interface Title1 {
    text?: string;
    prefixIcon?: any[];
}

export interface SubTitle1 {
    text?: string;
}

export interface ButtonTitle {
    text?: string;
}

export interface ButtonSubTitle {
    text?: string;
}

export interface FssaiInfo {
    text?: string;
    image?: string;
}

export interface TrackingDataLogin {
    googleAdsPayload?: GoogleAdsPayload2;
}

export interface GoogleAdsPayload2 {
    mobileProfileIconClick?: MobileProfileIconClick;
    loginClick?: LoginClick;
    signupClick?: SignupClick;
    signupSuccess?: SignupSuccess;
}

export interface MobileProfileIconClick {
    eventName?: string;
    payload?: Payload2;
}

export interface Payload2 {
    send_to?: string;
}

export interface LoginClick {
    eventName?: string;
    payload?: Payload3;
}

export interface Payload3 {
    send_to?: string;
}

export interface SignupClick {
    eventName?: string;
    payload?: Payload4;
}

export interface Payload4 {
    send_to?: string;
}

export interface SignupSuccess {
    eventName?: string;
    payload?: Payload5;
}

export interface Payload5 {
    send_to?: string;
}

export interface CartData {}

export interface Awards {
    cities?: any[];
    cityWinners?: any[];
    currentCity?: CurrentCity;
    loader?: boolean;
}

export interface CurrentCity {}

export interface User {}

export interface UserSettings {}

export interface SauceBlog {}

export interface Kitchen {
    kitchenApiKey?: string;
    defaultLat?: number;
    defaultLng?: number;
}

export interface Celebrations {
    setFormRequirement?: boolean;
}

export interface Cdng {}

export interface PostOrder {
    orderData?: OrderData;
    orderSupportData?: OrderSupportData;
    deliveryAddressDetails?: DeliveryAddressDetails;
    riderDetails?: RiderDetails;
    restaurantDetails?: RestaurantDetails;
    creatorDetails?: CreatorDetails;
    deliveryStatus?: boolean;
    deliveryMessage?: string;
    deliveryLabel?: string;
    status?: string;
    deliveryTimeStr?: string;
    pollingStatus?: number;
    orderCreationTime?: number;
    orderDeliveryTime?: number;
    currentStatus?: string;
    deliveryMode?: string;
    crystalData?: CrystalData2;
}

export interface OrderData {}

export interface OrderSupportData {}

export interface DeliveryAddressDetails {}

export interface RiderDetails {
    riderName?: string;
    riderPhone?: string;
}

export interface RestaurantDetails {}

export interface CreatorDetails {}

export interface CrystalData2 {
    items?: Items;
}

export interface Items {}

export interface Zomaland {
    currentCityId?: number;
    pageType?: string;
    userData?: UserData;
    uiStates?: UiStates;
    cityLevelData?: CityLevelData;
    zomalandPages?: ZomalandPages;
    zomalandDeepLink?: ZomalandDeepLink;
}

export interface UserData {
    tickets?: any[];
}

export interface UiStates {
    ticketsModalVisible?: boolean;
    showLoader?: boolean;
    ticketView?: string;
    galleryIndex?: number;
    showTicket?: boolean;
}

export interface CityLevelData {}

export interface ZomalandPages {}

export interface ZomalandDeepLink {
    link?: any[];
}

export interface OrderOnline {
    paymentDetails?: PaymentDetails;
    paymentState?: PaymentState;
    kitValidationStatus?: boolean;
    makePaymentParams?: any;
    isPlaceOrderSuccess?: boolean;
    sectionVerifyPhone?: SectionVerifyPhone;
    sectionAutoApplyPromoCodes?: SectionAutoApplyPromoCodes;
    trackingData?: TrackingData2;
    trackingDataLogin?: TrackingDataLogin2;
}

export interface PaymentDetails {
    payment_method_type?: string;
    isZcreditsSelected?: boolean;
}

export interface PaymentState {
    checkoutStatus?: string;
    errorState?: ErrorState;
}

export interface ErrorState {
    code?: number;
    errorMessage?: string;
}

export interface SectionVerifyPhone {
    allCountryCode?: any[];
    selectedCountryCode?: SelectedCountryCode;
}

export interface SelectedCountryCode {}

export interface SectionAutoApplyPromoCodes {
    autoApplyPromoCodes?: any[];
}

export interface TrackingData2 {
    googleAdsPayload?: GoogleAdsPayload3;
}

export interface GoogleAdsPayload3 {
    addToCart?: AddToCart2;
}

export interface AddToCart2 {
    eventName?: string;
    payload?: Payload6;
}

export interface Payload6 {
    send_to?: string;
}

export interface TrackingDataLogin2 {
    googleAdsPayload?: GoogleAdsPayload4;
}

export interface GoogleAdsPayload4 {
    mobileProfileIconClick?: MobileProfileIconClick2;
    loginClick?: LoginClick2;
    signupClick?: SignupClick2;
    signupSuccess?: SignupSuccess2;
}

export interface MobileProfileIconClick2 {
    eventName?: string;
    payload?: Payload7;
}

export interface Payload7 {
    send_to?: string;
}

export interface LoginClick2 {
    eventName?: string;
    payload?: Payload8;
}

export interface Payload8 {
    send_to?: string;
}

export interface SignupClick2 {
    eventName?: string;
    payload?: Payload9;
}

export interface Payload9 {
    send_to?: string;
}

export interface SignupSuccess2 {
    eventName?: string;
    payload?: Payload10;
}

export interface Payload10 {
    send_to?: string;
}

export interface Deliverycities {
    allO2Cities?: any[];
}

export interface ZomatoForWork {}

export interface PageNotFound {}

export interface Collections {}

export interface CollectionDetails {}

export interface AppDownload {}

export interface Contests {}

export interface Search {}

export interface SingleJob {}

export interface GoldSubscriptionAgreement {
    pageTitle?: string;
}

export interface ZoomBackgrounds {}

export interface Country {}

export interface TablePostBooking {}

export interface City {}

export interface Gold {
    plans?: any[];
    customSectionsForCity?: any[];
    orderingRestaurants?: any[];
    dineoutRestaurants?: any[];
    faqs?: any[];
    constants?: Constants;
}

export interface Constants {
    planSectionHeading?: string;
    faqHeading?: string;
    aboutGoldText?: string;
    goldLogoSrc?: string;
}

export interface FeedingPhilippines {}

export interface FeedingIndonesia {}

export interface TalentHub {}

export interface Dining2 {
    cartUi?: CartUi;
}

export interface CartUi {
    isCheckboxClicked?: boolean;
    isUserClicked?: boolean;
}

export interface Scanner {}

export interface Cupcake {}

export interface PartnershipInit {}

export interface PaymentStatus {}

export interface PlanPage {
    benefitsData?: any[];
}

export interface DotePdp {}

export interface DoteHome {}

export interface FamilyPlanPage {
    familyPlanData?: any[];
}

export interface OrderCartProgress {
    currentState?: string;
}

export interface FinancialInformation {}

export interface InvestorRelations {}

export interface InvestorRelationsV2 {}

export interface GoldMarketingPage {
    mainText?: string;
    bottomText?: string;
    headerText?: string;
    oneLink?: string;
}

export interface AgentSearch {
    selectedRes?: any;
    selectedDishes?: any;
    disableResSelection?: boolean;
    disableDishSelection?: boolean;
    isMultiSelectOn?: boolean;
}

export interface AgentRestaurant {
    resItems?: any;
    disabledMenuItemSelection?: boolean;
    lastAddedItemData?: any;
    orderData?: any;
}

export interface DiningPay {}

export interface Bloggers {
    bannerData?: any[];
    snippetData?: any[];
    formData?: any[];
}

export interface Neighbourhoods {}

export interface ResAdminToolkit {}

export interface IndividualPhotoPage {}

export interface OpenGiftCard {}

export interface ProPage {}

export interface ZopayStoryUploader {}

export interface OrderShare {
    riderDetails?: RiderDetails2;
    resDetails?: ResDetails;
    userDetails?: UserDetails;
    deliveryState?: string;
    orderDeliveredSnippet?: OrderDeliveredSnippet;
    orderRejectedSnippet?: OrderRejectedSnippet;
    mapSection?: MapSection;
    resName?: string;
    hashed_tab_id?: string;
    resId?: number;
    headerData?: HeaderData;
    mapSectionStaticData?: MapSectionStaticData;
    orderId?: number;
    linkExpiredSnippet?: LinkExpiredSnippet;
}

export interface RiderDetails2 {}

export interface ResDetails {}

export interface UserDetails {}

export interface OrderDeliveredSnippet {}

export interface OrderRejectedSnippet {}

export interface MapSection {}

export interface HeaderData {}

export interface MapSectionStaticData {}

export interface LinkExpiredSnippet {}

export interface GiftCard {}

export interface ZLiveHomePageReducer {}

export interface ZLiveCartReducer {
    packagesData?: any[];
    paymentSdkData?: PaymentSdkData;
    paymentKitStates?: PaymentKitStates;
}

export interface PaymentSdkData {}

export interface PaymentKitStates {}

export interface IrctcPartnership {}

export interface BlogData {
    blogs?: any[];
    error?: any;
    isfetching?: any;
}

export interface PageUrlMappings {
    "/pune/cad-m-cad-b-rasta-peth/order"?: PuneCadMCadBRastaPethOrder;
}

export interface PuneCadMCadBRastaPethOrder {
    name?: string;
    pageTitle?: string;
    pageDescription?: string;
    resId?: number;
    pageUrl?: string;
    title?: string;
    subType?: string;
    key?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogUrl?: string;
    ampHtmlUrl?: string;
    isFloodReliefRes?: boolean;
    isNoIndex?: boolean;
    checkoutUrl?: string;
    show_rating_v15?: boolean;
    isMobile?: number;
    isOAuthV2Enabled?: boolean;
    useAuthSdkForLogin?: boolean;
    useAuthSdkForLogout?: boolean;
    gaPageType?: string;
}

export interface Careers {
    departments?: any[];
}

export interface AllJobs {
    openings?: any[];
    filters?: any[];
}

export interface Department {}

export interface Aboutus {
    leadershipData?: any[];
}

export interface Sneakpeek {}

export interface ApiState {}

export interface Entities {
    REVIEWS?: Reviews;
    IMAGES?: Images;
    VIDEOS?: Videos;
    REVIEW_COMMENTS?: ReviewComments;
    REVIEW_REPLIES?: ReviewReplies;
    PHOTO_COMMENTS?: PhotoComments;
    POSITIVE_TAGS?: PositiveTags;
    NEGATIVE_TAGS?: NegativeTags;
    RATING?: Rating3;
    EVENTS?: Events;
    AD_BANNERS?: AdBanners;
    RESTAURANTS?: Restaurants;
    COLLECTIONS?: Collections2;
    ORDER?: Order2;
    ADDRESSES?: Addresses;
    USER?: User2;
    PENDING_REVIEW?: PendingReview;
    CDNG_ORDER?: CdngOrder;
    DOTE_ORDER?: DoteOrder;
    ZLIVE_EVENTS?: ZliveEvents;
}

export interface Reviews {}

export interface Images {
    r_MTYwODU0OTI3MD?: RMtywOdu0Oti3Md;
    r_NTQ5NDQwNjE4NT?: RNtq5NdqwNjE4Nt;
    r_DE3Mzg2ODM4Njc?: RDe3Mzg2Odm4Njc;
    u_k4NjY2NTAwNDky?: UK4NjY2NtawNdky;
}

export interface RMtywOdu0Oti3Md {
    photoId?: string;
    url?: string;
    thumbUrl?: string;
    uploaderName?: string;
    uploaderProfilePic?: string;
    uploaderProfileUrl?: string;
    timestamp?: string;
    likeCount?: number;
    commentCount?: number;
    comments?: any[];
    isLiked?: number;
    hash?: string;
}

export interface RNtq5NdqwNjE4Nt {
    photoId?: string;
    url?: string;
    thumbUrl?: string;
    uploaderName?: string;
    uploaderProfilePic?: string;
    uploaderProfileUrl?: string;
    timestamp?: string;
    likeCount?: number;
    commentCount?: number;
    comments?: any[];
    isLiked?: number;
    hash?: string;
}

export interface RDe3Mzg2Odm4Njc {
    photoId?: string;
    url?: string;
    thumbUrl?: string;
    uploaderName?: string;
    uploaderProfilePic?: string;
    uploaderProfileUrl?: string;
    timestamp?: string;
    likeCount?: number;
    commentCount?: number;
    comments?: any[];
    isLiked?: number;
    hash?: string;
}

export interface UK4NjY2NtawNdky {
    photoId?: string;
    url?: string;
    thumbUrl?: string;
    uploaderName?: string;
    uploaderProfilePic?: string;
    uploaderProfileUrl?: string;
    timestamp?: string;
    likeCount?: number;
    commentCount?: number;
    comments?: any[];
    isLiked?: number;
    hash?: string;
}

export interface Videos {}

export interface ReviewComments {}

export interface ReviewReplies {}

export interface PhotoComments {}

export interface PositiveTags {}

export interface NegativeTags {}

export interface Rating3 {}

export interface Events {}

export interface AdBanners {}

export interface Restaurants {}

export interface Collections2 {}

export interface Order2 {}

export interface Addresses {}

export interface User2 {}

export interface PendingReview {}

export interface CdngOrder {}

export interface DoteOrder {}

export interface ZliveEvents {}

export interface User3 {
    currentAddress?: CurrentAddress;
    is_admin_user?: boolean;
    admin_access?: any[];
    admin_links?: any[];
}

export interface CurrentAddress {}

export interface UiLogic {
    isPreciseLocationBannerOpen?: boolean;
    searchPageMounted?: boolean;
    isUniversalLocationWithBannerModalOpen?: boolean;
    isUniversalLocationModalWithDishCardOpen?: boolean;
    mountPartnershipPreciseLocationModal?: boolean;
    universalLMDishCard?: UniversalLmdishCard;
    promoBlockerOnPageLoadAllowed?: boolean;
}

export interface UniversalLmdishCard {}

export interface Location {
    currentLocation?: CurrentLocation;
}

export interface CurrentLocation {
    addressId?: number;
    entityId?: number;
    entityType?: string;
    locationType?: string;
    isOrderLocation?: number;
    cityId?: number;
    latitude?: string;
    longitude?: string;
    userDefinedLatitude?: number;
    userDefinedLongitude?: number;
    entityName?: string;
    orderLocationName?: string;
    cityName?: string;
    countryId?: number;
    countryName?: string;
    displayTitle?: string;
    o2Serviceable?: boolean;
    placeId?: string;
    cellId?: string;
    deliverySubzoneId?: number;
    placeType?: string;
    placeName?: string;
    isO2City?: boolean;
    fetchFromGoogle?: boolean;
    fetchedFromCookie?: boolean;
    locationPrompt?: any[];
    isO2OnlyCity?: boolean;
    addressBlocker?: number;
    address_template?: any[];
    otherRestaurantsUrl?: string;
}

export interface Footer {
    languages?: Language[];
    selectedLanguage?: SelectedLanguage;
    linksData?: LinksData;
    footerDataArray?: FooterDataArray;
    disclaimerText?: string;
}

export interface Language {
    name?: string;
    value?: string;
}

export interface SelectedLanguage {
    name?: string;
    value?: string;
}

export interface LinksData {
    aboutusContent?: AboutusContent[];
    learnMoreContent?: LearnMoreContent[];
    restaurantsContent?: RestaurantsContent[];
    countries?: Country2[];
    enterpriseContent?: EnterpriseContent[];
    zomaverseContent?: ZomaverseContent[];
}

export interface AboutusContent {
    label?: string;
    link?: string;
}

export interface LearnMoreContent {
    label?: string;
    link?: string;
}

export interface RestaurantsContent {
    label?: string;
    link?: string;
}

export interface Country2 {
    id?: number;
    name?: string;
    value?: string;
}

export interface EnterpriseContent {
    label?: string;
    link?: string;
}

export interface ZomaverseContent {
    label?: string;
    link?: string;
}

export interface FooterDataArray {
    ABOUT_US?: string;
    ZOMAVERSE?: string;
    FOR_RESTAURANTS?: string;
    LEARN_MORE?: string;
    SOCIAL_LINKS?: string;
}

export interface LangKeys {
    RES_INFO_TITLE?: string;
    ADDRESS_TITLE?: string;
    FEATURED_IN_TITLE?: string;
    RATE_EXPERIENCE_TITLE?: string;
    WRITE_REVIEW_TITLE?: string;
    CONTACT_TITLE?: string;
    REVIEW_INPUT_LABEL?: string;
    REVIEW_ERROR_TOAST_MSG?: string;
    IMAGE_UPLOADER_DRAG_DROP_LABEL?: string;
    IMAGE_UPLOADER_BROWSE_BUTTON_LABEL?: string;
    CLEAR_TEXT?: string;
    VIEW_GALLERY?: string;
    OUR_SPONSORS_TITLE?: string;
    SIMILAR_RES_TITLE?: string;
    HISTOGRAM_TITLE?: string;
    HISTOGRAM_DESC?: string;
    HISTOGRAM_TRENDS_TITLE?: string;
    MOST_RECENT?: string;
    PEOPLE_SAY?: string;
    ADD_REVIEW_TITLE?: string;
    ORDER_TITLE?: string;
    REVIEWS_TITLE?: string;
    EVENT_TITLE?: string;
    SEE_ALL_EVENTS_TITLE?: string;
    OPENING_HOURS?: string;
    HAPPY_HOURS?: string;
    CHEF_DETAILS_TITLE?: string;
    NO_MENU_TEXT?: string;
    EMPTY_MENU_LIST_STRING?: string;
    NO_REVIEW_TEXT?: string;
    VIEW_ALL_REVIEWS_TITLE?: string;
    CALCULATE_COST_TEXT?: string;
    FILTER_ALL_REVIEWS?: string;
    FILTER_FOLLOWING?: string;
    FILTER_POPULAR?: string;
    FILTER_MY_REVIEWS?: string;
    FILTER_BLOGGERS_REVIEWS?: string;
    FILTER_ORDER_REVIEWS?: string;
    SORT_NEWEST_FIRST?: string;
    SORT_OLDEST_FIRST?: string;
    SORT_HIGHEST_RATED?: string;
    SORT_LOWEST_RATED?: string;
    POSITIVE_TAGS?: string;
    NEGATIVE_TAGS?: string;
    DAILY_MENU_TITLE?: string;
    DELETE_REVIEW_TEXT?: string;
    DIRECTION_TITLE?: string;
    BOOKMARK_TITLE?: string;
    SHARE_TITLE?: string;
    CALL_TEXT?: string;
    COPY_TEXT?: string;
    PROMO_COPIED_TEXT?: string;
    FEATURED_IN_TEXT?: string;
    REVIEWS_TEXT?: string;
    FOLLOWERS_TEXT?: string;
    FOLLOW_TEXT?: string;
    LIKES_TEXT?: string;
    COMMENTS_TEXT?: string;
    LIKE_TEXT?: string;
    COMMENT_TEXT?: string;
    LIKED_TEXT?: string;
    SEE_ALL_MENUS_TEXT?: string;
    SEE_FULL_MENU_TEXT?: string;
    UGC_DISABLED_ERROR?: string;
    NUMBER_UNAVAILABLE?: string;
    DONATE_NOW?: string;
    TAKEAWAY_TITLE?: string;
    TAKEAWAY_PICKUP_ADDRESS_PREFIX?: string;
    ORDER_ADDRESS_PREFIX?: string;
    ORDER_ADDRESS_PREFIX_NOT_DELIVERING?: string;
    REPEAT_CUST_ADD_NEW_CAPTION?: string;
    REPEAT_CUST_REPEAT_LAST_CAPTION?: string;
    REPEAT_CUST_MODAL_TITLE?: string;
    REMOVE_CUST_MODAL_TITLE?: string;
    MIN_MAX_QTY_ERROR_MSG?: string;
    CUST_MENU_RADIO_SELECT_MESSAGE?: string;
    CUST_MENU_MULTI_SELECT_MIN_MAX_MESSAGE?: string;
    CUST_MENU_MULTI_SELECT_MAX_MESSAGE?: string;
    CUST_MENU_ADD_TO_ORDER_BUTTON_CAPTION?: string;
    VEG_ONLY_FILTER_LABEL?: string;
    NON_VEG_ONLY_FILTER_LABEL?: string;
    CONTAINS_EGG_FILTER_LABEL?: string;
    MENU_SEARCH_PLACEHOLDER_TEXT?: string;
    OFFER_DETAILS_MODAL_TITLE?: string;
    CLOSED_FOR_ONLINE_ORDERGING_TEXT?: string;
    AVAILABLE_ON_THE_APP?: string;
    LIVE_TRACKING_OPEN_APP_MODAL_TITLE?: string;
    LIVE_TRACKING_OPEN_APP_MODAL_DESCRIPTION?: string;
    OPEN_APP_MODAL_CLICK_ACTION_TEXT?: string;
    OPEN_APP_MODAL_CLOSE_ACTION_TEXT?: string;
    MORE_INFO_TEXT?: string;
    FIND_OTHER_RESTAURANTS_TEXT?: string;
    LOCATION_MODAL_WITH_DISH_CARD_DESC?: string;
    RES_DOES_NOT_DELIVER?: string;
    DOES_NOT_DELIVER_DESCRIPTION?: string;
    VIEW_OTHER_RES_TEXT?: string;
    DELIVERING_TO_TEXT?: string;
    CHANGE_LOCATION_TEXT?: string;
    RES_NOT_SERVICEABLE_TEXT?: string;
    FIND_OTHER_RESTAURANTS?: string;
    ORDER_ONLINE_NOT_AVAILABLE_TITLE?: string;
    ORDER_ONLINE_NOT_AVAILABLE_BUTTON?: string;
    DOWNLOAD_THE_APP?: string;
    ORDER_ONLINE_NOT_AVAILABLE_DESKTOP?: string;
    ORDER_SUSHI_EDIT_ADDRESS_TITLE?: string;
    ORDER_SUSHI_DELIVERY_AREA_LABEL?: string;
    ORDER_SUSHI_ADDRESS_INPUT_PLACEHOLDER?: string;
    ORDER_SUSHI_INSTRUCTIONS_INPUT_PLACEHOLDER?: string;
    ORDER_SUSHI_BACK_TO_ADDRESS_BUTTON_CAPTION?: string;
    ORDER_SUSHI_CANCEL_BUTTON_CAPTION?: string;
    ORDER_SUSHI_CHANGE_BUTTON_CAPTION?: string;
    ORDER_SUSHI_SAVE_AND_PROCEED_BUTTON_CAPTION?: string;
    ORDER_SUSHI_ADD_OTHER_TAG_PLACEHOLDER?: string;
    ORDER_SUSHI_SEARCH_INPUT_PLACEHOLDER?: string;
    ORDER_SUSHI_RECENT_LOCATION_HEADER_TEXT?: string;
    ORDER_SUSHI_BACK_TO_ADD_ADDRESS_BUTTON_CAPTION?: string;
    ORDER_SUSHI_ADDRESS_TYPE_LABEL_WORK?: string;
    ORDER_SUSHI_ADDRESS_TYPE_LABEL_HOME?: string;
    ORDER_SUSHI_ADDRESS_TYPE_LABEL_HOTEL?: string;
    ORDER_SUSHI_ADDRESS_TYPE_LABEL_OTHER?: string;
    ORDER_SUSHI_SEARCH_LOCATION_MODAL_TITLE?: string;
    ORDER_SUSHI_SELECT_ADDRESS_MODAL_TITLE?: string;
    ORDER_SUSHI_SAVED_ADDRESS_SEARCH_PLACEHOLDER?: string;
    ORDER_SUSHI_ADD_ADDRESS_SEARCH_PLACEHOLDER?: string;
    ORDER_SUSHI_SAVED_ADDRESSES_TITLE?: string;
    ORDER_SUSHI_DELIVERS_HERE_TEXT?: string;
    ORDER_SUSHI_NOT_DELIVER_HERE_TEXT?: string;
    ORDER_SUSHI_EDIT_BUTTON_CAPTION?: string;
    ORDER_SUSHI_SET_DELIVERY_LOCATION_TITLE?: string;
    ORDER_SUSHI_CONFIRM_AND_PROCEED_BUTTON_CAPTION?: string;
    ORDER_SUSHI_MOVE_THE_PIN?: string;
    ORDER_SUSHI_ADDRESS_BLOCKER_TEXT?: string;
    ORDER_SUSHI_GOOGLE_MAP_PROMPT_LINE1?: string;
    ORDER_SUSHI_GOOGLE_MAP_PROMPT_LINE2?: string;
    ORDER_SUSHI_ADD_LABEL?: string;
    ORDER_SUSHI_CUSTOMIZE_LABEL?: string;
    ORDER_SUSHI_OUT_OF_STOCK_LABEL?: string;
    ORDER_SUSHI_MENU_BUTTON_CAPTION?: string;
    ORDER_SUSHI_ITEMS_SUFFIX_TEXT?: string;
    ORDER_SUSHI_SINGLE_ITEM_SUFFIX_TEXT?: string;
    ORDER_SUSHI_CONTINUE_BUTTTON_CAPTION?: string;
    ORDER_SUSHI_CLEAR_BUTTON_CAPTION?: string;
    ORDER_SUSHI_AMOUNT_SUFFIX_PLUS_TAXES_TEXT?: string;
    ORDER_SUSHI_CART_HEADER_TEXT?: string;
    ORDER_SUSHI_DEKTOP_TOGGLE_BUTTON_SUFFIX_TEXT?: string;
    ORDER_SUSHI_SUBTOTAL_TEXT?: string;
    NO_SEARCH_RESULT_FOUND?: string;
    TRENDING_SEARCHES?: string;
    NO_TRENDING_SEARCH?: string;
    TOP_RESTAURANTS?: string;
    SEARCH_PLACEHOLDER?: string;
    DETECT_LOCATION?: string;
    DETECT_LOCATION_SUBTITLE?: string;
    ADD_ADDRESS?: string;
    SAVED_ADDRESSES?: string;
    POPULAR_LOCATIONS?: string;
    LOCATION_NO_RESULT_SUB?: string;
    LOCATION_NO_RESULT?: string;
    SEARCH_MODAL_MOBILE_VIEW_TITLE?: string;
    GEO_LOCATION_NO_BROWSER_SUPPORT?: string;
    GEO_LOCATION_PERMISSION_DENIED?: string;
    GEO_LOCATION_POSITION_UNAVAILABLE?: string;
    GEO_LOCATION_TIMEOUT?: string;
    GEO_LOCATION_UNKNOWN_ERROR?: string;
    GEO_LOCATION_DEFAULT_ERROR?: string;
    PROFILE_LINK_NAME?: string;
    NOTIFICATIONS_LINK_NAME?: string;
    BOOKMARKS_LINK_NAME?: string;
    REVIEWS_LINK_NAME?: string;
    NETWORK_LINK_NAME?: string;
    FIND_FRIENDS_LINK_NAME?: string;
    SETTINGS_LINK_NAME?: string;
    LOGOUT_LINK_NAME?: string;
    LOGIN_FAILED_TITLE?: string;
    SIGNUP_FAILED_TITLE?: string;
    OTP_VERIFICATION_TITLE?: string;
    LOGIN_TITLE?: string;
    SIGNUP_TITLE?: string;
    SIGNUP_NAME_ERROR_MESSAGE?: string;
    SIGNUP_EMPTY_EMAIL_ERROR_MESSAGE?: string;
    SIGNUP_INVALID_EMAIL_ERROR_MESSAGE?: string;
    SIGNUP_PHONE_ERROR_MESSAGE?: string;
    SIGNUP_FULL_NAME_LABEL?: string;
    SIGNUP_EMAIL_LABEL?: string;
    SIGNUP_PHONE_LABEL?: string;
    TERMS_OF_SERVICE_TEXT?: string;
    PRIVACY_POLICY_TEXT?: string;
    CONTENT_POLICIES?: string;
    AGREE_TO_ZOMATO_POLICY_TEXT?: string;
    CREATE_ACCOUNT_BUTTON_TEXT?: string;
    ALREADY_HAVE_AN_ACCOUNT_TEXT?: string;
    LOGIN_WITH_PHONE_ERROR?: string;
    NEW_TO_ZOMATO_TEXT?: string;
    SEND_OTP_TEXT?: string;
    ERROR_MESSAAGE_BOX_TRY_OTHER_METHODS_TEXT?: string;
    ERROR_MESSAAGE_BOX_SKIP_FOR_NOW_TEXT?: string;
    NEW_OTP_HAS_BEEN_SENT_TEXT?: string;
    NOT_RECEIVED_OTP_TEXT?: string;
    RESEND_NOW_TEXT?: string;
    TERMINATE_VERIFICATION_TEXT?: string;
    YES_BUTTON_TEXT?: string;
    NO_BUTTON_TEXT?: string;
    CONTINUE_WITH_GOOGLE_BUTTON_TEXT?: string;
    ERROR_OCCURED_TEXT?: string;
    OR_TEXT?: string;
    OTP_TEXT_BOX_LABEL?: string;
    OTP_TEXT_BOX_PROCEED_BUTTON?: string;
    OTP_NOT_RECEIVED_TEXT?: string;
    COOKIE_BANNER_TEXT?: string;
}

export interface DeviceSpecificInfo {
    browser?: Browser;
}

export interface Browser {
    userAgent?: string;
    name?: string;
    version?: string;
    platform?: string;
}

export interface PageBlockerInfo {}

export interface FullPageAds {
    pageViews?: any[];
    adVisible?: boolean;
}

export interface NetworkState {
    isOnline?: number;
}

export interface FetchConfigs {
    headers?: Headers;
}

export interface Headers {}

export interface HrefLangInfo {
    link?: string;
    hreflang?: string;
    isSelected?: boolean;
}

export interface PageConfig {
    showLocationBannerAutoPopup?: boolean;
    openAppPill?: any[];
    isLocationPopupFlowAllowed?: boolean;
    cacheMeta?: CacheMeta;
    orderPageBlocker?: OrderPageBlocker;
    hideCookieBanner?: boolean;
    showRatingV2?: boolean;
}

export interface CacheMeta {
    cacheable?: boolean;
    "max-age"?: number;
    trackingData?: TrackingData3;
}

export interface TrackingData3 {
    identifier?: string;
}

export interface OrderPageBlocker {
    showO2?: boolean;
    desktopDeeplinkUrl?: string;
}

export interface PartnershipLoginModal {
    isVisible?: boolean;
}

export interface PartnershipLoginOptionModal {
    isVisible?: boolean;
}

export interface DoesNotDeliverModal {
    isVisible?: boolean;
}

export interface BackButton {
    showLoadingState?: boolean;
}
