
document.querySelector('.btn').setAttribute('onclick', 'show()')

function show(){
  const eye = document.querySelector('.normal')
  const eye2 = document.querySelector('#eye')
  const fire = document.querySelector('#modal')

  eye.classList.toggle('show')
  eye2.classList.toggle('show')

  setTimeout(() => {
    fire.style.opacity = '1'
    fire.style.zIndex = '2'

    setTimeout(() => {
        fire.style.opacity = '0'
        fire.style.zIndex = '-1'

        setTimeout(() => {
            eye.classList.toggle('show')
            eye2.classList.toggle('show')
        }, 2000);

      }, 3000);

  }, 3000);





}