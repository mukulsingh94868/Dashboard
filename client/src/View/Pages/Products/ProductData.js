const ProductData = [
    {
        "name": "Spectronic XR",
        "salePrice": 935.03,
        "regularPrice": 1000,
        "vendor": "Lonirye",
        "type": "Android Phone",
        "color": "Gray",
        "inches": 6.22,
        "storageRAM": "128 GB+8 GB",
        "quantity": 1,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "prices": [
            {
                "small": 200,
                "medium": 350,
                "large": 400
            }
        ],
        "imageUrl": "https://content.ndtsupply.com/assets/Web-Categories/Film-Viewers-Densitometers/Luminance-Meters/accumaxaccessory1.jpg?vid=3",
        "description": "Let us know about your query!"
    },
    {
        "name": "Gizmo MegaPro",
        "salePrice": 599.99,
        "regularPrice": 699.99,
        "vendor": "TechCo",
        "type": "Smartphone",
        "color": "Black",
        "inches": 6.5,
        "storageRAM": "256 GB+12 GB",
        "quantity": 1,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "prices": [
            {
                "small": 200,
                "medium": 350,
                "large": 400
            }
        ],
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/krgohow0/speaker/home-theatre/p/j/3/giz-trio-2112-pro-gizmore-original-imag58tk6f5tpgsm.jpeg?q=70",
        "description": "The ultimate Gizmo MegaPro with advanced features."
    },
    {
        "name": "Ultra Tablet X1",
        "salePrice": 299.99,
        "regularPrice": 349.99,
        "vendor": "ElectroTech",
        "type": "Tablet",
        "color": "Silver",
        "inches": 10.1,
        "storageRAM": "64 GB+6 GB",
        "quantity": 1,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "prices": [
            {
                "small": 200,
                "medium": 350,
                "large": 400
            }
        ],
        "imageUrl": "https://p2-ofp.static.pub//fes/cms/2023/07/17/cb33s6cv4scvgl4k2mxwpjhnmqfjgg628756.png",
        "description": "A powerful and sleek Ultra Tablet X1 for your entertainment needs."
    },
    {
        "name": "Quantum Watch Z",
        "salePrice": 199.99,
        "regularPrice": 249.99,
        "vendor": "TimeTech",
        "type": "Smartwatch",
        "color": "Rose Gold",
        "inches": 12,
        "storageRAM": 64,
        "quantity": 1,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "prices": [
            {
                "small": 200,
                "medium": 350,
                "large": 400
            }
        ],
        "imageUrl": "https://m.media-amazon.com/images/I/51jTiV1UQoL._SX300_SY300_QL70_FMwebp_.jpg",
        "description": "Stay connected with the Quantum Watch Z, your stylish companion."
    },
    {
        "name": "Thunder Gaming Laptop",
        "salePrice": 1499.99,
        "regularPrice": 1699.99,
        "vendor": "ByteForce",
        "type": "Laptop",
        "color": "Gunmetal Gray",
        "inches": 15.6,
        "storageRAM": "1 TB SSD+16 GB",
        "quantity": 1,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "prices": [
            {
                "small": 200,
                "medium": 350,
                "large": 400
            }
        ],
        "imageUrl": "https://www.gizmochina.com/wp-content/uploads/2018/04/ThundeRobot-GX97-Gaming-Laptop-600x600.jpg",
        "description": "Unleash the power of Thunder Gaming Laptop for an immersive gaming experience."
    },
    {
        "name": "HD Soundbar System",
        "salePrice": 149.99,
        "regularPrice": 179.99,
        "vendor": "AudioWave",
        "type": "Audio System",
        "color": "Black",
        "inches": 14,
        "storageRAM": 128,
        "quantity": 1,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "prices": [
            {
                "small": 200,
                "medium": 350,
                "large": 400
            }
        ],
        "imageUrl": "https://m.media-amazon.com/images/I/316oXJ83C1S._SX300_SY300_QL70_FMwebp_.jpg",
        "description": "Upgrade your audio experience with the HD Soundbar System."
    },
    {
        "name": "Fitness Tracker Pro",
        "salePrice": 79.99,
        "regularPrice": 99.99,
        "vendor": "FitTech",
        "type": "Fitness Tracker",
        "color": "Blue",
        "inches": 12,
        "storageRAM": 256,
        "quantity": 1,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "prices": [
            {
                "small": 200,
                "medium": 350,
                "large": 400
            }
        ],
        "imageUrl": "https://m.media-amazon.com/images/I/41W9cTmg5hL._SX300_SY300_QL70_FMwebp_.jpg",
        "description": "Monitor your fitness goals with the advanced Fitness Tracker Pro."
    },
    {
        "name": "Chefs Deluxe Cookware Set",
        "salePrice": 249.99,
        "regularPrice": 299.99,
        "vendor": "CulinaryCraft",
        "type": "Cookware",
        "color": "Stainless Steel",
        "inches": 12,
        "storageRAM": 64,
        "quantity": 1,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "prices": [
            {
                "small": 200,
                "medium": 350,
                "large": 400
            }
        ],
        "imageUrl": "https://m.media-amazon.com/images/I/41j6hrS2gdL._SY300_SX300_QL70_FMwebp_.jpg",
        "description": "Upgrade your kitchen with the Chef's Deluxe Cookware Set."
    },
    {
        "name": "Home Security Camera System",
        "salePrice": 179.99,
        "regularPrice": 199.99,
        "vendor": "SecureHome",
        "type": "Security Camera",
        "color": "White",
        "inches": 12,
        "storageRAM": 128,
        "quantity": 1,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "prices": [
            {
                "small": 200,
                "medium": 350,
                "large": 400
            }
        ],
        "imageUrl": "https://m.media-amazon.com/images/I/415x5fwkXwL._SX300_SY300_QL70_FMwebp_.jpg",
        "description": "Enhance your home security with the advanced Home Security Camera System."
    },
    {
        "name": "Adventure Backpack",
        "salePrice": 49.99,
        "regularPrice": 59.99,
        "vendor": "ExploreGear",
        "type": "Backpack",
        "color": "Green",
        "inches": 18,
        "storageRAM": 512,
        "quantity": 1,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "prices": [
            {
                "small": 200,
                "medium": 350,
                "large": 400
            }
        ],
        "imageUrl": "https://m.media-amazon.com/images/I/91MXfHKMTpL._SX679_.jpg",
        "description": "Embark on your adventures with the durable Adventure Backpack."
    }
];

export default ProductData;
