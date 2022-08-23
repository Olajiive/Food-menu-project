//get only unique categories - HARDEST ONE
//iterate over categories return buttons
//make sure to select buttons when they are available
const menu = [
    {
        id: 1,
        Img:"https://images.pexels.com/photos/9862286/pexels-photo-9862286.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"Mashed Potatoes",
        price: 15.99,
        category: "Breakfast",
        ingredients: "Ingredients: Potatoes, Vegetable Oil (canola Oil, Corn Oil, Soybean Oil, Hydrogenated Soybean Oil, Natural Beef Flavor [wheat And Milk Derivatives]*), Dextrose, Sodium Acid Pyrophosphate (maintain Color), Salt.",
    },
    {
        id: 2,
        Img:"https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"Steak and baked Potatoes",
        price: 10.11,
        category: "Breakfast",
        ingredients: "Ingredients: Potatoes, Vegetable Oil (canola Oil, Corn Oil, Soybean Oil, Hydrogenated Soybean Oil, Natural Beef Flavor [wheat And Milk Derivatives]*), Dextrose, Sodium Acid Pyrophosphate (maintain Color), Salt.",
    },
    {
        id: 3,
        Img:"https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"Hamburger",
        price: 15.99,
        category: "Breakfast",
        ingredients: "Ingredients: Potatoes, Vegetable Oil (canola Oil, Corn Oil, Soybean Oil, Hydrogenated Soybean Oil, Natural Beef Flavor [wheat And Milk Derivatives]*), Dextrose, Sodium Acid Pyrophosphate (maintain Color), Salt.",
    },
    {
        id: 4,
        Img:"https://images.pexels.com/photos/5848081/pexels-photo-5848081.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"Hash Brown",
        price:13.10,
        category: "Lunch",
        ingredients: "Ingredients: Potatoes, Vegetable Oil (canola Oil, Corn Oil, Soybean Oil, Hydrogenated Soybean Oil, Natural Beef Flavor [wheat And Milk Derivatives]*), Dextrose, Sodium Acid Pyrophosphate (maintain Color), Salt.",
    },
    {
        id: 5,
        Img:"https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"Mashed Potatoes",
        price:6.15,
        category: "Lunch",
        ingredients: "Ingredients: Potatoes, Vegetable Oil (canola Oil, Corn Oil, Soybean Oil, Hydrogenated Soybean Oil, Natural Beef Flavor [wheat And Milk Derivatives]*), Dextrose, Sodium Acid Pyrophosphate (maintain Color), Salt.",
    },
    {
        id: 6,
        Img:"https://images.pexels.com/photos/6607418/pexels-photo-6607418.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"Corn on the corb",
        price:11.20,
        category: "Lunch",
        ingredients: "Ingredients: Potatoes, Vegetable Oil (canola Oil, Corn Oil, Soybean Oil, Hydrogenated Soybean Oil, Natural Beef Flavor [wheat And Milk Derivatives]*), Dextrose, Sodium Acid Pyrophosphate (maintain Color), Salt.",
    },
    {
        id: 7,
        Img:"https://images.pexels.com/photos/4294500/pexels-photo-4294500.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"Roast Beef",
        price:13.54,
        category: "Dinner",
        ingredients: "Ingredients: Potatoes, Vegetable Oil (canola Oil, Corn Oil, Soybean Oil, Hydrogenated Soybean Oil, Natural Beef Flavor [wheat And Milk Derivatives]*), Dextrose, Sodium Acid Pyrophosphate (maintain Color), Salt.",
    },
    {
        id: 8,
        Img:"https://images.pexels.com/photos/6163263/pexels-photo-6163263.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"Apple pie",
        price:12.90,
        category: "Dinner",
        ingredients: "Ingredients: Potatoes, Vegetable Oil (canola Oil, Corn Oil, Soybean Oil, Hydrogenated Soybean Oil, Natural Beef Flavor [wheat And Milk Derivatives]*), Dextrose, Sodium Acid Pyrophosphate (maintain Color), Salt.",
    },
    {
        id: 9,
        Img:"https://images.pexels.com/photos/4113459/pexels-photo-4113459.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"Hot dog",
        price:7.25,
        category: "Dinner",
        ingredients: "Ingredients: Potatoes, Vegetable Oil (canola Oil, Corn Oil, Soybean Oil, Hydrogenated Soybean Oil, Natural Beef Flavor [wheat And Milk Derivatives]*), Dextrose, Sodium Acid Pyrophosphate (maintain Color), Salt.",
    }
]
const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container")



//load items
 window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuCategories();
})
function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        // console.log(item)
         return   `<article class="menu-item">
         <div class="image">
             <img src=${item.Img} class="photo" alt="menu-item">
            
         </div>
         <div class="item_info">
             <div class="header">
                 <h4>${item.title}</h4>
                 <h4 class="price">${item.price}</h4>
             </div>
             <p class="item-text">${item.ingredients}</p>
         </div>
       
     </article>`
     })
     displayMenu= displayMenu.join("")
     sectionCenter.innerHTML = displayMenu
 }


function displayMenuCategories(){
    const categories = menu.reduce(function(values,item) {
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },["all"])
    const categoryBtns = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
    container.innerHTML =categoryBtns
    const filterBtns = document.querySelectorAll(".filter-btn");
    
    filterBtns.forEach(function(btn){
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem) {
               // console.log(menuItem.category)
               if(menuItem.category === category){
                 return menuItem
               }
                
            })
            //console.log (menuCategory)
            if( category === "all"){
                displayMenuItems(menu)
            }
            else {
                displayMenuItems(menuCategory)
            }
        })
        })
}


/*filter items
filterBtns.forEach(function(btn){
btn.addEventListener("click", function(e){
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(menuItem) {
       // console.log(menuItem.category)
       if(menuItem.category === category){
         return menuItem
       }
        
    })
    //console.log (menuCategory)
    if( category === "all"){
        displayMenuItems(menu)
    }
    else {
        displayMenuItems(menuCategory)
    }
})
})
*/
 
 
/*          Alternative

 window.addEventListener("DOMContentLoaded", () => {
    let displayMenu = menu.map(function(menuItem){
        //console.log(menuItem)
        return  `<article class="menu-item">
        <div class="image">
            <img ${menuItem.Img} class="photo" alt="menu-item">
           
        </div>
        <div class="item_info">
            <div class="header">
                <h4>${menuItem.title}</h4>
                <h4 class="price">${menuItem.price}</h4>
            </div>
            <p class="item-text">${menuItem.ingredients}</p>
        </div>
      
    </article>`
    })
    displayMenu=displayMenu.join("")
    console.log(displayMenu)
    sectionCenter.innerHTML=displayMenu
})
*/
