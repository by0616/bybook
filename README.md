# bybook: my personal blog website 
## Introduction
The website is currently deployed at [https://bybook.onrender.com/](https://bybook.onrender.com/)  
Or you can try either   
watch ***video demo*** on [bilibili](https://www.bilibili.com/video/BV16hcTzuEaZ/?share_source=copy_web&vd_source=6577cb199105b49e25127c31f0261c8d)  
or ***run locally***: create an empty directory called bybook then run the following code in terminal:  
```bash
git clone https://github.com/by0616/bybook.git
npm install
npm run dev
```
 
and command click the link given in the terminal!

## Structure 
The project structure is as follows. 
<pre>
.
├── index.html
├── node_modules
├── package-lock.json
├── package.json
├── README.md
├── src
│   ├── assets
│   ├── components
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── modules
│   │   └── pages
│   ├── index.jsx
│   └── utilities.css
└── vite.config.js
</pre>
It should be clarifid that though the assets are stored in the `src` folder, they are not imported as modules but rather as static files, through 'Github + jsDelivr CDN' service.