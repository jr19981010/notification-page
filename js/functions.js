
export function checkStatus() {
    const check = document.querySelectorAll('p span');
    let classNamesArray = [];
    let count = 0;
    check.forEach(span => {
      var classname =  span.getAttribute('class');
      classNamesArray.push(classname);

    });
    for(let i = 0; i < classNamesArray.length; i++){
        if(classNamesArray[i] === 'dot'){
            count++;
        };
    };
    document.querySelector('[data-counts]').innerHTML = count;
  };
  


function handleClick(event){
    let list = event.target;
    console.log(list)
    list.style.display = 'none'
    console.log(getComputedStyle(list).getPropertyValue('display'))
    list.childEle

    document.querySelector(` `)
    
}

export function lists(){
    document.querySelectorAll('.unread').forEach(list =>{
    list.addEventListener('click', handleClick)
  })
}


// export function checkIfGrandChild(){
//     document.querySelectorAll('.comment p span').forEach(span =>{
//         span.target
//         console.log(span.target,'span')
//     })
// }


// export function checkSpan(){
//     document.querySelectorAll('ul li').forEach(list =>{
//     list.addEventListener('click', handleClick)
//   })
// }
