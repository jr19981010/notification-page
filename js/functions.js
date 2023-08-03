
export function settingMarkAsRead(){
  document.querySelector('[data-counts]').textContent === '0' ?
  document.querySelector('[data-mark-reads]').style.cursor = 'pointer' :
  document.querySelector('[data-mark-reads]').style.cursor = 'default'
}

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

export function lists(){
    document.querySelectorAll('li').forEach(list =>{
    list.addEventListener('click', function(){
      const dotELement = list.querySelector('.dot')
      if(dotELement){
        list.style.backgroundColor = 'transparent'
        dotELement.classList.remove('dot')
        checkStatus()
        settingMarkAsRead()
      }
    })
  })
}

function handleClickRead(){
  document.querySelectorAll('li').forEach(list =>{
    const dotELement = list.querySelector('.dot')
    if(dotELement){
    document.querySelector('[data-mark-reads]').style.cursor = 'default'
    list.style.backgroundColor = 'transparent'
    dotELement.classList.remove('dot')
    }
    checkStatus()
  })
}


export function markAllReads(){
  document.querySelector('[data-mark-reads]').addEventListener('click', handleClickRead)
}