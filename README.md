# Shop Polymer

A lightweight, responsive storefront prototype built with HTML and CSS. It is intentionally JavaScript-free.

## Overview

The storefront includes a home page, four category listings, a hard-coded product detail page for each category, a sample cart, checkout form, and order confirmation page. The pages are static demos: product/cart data is hard-coded and checkout does not submit or store form data.

## Run locally

Open `index.html` directly in a browser, or serve the project directory with any local static HTTP server. No package installation, build step, or external dependencies are required.

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
├── checkout-success.html     # Confirmation page reached from Place Order
├── css/
│   ├── style.css             # Home page styles
│   ├── mens_outerwear.css    # Shared navigation and product listing styles
│   └── commerce.css          # Product detail, cart, checkout, and confirmation styles
├── images/                  # Storefront and category product images
├── LICENSE                  # MIT license
└── README.md                # Project documentation
```

## Current implementation status

This repository is a responsive storefront demo with a home page, four category listings, a hard-coded product detail page for one item in each category, a sample cart, a checkout form, and a checkout confirmation page. Product selection, cart contents, quantities, and the cart-count badge are static examples. The Place Order link opens the confirmation page; it does not validate or submit the checkout form.

## Features

- responsive static storefront layout
- category navigation and CSS-only mobile drawer
- branded storefront design with product imagery
- responsive layouts for mobile, tablet, and desktop
- one hard-coded detail page linked from each category listing
- hard-coded cart contents, totals, and cart-count badge
- checkout form, order summary, and demo confirmation page
- no build step or external dependencies required

## Technologies

- HTML5
- CSS3
- Static asset-based mock storefront

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

