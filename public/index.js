let navBugFix = document.querySelectorAll('.nav')
navBugFix.forEach(element => {
    element.addEventListener('click', () => {
        let bookUi = document.querySelector('#book-ui')
        setTimeout(() => {
            bookUi.style.display = 'none'
        }, 900)
        setTimeout(() => {
            bookUi.style.display = 'flex'
        }, 4000)

    })
})

let mainForm = document.querySelector('#mainForm')
mainForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var formData = new FormData(this); // 'this' refers to the form itself

    fetch(this.action, {
        method: this.method,
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            alert("Done!")
            // Optionally, you can handle the response here, such as displaying a success message
        })
        .catch(error => {
            console.error('Error uploading image:', error);
            // Optionally, you can handle the error here, such as displaying an error message
        });
});

let button = document.querySelector('#button')

//This is for the animations of the hovering in the navigation
let nav = document.querySelectorAll('.nav')
nav.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.background = 'rgba(255, 255, 255, 0.50)'

    });

    item.addEventListener('mouseleave', () => {
        // Restore the original styles on mouse leave
        item.style.backgroundColor = '';
        item.style.color = '';
    });
});

//1st animations
button.addEventListener('click', (e) => {
    e.preventDefault()

    //para hindi na ma click ng user, pag napindot na ng isang beses
    let template2 = document.querySelector('#template2')
    template2.style.display = 'flex'
    //para hindi na ma click ng user, pag napindot na ng isang beses

    let button = document.querySelector('#button')

    setTimeout(() => {
        button.style.borderRadius = '0'
    }, 500)

    button.style.backgroundImage = "url('https://i0.wp.com/therefinedgeek.com.au/wp-content/uploads/2016/12/The-Last-Guardian-Review-Screenshot-Wallpaper-Title-Screen.jpg?ssl=1')";
    button.style.backgroundSize = 'cover'
    button.style.backgroundPosition = 'center'


    button.style.width = '100vw'
    button.style.height = '100vh'

    setTimeout(() => {
        //book ui showing in the front
        let bookui = document.querySelector('#book-ui')
        bookui.style.display = "flex"
        bookui.style.opacity = 0
        setTimeout(() => {
            bookui.style.opacity = 0.8
            bookui.style.zIndex = 3

            button.style.animation = 'none'
        }, 1000)
    }, 1000)


})

//animations if memory is selected
const btnMemory = document.querySelector('#btnMemory')
btnMemory.addEventListener('click', (e) => {
    e.preventDefault()

    child2()


    let btn1 = document.querySelector('#btnMemory')
    btn1.style.background = 'rgba(255, 255, 255, 0.4)'
    btn1.style.boxShadow = ' 0 4px 30px rgba(0, 0, 0, 0.1)'
    btn1.style.backdropFilter = 'blur(5px)'
    btn1.style.webkitBackdropFilter = "blur(5px)";

    let btn2 = document.querySelector('#btnSaveMemory')
    btn2.style.backgroundColor = 'transparent'
    btn2.style.backgroundImage = ''

    let btn3 = document.querySelector('#btnDeleteMemory')
    btn3.style.backgroundColor = 'transparent'
    btn3.style.backgroundImage = ''

    setTimeout(() => {
        memoryClick()
        memoryCon()

    }, 900)
})
let memoryClick = () => {

    setTimeout(() => {
        //pull the animations upward first then do the rest of the animation
        button.style.bottom = '200%'

    }, 10)


    let gapper = document.createElement('div')
    gapper.classList.add('template-memory1')

    let maintemp = document.querySelector('#mainTemplate')
    maintemp.appendChild(gapper)

    document.querySelector('#button').style.bottom = '0'

    setTimeout(() => {
        gapper.style.top = '0'

        let img = document.createElement('img')
        img.src = 'https://firebasestorage.googleapis.com/v0/b/imgtourl-d501f.appspot.com/o/Frontend%20Assets%2Fpage3%20para2.png?alt=media&token=66517f32-0c84-4fed-b8fb-9f6298ff70de'  // image to sa left side
        img.style.width = '100%'
        img.style.height = '100%'
        img.style.position = 'absolute'
        img.style.left = '-100%'
        img.style.transition = '1s'


        let img2 = document.createElement('img')
        img2.src = 'https://firebasestorage.googleapis.com/v0/b/imgtourl-d501f.appspot.com/o/Frontend%20Assets%2Fpage3%20para3.png?alt=media&token=5149c5b5-aac3-4450-8012-5f608b9effab'  // image to sa right side
        img2.style.width = '100%'
        img2.style.height = '100%'
        img2.style.position = 'absolute'
        img2.style.bottom = '-100%'
        img2.style.transition = '1s'

        gapper.appendChild(img)
        gapper.appendChild(img2)

        setTimeout(() => {
            img.style.left = '0'
            img2.style.bottom = '0'
        }, 1000)
    }, 1000)

}
//the container for MEMORY backend stuffs
let memoryCon = () => {
    let template2 = document.querySelector('#template2')


    /*removing the SAVE MEMORY from MEMORY CON*/
    let remove = template2.querySelectorAll('.saveMemoryCon')
    remove.forEach(element => {
        element.style.opacity = '0'
    })

    let remove2 = template2.querySelector('#galleryBtnContainer')
    remove2.style.opacity = '0'

    let remove3 = template2.querySelectorAll('.infoMemory')
    remove3.forEach(element => {
        element.style.opacity = '0'
    })

    setTimeout(() => {
        remove.forEach(element => {
            element.parentNode.removeChild(element);
        });
        remove3.forEach(element => {
            element.parentNode.removeChild(element);
        });
    }, 2000)



    // let test = document.createElement('div')
    // test.classList.add('MemoryConInside')


    // //ITO YUNG TEMPLATE SA LOOB NG SAVE MEMORY CON

    let div = document.createElement('div')
    div.classList.add('MemoryCon')



    // div.appendChild(test)// nilagay muna sa loob ng div yung test, tapos nilagay na yung div sa loob ng template


    template2.appendChild(div)

    let addPhotoContainer = document.querySelector('#addPhotoContainer')

    setTimeout(() => {

        div.style.opacity = '1'
        addPhotoContainer.style.opacity = '1'
    }, 3000)

    template2.appendChild(div)
}

//animations if save memory is selected
const btnSaveMemory = document.querySelector('#btnSaveMemory')
btnSaveMemory.addEventListener('click', (e) => {
    e.preventDefault()

    child2()


    let btn1 = document.querySelector('#btnMemory')
    btn1.style.backgroundColor = 'transparent'
    btn1.style.backgroundImage = ''

    let btn2 = document.querySelector('#btnSaveMemory')
    btn2.style.background = 'rgba(255, 255, 255, 0.4)'
    btn2.style.boxShadow = ' 0 4px 30px rgba(0, 0, 0, 0.1)'
    btn2.style.backdropFilter = 'blur(5px)'
    btn2.style.webkitBackdropFilter = "blur(5px)";

    let btn3 = document.querySelector('#btnDeleteMemory')
    btn3.style.backgroundColor = 'transparent'
    btn3.style.backgroundImage = ''

    setTimeout(() => {
        saveMemoryClick()
        saveMemoryCon()
    }, 900)


})
let saveMemoryClick = () => {

    setTimeout(() => {
        //pull the animations upward first then do the rest of the animation
        button.style.bottom = '200%'
    }, 10)



    let gapper = document.createElement('div')
    gapper.classList.add('template-memory2')

    let maintemp = document.querySelector('#mainTemplate')
    maintemp.appendChild(gapper)

    document.querySelector('#button').style.bottom = '0'

    setTimeout(() => {
        gapper.style.top = '0'

        let img = document.createElement('img')
        img.src = 'https://firebasestorage.googleapis.com/v0/b/imgtourl-d501f.appspot.com/o/Frontend%20Assets%2Fpage5%20para1.png?alt=media&token=1959cc97-a36f-4351-abe0-47e7593df200'
        img.style.width = '100%'
        img.style.height = '100%'
        img.style.position = 'absolute'
        img.style.left = '-100%'
        img.style.transition = '1s'

        gapper.appendChild(img)
        setTimeout(() => {
            img.style.left = '0'
        }, 1000)
    }, 1000)
}
//the container for SAVEMEMORY backend stuffs //                  ---------------- Dito nakalagay yung mga pictures for the backend!
let saveMemoryCon = async () => {

    let BiggerScope // ito na yung gagamitin nating indicator, sa labas ng scope ng fetchTest

    let fetchTest = async () => {
        try {
            // const res = await fetch('http://localhost:7000/api');
            const res = await fetch('https://project5-backend.onrender.com/api');
            if (!res.ok) throw new Error('Invalid');
            const data = await res.json();
            const values = Object.values(data);
            BiggerScope = values;
        } catch (error) {
            console.warn(error);

        }
    }

    await fetchTest()

    let template2 = document.querySelector('#template2')

    /*removing the memoryCon from SaveMemory*/
    let remove = template2.querySelectorAll('.MemoryCon')
    remove.forEach(element => {
        element.style.opacity = '0'
    })

    let remove3 = template2.querySelectorAll('.infoMemory')
    remove3.forEach(element => {
        element.style.opacity = '0'
    })

    let remove4 = template2.querySelector('#addPhotoContainer')
    remove4.style.opacity = '0'

    setTimeout(() => {
        remove.forEach(element => {
            element.parentNode.removeChild(element);
        });

        remove3.forEach(element => {
            element.parentNode.removeChild(element);
        });
    }, 2000)

    setTimeout(() => {


        let div = document.createElement('div')
        div.classList.add('saveMemoryCon')



        div.appendChild(test)// nilagay muna sa loob ng div yung test, tapos nilagay na yung div sa loob ng template



        template2.appendChild(div)

        let galleryBtnContainer = document.querySelector('#galleryBtnContainer') // ito sa buttons sa loob

        setTimeout(() => {
            div.style.opacity = '1'
            galleryBtnContainer.style.opacity = '1' // ito para sa mga buttons sa loob
        }, 3000)

        template2.appendChild(div)
    }, 100)

    //ITO YUNG TEMPLATE SA LOOB NG SAVE MEMORY CON
    let test = document.createElement('div')
    test.classList.add('saveMemoryConInside')
    test.style.display = 'flex'
    test.style.alignItems = 'center'
    test.style.justifyContent = 'center'


    let imgCon = document.createElement('img')
    imgCon.style.width = '80%'
    imgCon.style.height = '90%'
    imgCon.style.backgroundColor = 'red'
    imgCon.style.position = 'absolute'
    imgCon.style.top = '5%'
    imgCon.style.left = '50%'
    imgCon.style.transform = 'translateX(-50%)'

    imgCon.style.display = 'flex'
    imgCon.style.alignItems = 'center'
    imgCon.style.justifyContent = 'center'

    setTimeout(() => {
        if (imgCon.src === '') {

            let p = document.createElement('p')
            p.innerText = 'If the photos aint showing, please wait. It might be because of the server.'
            p.style.fontSize = '20px'

            test.appendChild(p)
            console.log("This app failed to http req to the server")
        } else {
            test.appendChild(imgCon)
        }


    }, 2000)



    //Dito ko lalagay yung logic para magpalit yung image sa loob, gamit yung buttons na ginawa ko
    let indexCounter = 0

    let lengthOfIndex = BiggerScope.length

    imgCon.src = BiggerScope[indexCounter] // Dito sa loob nakalagay yung picture 



    let btnLeft = document.querySelector('#galBtn1')
    let btnRight = document.querySelector('#galBtn2')

    btnLeft.addEventListener('click', () => {
        indexCounter--
        if (indexCounter < 0) {
            indexCounter = 0
        }

        // let saveMemoryConInside = document.querySelector('.saveMemoryConInside');
        // saveMemoryConInside.removeChild(saveMemoryConInside.children[0]);


        let imgCon = document.createElement('img')
        imgCon.style.width = '80%'
        imgCon.style.height = '90%'
        imgCon.style.backgroundColor = 'red'
        imgCon.style.position = 'absolute'
        imgCon.style.top = '5%'
        imgCon.style.left = '50%'
        imgCon.style.transform = 'translateX(-50%)'

        imgCon.src = BiggerScope[indexCounter]
        // console.log(indexCounter)
        test.appendChild(imgCon)
    })

    btnRight.addEventListener('click', () => {
        indexCounter++
        if (indexCounter >= lengthOfIndex) {
            indexCounter = lengthOfIndex - 1; // Set indexCounter to the last index when it exceeds the length
        }

        // let saveMemoryConInside = document.querySelector('.saveMemoryConInside');
        // saveMemoryConInside.removeChild(saveMemoryConInside.children[0]);

        let imgCon = document.createElement('img')
        imgCon.style.width = '80%'
        imgCon.style.height = '90%'
        imgCon.style.backgroundColor = 'red'
        imgCon.style.position = 'absolute'
        imgCon.style.top = '5%'
        imgCon.style.left = '50%'
        imgCon.style.transform = 'translateX(-50%)'

        imgCon.src = BiggerScope[indexCounter]
        // console.log(indexCounter)
        test.appendChild(imgCon)
    })


    //Dito ko lalagay yung logic para magpalit yung image sa loob, gamit yung buttons na ginawa ko






    //ITO YUNG TEMPLATE SA LOOB NG SAVE MEMORY CON


}



//animations if DeleteMemory is selected
const btnDeleteMemory = document.querySelector('#btnDeleteMemory')
btnDeleteMemory.addEventListener('click', (e) => {
    e.preventDefault()

    child2()


    let btn1 = document.querySelector('#btnMemory')
    btn1.style.backgroundColor = 'transparent'
    btn1.style.backgroundImage = ''

    let btn2 = document.querySelector('#btnSaveMemory')
    btn2.style.backgroundColor = 'transparent'
    btn2.style.backgroundImage = ''

    let btn3 = document.querySelector('#btnDeleteMemory')
    btn3.style.background = 'rgba(255, 255, 255, 0.4)'
    btn3.style.boxShadow = ' 0 4px 30px rgba(0, 0, 0, 0.1)'
    btn3.style.backdropFilter = 'blur(5px)'
    btn3.style.webkitBackdropFilter = "blur(5px)";

    setTimeout(() => {
        deleteMemoryClick()
        deleteMemoryCon()
    }, 900)
})
let deleteMemoryClick = () => {

    setTimeout(() => {
        //pull the animations upward first then do the rest of the animation
        button.style.bottom = '200%'
    }, 10)



    let gapper = document.createElement('div')
    gapper.classList.add('template-memory3')

    let maintemp = document.querySelector('#mainTemplate')
    maintemp.appendChild(gapper)

    document.querySelector('#button').style.bottom = '0'

    setTimeout(() => {
        gapper.style.top = '0'

        let img = document.createElement('img')
        img.src = 'https://firebasestorage.googleapis.com/v0/b/imgtourl-d501f.appspot.com/o/Frontend%20Assets%2Fpage4%20para1.png?alt=media&token=4fba4aad-b01f-4230-9e05-372c7b465433'
        img.style.width = '100%'
        img.style.height = '100%'
        img.style.position = 'absolute'
        img.style.bottom = '-100%'
        img.style.transition = '1s'
        gapper.appendChild(img)
        setTimeout(() => {
            img.style.bottom = '0'
        }, 1000)


        let img2 = document.createElement('img')
        img2.src = 'https://firebasestorage.googleapis.com/v0/b/imgtourl-d501f.appspot.com/o/Frontend%20Assets%2Fpage4%20para2.png?alt=media&token=f4aea253-b3da-438c-a812-4dbc594bfa47'
        img2.style.width = '100%'
        img2.style.height = '100%'
        img2.style.position = 'absolute'
        img2.style.bottom = '-100%'
        img2.style.transition = '1s'
        gapper.appendChild(img2)
        setTimeout(() => {
            img2.style.bottom = '0'
        }, 1400)

    }, 1000)
}
let deleteMemoryCon = () => {
    let template2 = document.querySelector('#template2')




    /*removing the memoryCon from SaveMemory*/
    let remove1 = template2.querySelectorAll('.MemoryCon')
    remove1.forEach(element => {
        element.style.opacity = '0'
    })

    let remove2 = template2.querySelectorAll('.saveMemoryCon')
    remove2.forEach(element => {
        element.style.opacity = '0'
    })

    let remove3 = template2.querySelector('#galleryBtnContainer')
    remove3.style.opacity = '0'

    let remove4 = template2.querySelector('#addPhotoContainer')
    remove4.style.opacity = '0'

    setTimeout(() => {
        remove1.forEach(element => {
            element.parentNode.removeChild(element);
        });
        remove2.forEach(element => {
            element.parentNode.removeChild(element);
        });
    }, 1000)

    let div = document.createElement('div')
    div.classList.add('infoMemory')


    let p = document.createElement('p')
    p.style.width='90%'
    p.style.color='white'
    p.style.fontSize='1.5vw'
    p.innerText="Hello guys! I'm the developer of this simple project, James. I made this thing to practice my FRONTEND and BACKEND skills in programming. \n\nIn this point of time I'm 20 and been studying FULLSTACK for 6 months\n\nThis thing took me almost 2 weeks because in this point of time in my life i've been busy alot because of school exams.TECH STACK USED frontend(HTML, CSS, JS) backend(node) deployments(glitch - server for my static website)(render - server for my backend api) and FIREBASE to store image!\n\nI'm really happy that I started this personal project. I hope that my future self will look at this and say 'This thing is easy for me now.'  "

    

    div.appendChild(p)


    // div.appendChild(test)// nilagay muna sa loob ng div yung test, tapos nilagay na yung div sa loob ng template


    template2.appendChild(div)
    setTimeout(() => {
        div.style.opacity = '1'
    }, 3000)

    template2.appendChild(div)
}

let deleteTest = () => {
    let mainTemplate = document.querySelector('#mainTemplate')

    let template2 = document.querySelectorAll('.template-memory2')

    //ITO para idelete lahat ng nakalagay sa saveMemoryConInside, tinatamad na ko eh HAHAHA
    //nag ka bug, ito nalang ginawa ko, so gagawa siya ng bago, instead na idedelete niya yung dating mga laman. Tamad works! 12:28 AM Na!
    let saveMemoryConInside = document.querySelectorAll('.saveMemoryConInside');
    saveMemoryConInside.forEach((element) => {
        element.removeChild(element.children[0]);
    });
    //ITO para idelete lahat ng nakalagay sa saveMemoryConInside, tinatamad na ko eh HAHAHA

    mainTemplate.removeChild(mainTemplate.lastElementChild)
}

let count = 1
let child2 = () => {
    let mainTemplate = document.querySelector('#mainTemplate')

    if (count > 1) {
        if (mainTemplate.children[2]) {
            mainTemplate.children[2].style.transition = '1s'
            mainTemplate.children[2].style.top = '-100%'
        } else {
            console.log('no children')
        }

        setTimeout(() => {
            deleteTest()
        }, 800)



    }
    // console.log(count)// this is the counter! ginawa ko to kasi first click ng user is dapat hindi mawawala yung unang template sa loob
    // , 2nd iteration, dun palang pwede mawala yung mga naka lagay sa loob, it means na every gawa ma dedelete muna yung previous bago yung 
    // bagong assets na nasa loob
    count++

}
