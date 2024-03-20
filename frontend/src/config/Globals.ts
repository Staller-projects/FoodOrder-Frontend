/**
 * Imported all the images from assets folder to here
 */
import SignUpCoverImage from "../assets/images/SignUpCoverImage.png";
import HomeBackgroundImage from "../assets/images/home_bg.avif";
import ThumbnailImage from "../assets/images/thumbImage.avif";
import NoImage from "../assets/images/noimageThumbnail.png";
import AppLogo from "../assets/images/appLogo.png";
import ResturentDataLoadingSvg from "../assets/svg/resDataLoading.svg";
import VegSvg from "../assets/svg/veg.svg";
import NonVegSvg from "../assets/svg/nonveg.svg";

/**
 * This image object holds the all the static
 * images which is being throughout the app.
 */
export const Images = {
    SignUpCoverImage: SignUpCoverImage,
    HomeBackgroundImage: HomeBackgroundImage,
    ThumbnailImage: ThumbnailImage,
    NoImage: NoImage,
    AppLogo: AppLogo,
    ResturentDataLoadingSvg: ResturentDataLoadingSvg,
    VegSvg: VegSvg,
    NonVegSvg: NonVegSvg,
};

/**
 * BUTTON_TYPES Enum representing different types of button styles.
 */
export enum BUTTON_TYPES {
    PRIMARY = "text-white bg-primary",
    OUTLINE = "text-primary border-2 border-primary bg-transparent",
    ACTION = "text-primary bg-transparent",
    ICON = "bg-transparent",
}

export enum FormFields {
    name = "name",
    email = "email",
    password = "password",
}
