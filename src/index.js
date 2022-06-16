console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded',()=>{
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
   fetch(imgUrl)
   .then((res)=>res.json())
   .then((images)=>{
    let dogs=images.message
    
    dogs.forEach(dog => {
        let dogContainer = document.getElementById("dog-image-container")
        let images = document.createElement('img')
        images.src = dog
        images.style.height = '400px'
        images.style.width = '100%'
        images.style.padding = '10px'
        dogContainer.style.display = 'flex'
        dogContainer.style.flexWrap = 'wrap'

        dogContainer.appendChild(images)
        
        
        
        
        
    });
   })
   const breedUrl = 'https://dog.ceo/api/breeds/list/all'
   fetch(breedUrl)
   .then((res)=>res.json())
   .then((breeds)=>{
      let dogBreeds = breeds.message
      for (const dogBreed in dogBreeds) {
          const ul = document.getElementById('dog-breeds')
          const li = document.createElement('li')
          li.innerText = dogBreed
          ul.append(li)

          li.addEventListener('click',()=>{
            const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            li.style.color = randomColor

          })

          
      }
      let filterBreeds = document.querySelector('select')
    //   const mainList = document.getElementById('dog-breeds')
    //   mainList.remove()
      filterBreeds.addEventListener('click',()=>{
        
        
        let value = filterBreeds.value
        let div = document.createElement('div')
        let body = document.getElementsByTagName('boay')
        document.body.append(div)
        for (const dog in dogBreeds) {
            if (value == 'a') {
              if (dog.charAt(0)=='a') {
                 let listA = document.createElement('li')
                 listA.innerText = dog
                 div.appendChild(listA)
              }
                
            } else if (value == 'b') {
                if (dog.charAt(0)=='b') {
                    let listB = document.createElement('li')
                    listB.innerText = dog
                    div.appendChild(listB)
                     
                 } 
            }else if (value == 'c') {
                if (dog.charAt(0)=='c') {
                    let listC = document.createElement('li')
                    listC.innerText = dog
                    document.body.append(listC)
                     
                 } 
            }else if (value == 'd') {
                if (dog.charAt(0)=='d') {
                    let listD = document.createElement('li')
                    listD.innerText = dog
                    document.body.append(listD)
                     
                 } 
            }
                
            
                
            }
        
        
      })

      
   })
   
    
})
  