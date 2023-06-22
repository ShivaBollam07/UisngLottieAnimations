import React from 'react';
import Post from './Post';
import API from './Assests/API.png'
import Employee from './Assests/Employee.png'
import BanaoTask1 from './Assests/Banaotask1.png'
import AmritaPortfolio from './Assests/AmritaPortfolio.png'
import calculator from './Assests/calculator.png'
import DrumMachine from './Assests/DrumMachine.png'
import MarkDown from './Assests/MarkDown.png'
import Quote from './Assests/Quote.png'
import Ecommerce from './Assests/Ecommerce.png'
import Technical from './Assests/Technical.png'
import Product from './Assests/product.png'
import Navigation from './Assests/Navigation.png'
import Todo from './Assests/ToDoListApp.png'
const Posting = () => {

  
    const handlePostClick = (link) => {
        window.location.href = link;
      };
    

  return (
    <div>

       <h1>Projects </h1>
       <Post
        image={AmritaPortfolio}
        title="Amrita Portfolio"
        content="
        AMRITA College using  React.js to create an engaging and interactive user interface. It highlights
         their educational journey,
         accomplishments, and expertise."
        handleClick={() => handlePostClick('https://shivabollam07.github.io/Amrita_Portfolio/Amrita/')}
      />
     

     <Post
        image={Employee}
        title="Employee App"
        content="It enables managing and updating employee information 
        efficiently, providing a user-friendly interface for creating, reading, updating
        , and deleting employee records."
        handleClick={() => handlePostClick('https://reactjs-ts-crud-with-reduxtoolkit.netlify.app/')}
      />

       <Post
        image={Quote}
        title="Quote Generator "
        content="
        JavaScript fetches
          quotes from an API or a predefined list, HTML structures the layout, 
          and CSS styles the design. "
        handleClick={() => handlePostClick('https://shivabollam07.github.io/Random-Quote-Generator/')}
      />
    
 
    <Post
        image={Ecommerce}
        title="Ecommerce Website"
        content="
        An eCommerce website built with JavaScript, HTML, and CSS provides a platform for online shopping.
         JavaScript handles dynamic features such as product listings, shopping cart functionality"
        handleClick={() => handlePostClick('https://shivabollam07.github.io/E-commerce-website/index.html')}
      />


    <Post
        image={calculator}
        title="Calculator App"
        content="
       
        It utilizes JavaScript to handle the logic and calculations,
         HTML for the structure and layout, and CSS for styling to provide a seamless user experience"
        handleClick={() => handlePostClick('https://shivabollam07.github.io/Calculator/')}
      />

      
       <Post
        image={Navigation}
        title="Mobile Navigation"
        content="
        Implementing mobile navigation using JavaScript and CSS enables smooth and 
        intuitive navigation on mobile devices, enhancing the user experience."
        handleClick={() => handlePostClick('https://shivabollam07.github.io/Styled_Mobile_Navigation/')}
      />

       <Post
        image={DrumMachine}
        title="Drum Machine "
        content="
         JavaScript handles the drum sounds and 
         event listeners, while HTML structures the layout, and CSS styles the visual elements,
         resulting in an engaging and user-friendly drumming experience."
        handleClick={() => handlePostClick('https://shivabollam07.github.io/Drum_Machine/')}
      />

      
    <Post
        image={Technical}
        title="Technical Documentation"
        content="
        A technical documentation website on JavaScript, built using JavaScript itself,
         provides in-depth information, tutorials, and examples for developers. JavaScript 
         enables dynamic content rendering, interactivity, and code samples, enhancing the documentation's 
        usability and facilitating a seamless learning experience for JavaScript enthusiasts."
        handleClick={() => handlePostClick('https://shivabollam07.github.io/TechnicalDocumetation/')}
      />
        
         <Post
        image={MarkDown}
        title="Markdown previewer"
        content="
        JavaScript
         handles the text processing and conversion, HTML structures the layout, and CSS styles the rendered content, providing 
        a real-time preview of the formatted text in a user-friendly interface."
        handleClick={() => handlePostClick('https://shivabollam07.github.io/Markdown-Previewer/')}
      />
        
      <Post
        image={API}
        title="API"
        content="Fetching an API in React.js involves making HTTP requests to retrieve data,
         enabling dynamic content and real-time updates in web applications using libraries
          like Axios or Fetch API."
          handleClick={() => handlePostClick('https://atg-task-3-sigma.vercel.app/')}

      />

      
        <Post
        image={Todo}
        title="To Do List App"
        content="
        Creating a to-do list app using the MERN stack (MongoDB, Express, React, Node.js)
         enables efficient task management with a robust and scalable backend."
        handleClick={() => handlePostClick('https://to-do-list-app-gilt.vercel.app/')}
      />
       
       

       <Post
        image={Product}
        title="Product Landing Page"
        content="
         A React.js product landing page delivers an immersive, interactive,
         and visually appealing platform to showcase products or services effectively.
          With dynamic content and enhanced user experience,
         it captivates potential customers and drives conversions."
        handleClick={() => handlePostClick('https://shivabollam07.github.io/Product_Landing_Page/')}
      />

       <Post
        image={BanaoTask1}
        title="UI Design"
        content="
           Designing UI components in React.js involves creating visually appealing,
         modular interfaces using React's component-based architecture."
        handleClick={() => handlePostClick('https://banao-task-1-mu.vercel.app/')}
      />

      
    
    </div>
  );
};

export default Posting;
