const modal = document.querySelector('.modal')
const loginBtn = document.querySelector('.login-btn')
const closeBtn = document.querySelector('.close')

openModal = () => {
  modal.style.display = 'block'
}

closeModal = () => {
  modal.style.display = 'none'
}

outsideModal = (e) => {
  if(e.target == modal) {
    closeModal()
  }
}

loginBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideModal)
