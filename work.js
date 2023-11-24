 let productarray = [
     {
        id:1,
        img: 'Graphic images/3D Logo Mockup on Glass Wall - PHOTOPEA.png',
     text: "Logo Design",
     client: "Personal",
     category: "Carousel"
     },

     {
        id:2,
        img: 'Graphic images/WILD TRAVEL LOGO_page-0001.jpg',
     text: "Logo Design",
     client: "Personal",
     category: "Carousel"

     },
     {
        id:3,
        img: 'Graphic images/OMOJE CAFE LOGO_page-0001.jpg',
     text: "Logo Design",
     client: "Personal",
     category: "Carousel"
     },
   
     {
        id:4,
        img: 'Graphic images/WILDERNESS PARKS LOGO_page-0001.jpg',
     text: "Logo Design",
     client: "Personal",
     category: "Carousel"
     },
     {
        id:5,
        img: 'Graphic images/OMOJOLA LOGO DESIGN - Copy - Copy.png',
     text: "Logo Design",
     client: "Personal",
     category: "Carousel"
     },
     
    ]

let content = document.querySelector(".content")
    let items = ''
    listproduct = productarray
    function showProduct() {
    
        listproduct.forEach((item)=> {

        items += `
         <div class="col-sm-6  col-xl-8">
          <div class = "img-body py-2">
          <a href="${item.img}">
          <img src="${item.img}" class="img-fluid"></a>
          </div>
          <div class="textbody  text-center">
          <h5> Niche: ${item.text} </h3>
          <p>  Client : ${item.client} </p>
         </div>
         </div>

        
        `
        })
         content.innerHTML = items
    }

    showProduct()


    let list = document.querySelector(".listG")
  let list2 = document.querySelector(".listC")
  let active =  document.querySelector(".listF")
let grid = document.querySelector(".grid")
let Carousel = document.querySelector(".carousel")

list.addEventListener("click",(e)=> {
    grid.style.display = "block"
    Carousel.style.display = "none"
        })
    
        list2.addEventListener("click",(e)=> {
         grid.style.display = "none"
      Carousel.style.display = "block"
        })

        active.addEventListener("click",(e)=> {
            grid.style.display = "block"
            Carousel.style.display = "block"
        })


      function showCarousel() {
        grid.style.display = "none"
        Carousel.style.display = "block"
      }

      showCarousel()