Create-React-Mapp
===================
--By Aishwarya Agrawal

Hey! Check out my new React Application for displaying a custom Map UI. It uses libraries ranging from **React** and **Redux** all the way to **Ant Design**

This web application focuses on displaying a live map UI, received from Open Street Map. It displays real-time maps with an option to skip to India, UK, or The USA. Including the live map renders, it also contains cards with data of locally used currency and units, to help improve the user experience.  

----------


<i class="icon-folder-open"></i>Documents
-------------

The file consists of a create-react-app style structure with node modules public and src folders with some package.json files. 

Altered files,
	<i class="icon-file"></i>  ./public/index.html
	<i class="icon-file"></i>  ./src/index.js
	<i class="icon-file"></i>  ./src/index.css
	<i class="icon-file"></i> ./src/Components/Inputs.js
	<i class="icon-file"></i>  ./src/Components/Map.js
	<i class="icon-file"></i>  ./src/Components/data.js
	<i class="icon-file"></i>  ./src/Components/card.css

> **Note:**
> - Play with any of the node_module folder at your own risk.
> -A detailed description of different features is provided below.


Breakdown
-------------------

Let us look at the component-wise breakdown along with the info on which file contains which component 


#### <i class="icon-pencil"></i> index.html
This is practically unchanged, the original file that is created using Create-react-app is used with the app rendered in the **div** with the **id of root**

#### <i class="icon-pencil"></i> index.js
This contains the javascript file which renders the app. Imports are mainly the ant.design file which has been used to achieve the **Header-Sidebar-Footer** format and useState hooks that are responsible for changing the location on the map and data on the card. The structure of the app is defined here with styles present in **index.css**

###Components
#### <i class="icon-pencil"></i> Inputs.js
It contains the structure of **dropdown box** and a **Load** button. These use the setState functions to change the current render on the screen. The data that is rendered on the cards for all the countries is stored in this file.

#### <i class="icon-pencil"></i> Map.js

It contains the **background render**, i.e. the maps that are showed in the main body.  This dynamic feature is achieved by making an API request, the address of which is decided by useState hooks dynamically.  This API request, made can be tested by running on **postman**.

#### <i class="icon-pencil"></i> data.js
This has the final component that is the **card component**. Not only does it store the card structure but also prints card data without directly storing it in the file. **card.css is imported** to it so as to provide the required styles.

----------


Other Info
-------------

Considering the fact that the data for regions on the OSM API is huge and just downloading the data for 1 location would have taken >50GB, I decided to feed in the data directly to Inputs.js file so that just the data that is required is being stored.
For any suggestions or feedback, write to aishwaryaagrawal1211@gmail.com

