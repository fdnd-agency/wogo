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
     - **`atoms`**: 
     - **`molecules`**: 
     - **`organisms`**: 
     - **`pages`**: 
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
