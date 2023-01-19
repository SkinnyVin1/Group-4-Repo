let starContainer = document.querySelectorAll('.rating-container')

starContainer.forEach((star, i) => {
    let allStars = star.querySelectorAll('.star');
    let ratingHtml = star.querySelector('.index-count');

    allStars.forEach((star, i)=> {
        star.onclick = ()=> {
            let current_star_level = i + 1;
    
            allStars.forEach((star1, j)=> {
                if(current_star_level >= j + 1) {
                    star1.innerHTML = '&#9733'
                    ratingHtml.innerHTML = current_star_level
                }else{
                    star1.innerHTML = '&#9734'
                }
      
            })
        }
    })
})

