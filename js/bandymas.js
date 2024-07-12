// susirandame count class. 
const count = document.querySelector('.count');
// susirandame input tag'a.
const input = document.querySelector('input');

// keyup - kai mes paspaudziame ir ji atleidziame, tada jis ir suveikia. 
input.addEventListener('keyup', () => {
    const name = input.value;
    console.log(name); 
    count.innerHTML = input.value.length

})