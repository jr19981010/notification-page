


// function read(){
// const dataLists = document.querySelectorAll("ul li");
// dataLists.forEach(list =>{
// let computedStyle =getComputedStyle(list);
// let checkIfRead = document.querySelectorAll(['.comment p.dot']);
// console.log(checkIfRead)
// let dataCount = document.querySelector('[data-count]');
//     if(checkIfRead){
//         dataCount.innerHTML++;
//     }

// list.addEventListener('click', handleClick);

// });
// };

// function handleClick(event){
//    let cell = event.target;
//    console.log(event.target)
//    color = 'rgb(246, 250, 253)';
//    let dataCount = document.querySelector('[data-counts]');
//    let check = getComputedStyle(cell).backgroundColor;
//    console.log(check)
//    if(color===check){
//     dataCount.innerHTML++;
//    }
// }



// read()



function read(){
   const dataLists = document.querySelectorAll("ul li");
    dataLists.forEach(list =>{
        console.log(list)
    })
}
read()

function handleClick(event){
    let cell = event.target
}



function checkStatus() {
    const check = document.querySelectorAll('p span');
    console.log(check, 'checksyatuus');
    let classNamesArray = []
    let count = 0
    check.forEach(span => {
      var classname =  span.getAttribute('class')
      classNamesArray.push(classname)

    })
    for(let i = 0; i < classNamesArray.length; i++){
        if(classNamesArray[i] === 'dot'){
            count++
        }
    }
    document.querySelector('[data-counts]').innerHTML = count

  }
  
  checkStatus();