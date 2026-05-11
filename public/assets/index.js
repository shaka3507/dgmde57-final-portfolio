

document.addEventListener("DOMContentLoaded", () => {
    const dropDownTitleOne = document.getElementById('dropdown-title-1')
    const dropDownTitleTwo = document.getElementById('dropdown-title-2')
    const dropDownTitleThree = document.getElementById('dropdown-title-3')
    const titles = [dropDownTitleOne, dropDownTitleTwo, dropDownTitleThree]
    const sections = document.getElementsByClassName('reflection')

    titles.forEach(el => {
        el.addEventListener('click', () => {
            const sectionIndex = el.id.slice(-1) - 1
            const sectionSelected = sections[sectionIndex]
            if(sectionSelected.className.includes('hide')) {
                sectionSelected.classList.remove('hide')
                sectionSelected.classList.add('show')
                el.style.textDecoration = 'underline';
                el.style.backgroundColor = '#90EE90';
            } else if (sectionSelected.className.includes('show')) {
                sectionSelected.classList.remove('show')
                sectionSelected.classList.add('hide')  
                el.style.textDecoration = 'none'; 
                el.style.backgroundColor = 'white';             
            }
        })
    })
})