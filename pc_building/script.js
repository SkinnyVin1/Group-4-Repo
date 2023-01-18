let arrayToUse = [
    {
        resolution: '1080',
        chipset: 'amd',
        budget: '45k',
        cod: '85',
        fortnight: '103',
        minecraft: '49',
        gta: '53',
        image: "/pc_building/pc_builds_img/white_ps.jpg"
    },
    {
        resolution: '1080',
        chipset: 'amd',
        budget: '55k',
        cod: '100',
        fortnight: '130',
        minecraft: '50',
        gta: '64',
        image: "/pc_building/pc_builds_img/white_ps.jpg",
    },
    {
        resolution: '1080',
        chipset: 'amd',
        budget: '65k',
        cod: '104',
        fortnight: '151',
        minecraft: '51',
        gta: '86',
        image: "/pc_building/pc_builds_img/white_ps.jpg"
    },
    {
        resolution: '1080',
        chipset: 'amd',
        budget: '90k',
        cod: '130',
        fortnight: '207',
        minecraft: '52',
        gta: '136',
        image: "/pc_building/pc_builds_img/white_ps.jpg"
    },
    {
        resolution: '1440',
        chipset: 'amd',
        budget: '45k',
        cod: '60',
        fortnight: '68',
        minecraft: '48',
        gta: '35',
        image: "/pc_building/pc_builds_img/white_ps.jpg"
    },
    {
        resolution: '1440',
        chipset: 'amd',
        budget: '55k',
        cod: '72',
        fortnight: '85',
        minecraft: '49',
        gta: '44',
        image: "/pc_building/pc_builds_img/white_ps.jpg"
    },
    {
        resolution: '1440',
        chipset: 'amd',
        budget: '65k',
        cod: '95',
        fortnight: '125',
        minecraft: '50',
        gta: '54',
        image: "/pc_building/pc_builds_img/white_ps.jpg"
    },
    {
        resolution: '1440',
        chipset: 'amd',
        budget: '90k',
        cod: '123',
        fortnight: '175',
        minecraft: '51',
        gta: '133',
        image: "/pc_building/pc_builds_img/white_ps.jpg"
    },
    {
        resolution: '1080',
        chipset: 'intel',
        budget: '45k',
        cod: '85',
        fortnight: '103',
        minecraft: '49',
        gta: '53',
        image: "/pc_building/pc_builds_img/white_ps.jpg"
    },
    {
        resolution: '1080',
        chipset: 'intel',
        budget: '55k',
        cod: '100',
        fortnight: '130',
        minecraft: '50',
        gta: '64',
        image: "/pc_building/pc_builds_img/white_ps.jpg"
    },
    {
        resolution: '1080',
        chipset: 'intel',
        budget: '65k',
        cod: '104',
        fortnight: '151',
        minecraft: '51',
        gta: '86',
        image: "/pc_building/pc_builds_img/white_ps.jpg"
    },
    {
        resolution: '1080',
        chipset: 'intel',
        budget: '90k',
        cod: '130',
        fortnight: '207',
        minecraft: '52',
        gta: '136',
        image: "/pc_building/pc_builds_img/white_ps.jpg"
    },
    {
        resolution: '1440',
        chipset: 'intel',
        budget: '45k',
        cod: '60',
        fortnight: '68',
        minecraft: '48',
        gta: '35',
        image: "/pc_building/pc_builds_img/white_ps.jpg"
    },
    {
        resolution: '1440',
        chipset: 'intel',
        budget: '55k',
        cod: '72',
        fortnight: '85',
        minecraft: '49',
        gta: '44',
        image: "/pc_building/pc_builds_img/white_ps.jpg"
    },
    {
        resolution: '1440',
        chipset: 'intel',
        budget: '65k',
        cod: '95',
        fortnight: '125',
        minecraft: '50',
        gta: '54',
        image: "/pc_building/pc_builds_img/white_ps.jpg"
    },
    {
        resolution: '1440',
        chipset: 'intel',
        budget: '90k',
        cod: '123',
        fortnight: '175',
        minecraft: '51',
        gta: '133',
        image: "/pc_building/pc_builds_img/white_ps.jpg"
    },

]

function changeFPS() {
    let selectedReso = document.querySelector('.selected-btn').getAttribute('data-value')
    let selectedChip = document.querySelector('.selected-btn-chipset').getAttribute('data-value')
    let selectedBudget = document.querySelector('.selected-budget').getAttribute('data-value')
    let codText = document.querySelector('.cod-text')
    let fortnightText = document.querySelector('.fortnight-text')
    let minecraftText = document.querySelector('.minecraft-text')
    let gtaText = document.querySelector('.gta-text')

    arrayToUse.forEach((v, i, a) => {

        if (v.resolution === selectedReso && v.chipset === selectedChip && v.budget === selectedBudget) {

            codText.innerHTML = v.cod
            fortnightText.innerHTML = v.fortnight
            minecraftText.innerHTML = v.minecraft
            gtaText.innerHTML = v.gta
        }
    })
}

changeFPS()


let showModal = document.querySelector(".show-modal")
let modalContainer = document.querySelector(".modal-container")
let modalXbutton = document.querySelector(".model-x-button")


showModal.addEventListener("click", () => {
    modalContainer.classList.add('open-modal')
})

modalXbutton.addEventListener("click", () => {
    modalContainer.classList.remove('open-modal')
})

let performanceBtn = document.querySelectorAll(".performance-btn")

for (let i = 0; i < performanceBtn.length; i++) {
    performanceBtn[i].addEventListener("click", () => {
        if (!performanceBtn[i].classList.contains('selected-btn')) {
            let selectedBtn = document.querySelector('.selected-btn')
            selectedBtn.classList.remove('selected-btn')
            performanceBtn[i].classList.add('selected-btn')
        }

        changeFPS()
    })
}



let helpmeDecide = document.querySelector(".helpme-header")
let helpmeBody = document.querySelector(".helpme-body")

helpmeDecide.addEventListener("click", () => {
    helpmeBody.classList.toggle('open-body')
})


let chipsetBtn = document.querySelectorAll(".chipset-btn")

for (let i = 0; i < chipsetBtn.length; i++) {
    chipsetBtn[i].addEventListener("click", () => {
        if (!chipsetBtn[i].classList.contains('selected-btn-chipset')) {
            let selectedBtn = document.querySelector('.selected-btn-chipset')
            selectedBtn.classList.remove('selected-btn-chipset')
            chipsetBtn[i].classList.add('selected-btn-chipset')
        }

        changeFPS()
    })
}

let displayText = document.querySelectorAll(".budget-display-text")
let arrowLeft = document.querySelector(".arrow-left")
let arrowRight = document.querySelector(".arrow-right")


arrowLeft.addEventListener("click", () => {
    let indexNum = 0

    displayText.forEach((item, index, array) => {

        if (item.classList.contains('selected-budget')) {
            indexNum = index
        }

    })
    if (indexNum === 0) {
        indexNum = displayText.length - 1
    } else {
        indexNum--
    }

    let selectedBudget = document.querySelector('.selected-budget')
    selectedBudget.classList.remove('selected-budget')

    displayText[indexNum].classList.add('selected-budget')

    changeFPS()
})

arrowRight.addEventListener("click", () => {
    let indexNum = 0

    displayText.forEach((item, index, array) => {

        if (item.classList.contains('selected-budget')) {
            indexNum = index
        }

    })
    if (indexNum === displayText.length - 1) {
        indexNum = 0
    } else {
        indexNum++
    }

    let selectedBudget = document.querySelector('.selected-budget')
    selectedBudget.classList.remove('selected-budget')

    displayText[indexNum].classList.add('selected-budget')

    changeFPS()
})


let buildBtn = document.querySelector('.build-button')


buildBtn.addEventListener('click', ()=> {
    arrayToUse.forEach((v, i, a) => {
        let selectedReso = document.querySelector('.selected-btn').getAttribute('data-value')
        let selectedChip = document.querySelector('.selected-btn-chipset').getAttribute('data-value')
        let selectedBudget = document.querySelector('.selected-budget').getAttribute('data-value')

        if (v.resolution === selectedReso && v.chipset === selectedChip && v.budget === selectedBudget) {
            let image = v.image;
            let url = `build_page/build_page.html?reso=${selectedReso}&chipset=${selectedChip}&budget=${selectedBudget}&image=${v.image}`;
            window.open(url, '_blank')
        }
    })
   
}) 