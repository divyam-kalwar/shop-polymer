# Shop Polymer

A lightweight, static storefront prototype built with HTML and CSS. It demonstrates a responsive retail catalog and checkout flow without JavaScript, package installation, or build tooling.

## Overview

This repository currently includes:

- a home page with category-based storefront sections
- four category-based product listing pages
- responsive navigation and mobile drawer
- storefront branding and product imagery
- static product catalog content rendered directly in HTML

The project is intentionally dependency-free and can be opened directly in a browser.

## Project structure

```text
shop-polymer/
├── index.html                # Store home page
├── mens_outerwear.html       # Product listing page for men's outerwear
├── ladies_outerwear.html     # Product listing page for ladies' outerwear
├── mens_tshirts.html         # Product listing page for men's T-shirts
├── ladies_tshirts.html       # Product listing page for ladies' T-shirts
├── mens_outerwear_item.html  # Hard-coded men's outerwear detail page
├── ladies_outerwear_item.html # Hard-coded ladies' outerwear detail page
├── mens_tshirts_item.html    # Hard-coded men's T-shirt detail page
├── ladies_tshirts_item.html  # Hard-coded ladies' T-shirt detail page
├── cart.html                 # Cart page with hard-coded sample items and count
├── checkout.html             # Responsive demo checkout form
├── css/
│   ├── style.css            # Styles for the home page
│   ├── mens_outerwear.css   # Shared product listing and navigation styles
│   └── commerce.css         # Product detail, cart, and checkout layouts
├── images/                  # Storefront and category product images
├── LICENSE                  # MIT license
└── README.md                # Project documentation
```

## Current implementation status

This repository is a responsive, static storefront demo with a home page, four category listings, a hard-coded product detail page for the first item in each listing, a sample cart, and a checkout form layout. These pages are visual prototypes; the cart count and contents are fixed, and checkout does not submit data.

## Features

- responsive static storefront layout
- category navigation and CSS-only mobile drawer
- branded storefront design with product imagery
- responsive layouts for mobile, tablet, and desktop
- one hard-coded detail page linked from each category listing
- hard-coded cart contents, totals, and cart-count badge
- checkout form and order summary layout
- no build step or external dependencies required

## Technologies

- HTML5
- CSS3
- Static asset-based mock storefront

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Notes

This is not a production e-commerce application. It is a static storefront demo intended to serve as a visual foundation for future catalog, cart, and checkout features.
