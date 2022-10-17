document.querySelector('#copy').innerHTML = new Date().getFullYear();
const fade_anim = document.querySelectorAll('.fade-anim')
const right = document.querySelectorAll('.right')
const left = document.querySelectorAll('.left')

const options = {
  threshold : 0.5
}

var fade = new IntersectionObserver((entries, fade)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('fade-in');
      entry.target.classList.remove('fade-out')
    }
    else{
      entry.target.classList.remove('fade-in');
      entry.target.classList.add('fade-out')
    }
  })
}, options)

var move_right = new IntersectionObserver((entries, move_right)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.remove('move-right')
    }
    else{
      entry.target.classList.add('move-right')
    }
  })
}, options)
var move_left = new IntersectionObserver((entries, move_left)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.remove('move-left')
    }
    else{
      entry.target.classList.add('move-left')
    }
  })
}, options)

fade_anim.forEach(element=>{
  fade.observe(element)
})

right.forEach(element=>{
  move_right.observe(element)
})
left.forEach(element=>{
  move_left.observe(element)
})