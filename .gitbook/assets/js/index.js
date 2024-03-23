import { IMG_ERROR } from "/assets/js/error.js"

document.addEventListener('DOMContentLoaded', ev=>{

    const imgs = document.querySelectorAll('img')
    imgs.forEach(img => img.addEventListener('error',ev => {
        IMG_ERROR(img)
    }))

})