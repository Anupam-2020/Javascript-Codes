let image = document.getElementsByTagName("IMG")[0];
let like = document.getElementsByTagName("i")[0];

image.addEventListener('dblclick', function(e) {
    console.log(like);
    like.style.transform = 'scale(4)';
    like.style.opacity = 0.9;

    setTimeout(() => {
        like.style.transform = 'scale(0)';
        like.style.opacity = 0;
    },600)
}, false)

