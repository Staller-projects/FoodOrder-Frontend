/**
 * Imported all the images from assets folder to here
 */
import SignUpCoverImage from "../assets/images/SignUpCoverImage.png";
import HomeBackgroundImage from "../assets/images/home_bg.avif";
import ThumbImage from "../assets/images/thumbImage.avif";

/**
 * This image object holds the all the images which is being throughout the app.
 */
export const Images = {
    SignUpCoverImage: SignUpCoverImage,
    HomeBackgroundImage: HomeBackgroundImage,
    ThumbImage: ThumbImage,
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

 