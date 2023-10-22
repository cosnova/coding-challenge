export type ProductFilter = {
    product_type?: string;
    product_category?: string;
    product_tags?: string;
    brand?: string;
    name?: string;
    price_greater_than?: number;
    price_less_than?: number;
    rating_greater_than?: number;
    rating_less_than?: number;
}

export enum ProductTag {
    Canadian = "Canadian",
    CertClean = "CertClean",
    ChemicalFree = "Chemical Free",
    DairyFree = "Dairy Free",
    EWGVerified = "EWG Verified",
    EcoCert = "EcoCert",
    FairTrade = "Fair Trade",
    GlutenFree = "Gluten Free",
    Hypoallergenic = "Hypoallergenic",
    Natural = "Natural",
    NoTalc = "No Talc",
    NonGMO = "Non-GMO",
    Organic = "Organic",
    PeanutFreeProduct = "Peanut Free Product",
    SugarFree = "Sugar Free",
    USDAOrganic = "USDA Organic",
    Vegan = "Vegan",
    AlcoholFree = "alcohol free",
    CrueltyFree = "cruelty free",
    OilFree = "oil free",
    Purpicks = "purpicks",
    SiliconeFree = "silicone free",
    WaterFree = "water free",
}

export enum Brands {
    "almay" = "almay",
    "alva" = "alva",
    "anna sui" = "anna sui",
    "annabelle" = "annabelle",
    "benefit" = "benefit",
    "boosh" = "boosh",
    "burt's bees" = "burt's bees",
    "butter london" = "butter london",
    "c'est moi" = "c'est moi",
    "cargo cosmetics" = "cargo cosmetics",
    "china glaze" = "china glaze",
    "clinique" = "clinique",
    "coastal classic creation" = "coastal classic creation",
    "colourpop" = "colourpop",
    "covergirl" = "covergirl",
    "dalish" = "dalish",
    "deciem" = "deciem",
    "dior" = "dior",
    "dr. hauschka" = "dr. hauschka",
    "e.l.f." = "e.l.f.",
    "essie" = "essie",
    "fenty" = "fenty",
    "glossier" = "glossier",
    "green people" = "green people",
    "iman" = "iman",
    "l'oreal" = "l'oreal",
    "lotus cosmetics usa" = "lotus cosmetics usa",
    "maia's mineral galaxy" = "maia's mineral galaxy",
    "marcelle" = "marcelle",
    "marienatie" = "marienatie",
    "maybelline" = "maybelline",
    "milani" = "milani",
    "mineral fusion" = "mineral fusion",
    "misa" = "misa",
    "mistura" = "mistura",
    "moov" = "moov",
    "nudus" = "nudus",
    "nyx" = "nyx",
    "orly" = "orly",
    "pacifica" = "pacifica",
    "penny lane organics" = "penny lane organics",
    "physicians formula" = "physicians formula",
    "piggy paint" = "piggy paint",
    "pure anada" = "pure anada",
    "rejuva minerals" = "rejuva minerals",
    "revlon" = "revlon",
    "sally b's skin yummies" = "sally b's skin yummies",
    "salon perfect" = "salon perfect",
    "sante" = "sante",
    "sinful colours" = "sinful colours",
    "smashbox" = "smashbox",
    "stila" = "stila",
    "suncoat" = "suncoat",
    "w3llpeople" = "w3llpeople",
    "wet n wild" = "wet n wild",
    "zorah" = "zorah",
    "zorah biocosmetiques" = "zorah biocosmetiques",
}

export type ProductColor = {
    "hex_value": string,
    "colour_name": string
}

export type Product = {
    "id": number,
    "brand": string,
    "name": string,
    "price": string,
    "price_sign": string,
    "currency": string,
    "image_link": string,
    "product_link": string,
    "website_link": string,
    "description": string,
    "rating": null,
    "category": "pencil",
    "product_type": "lip_liner",
    "tag_list": ProductTag[],
    "created_at": string,
    "updated_at": string,
    "product_api_url": string,
    "api_featured_image": string,
    "product_colors": ProductColor[],
}