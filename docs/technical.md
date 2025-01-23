# Technical Specs

This technical documentation will provide a clear guidance for a new team or developers taking over the project. It is to help understand how the project works and how it's structured

## Code Structure

This project uses Atomic Design, which helps break down the UI into smaller, reusable components.

---

### **What Atomic Design looks like**  
   - **Atoms**: Atoms are the smallest, most basic building blocks. They can’t be broken down further. (example atoms: Button, HeaderImage, Link).
   - **Molecules**: Molecules are groups of atoms working together as one/ a unit (example: Dropdown, Translation, TicketDetails).
   - **Organisms**: Organisms are bigger sections made by combining molecules and/or atoms. (example: Footer, Hero, Reviews).
   - **Pages**: Pages are the complete views you see in your browser. They’re made by combining multiple organisms. (example: The home page, which includes a Hero (organism) and a Footer (organism).)

---

### **Folder Structure Overview**
The main folder, `src`, contains the source code. Here's how it’s organized:

1. **`api` Folder**  
    API logic, making it reusable across the app. 
   - `contentful-fetch.js`: Handles fetching data from Contentful CMS.
   - `contentful-images-fetch.js`: Manages image retrieval from Contentful.

2. **`lib` Folder**  

   Contains reusable resources like assets, components, and mock data. It includes:

   - **`assets`**: Stores static resources such as images and fonts.
   - **`components`**: Houses UI components organized using Atomic Design:
     - **`atoms`**
     - **`molecules`**
     - **`organisms`** 
     - **`pages`**
   - **`mockdata`**: Provides sample data for development and testing.
   - **`index.js`**: Simplifies imports by exporting all `atoms` for use elsewhere.

3. **`routes` Folder**  
    The routes folder contains route-specific files and folders that define how the app responds to different URLs.

    - **`slug`**: Dynamically handles pages based on the URL. inside this folder you can find: 
        - **`slug`**: Handles nested routes for pages requiring two URL inside this folder you can find: 
            - **`+page.server.js`**: Server-side logic for loading data dynamically based on both slugs.
            - **`+page.svelte`**: Renders the detailed page content for the nested route.
        - **`+error.svelte`**: Displays an error page when the route is invalid or an error occurs.
        - **`+page.server.js`**: Server-side logic for loading data dynamically based on the slug.
        - **`+page.svelte`**:  Displays the dynamic page content fetched by +page.server.js.
    - **`api/submit`**: Handles form submissions and sends the data to Contentful.

4. **`static` Folder**  
The static folder has all static files. Here you can find fonts, images but also the global.css used throughout the whole project.
---

## Important components

The important components are components that are frequently used throughout the project and/or are things that can make/break the website.

### **Pages**

The page components serve as the key elements of the WoGo UI. Without the pages, the user can't interact/navigate in the site. The pages provide the structure, layout, and functionality for individual pages.

Example home.svelte: 

The home.svelte file pulls in modular components like Hero and Reviews.

```js
<script>
  import { Hero, Reviews, TicketCarousel, HowItWorks, HeadLine, WhatWeDo, GiftCard } from '$lib/index';
  export let items;
  export let itemCollection;
</script>
```

Dynamically sets the page title based on the first item in items.
```
<svelte:head>
  <title>{items[0].title}</title>
</svelte:head>
```

To edit a page component like home.svelte:

1. You can modify the imported components: If you want to change how a specific section looks or works, update the respective child component ( Hero, Reviews).

2. Change the data passed:
Example: If you want the Reviews component to display different reviews:
```
<Reviews reviews={items[3].componentsCollection.items} />
```

3. Add New Sections or Components: To introduce a new section, import the necessary component and include it in the layout.:

```
<HeadLine title="New Feature Section" />
<NewFeature data={items[5]} />
```

### **Button.svelte**

The button component is frequently reused throughout the project and is therefore an important component or atleast an component that is word mentioning. The button component is an atom called 'Button.svelte' so you can use this in molecules organisms and pages. It’s a customizable button you can place anywhere on the website.

1. **Customizable Options**:  
   The button has **options** like:
   - `variant`: This changes the style (e.g., primary, secondary).
   - `size`: This changes how big or small the button is.
   - `href`: If you provide a link, it turns into a clickable link instead of a button.
   - `title`: The text that shows on the button.
   - `icon`: If you want to show an icon next to the text, you can add one.
   - `iconColor`: This lets you choose the color of the icon.

2. **Link or Button**:  
   If you provide an `href` (a link), the button becomes a clickable link (`<a>` tag). If no `href` is provided, it stays as a regular button (`<button>` tag) that can trigger actions like submitting a form.

3. **Icon Support**:  
   If you want an icon (like a small image), you can pass that through the `icon` prop, and it will appear inside the button next to the text.

4. **Styling**:  
   The button’s look changes based on the `variant` you choose. For example:
   - `btn-primary` will make the button stand out more, with a bold color.
   - `btn-secondary` has a lighter style.
   - It also grows or shrinks depending on the `size`.

5. **User Interaction**:  
   When users hover over or click the button, it shows visual effects, like growing a little or showing a shadow, to let them know they can interact with it.

## CMS configuration

WoGo uses Contentful as CMS. Contentful allows you to define custom content types (such as "pages", "cards", or "blog posts"), store content for these types, and easily retrieve and display them through APIs.

1. **Content Types**:  
   Contentful allows you to define different "content types." Which looks like this:

2. **How Data Is Fetched**:  
   - When you visit a page, the `+page-server.js` file uses the **slug** (a unique identifier in the URL) to find the correct content in Contentful.
   - The data fetched from Contentful is then passed to components in the front-end (like `HomePage`, `TicketsOverview`).

### **How to Add or Update Content in Contentful?**
- Log in to Contentful and create/edit **entries** for your content types. For example, you can create a new **page** and set its title, description, and other fields. 
- Once the content is published in Contentful, it can be automatically fetched and displayed on the website through the code.

## API Documentation

---

