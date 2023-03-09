const blockObserver = new IntersectionObserver((entries) => {
    console.log(entries);
}, {
    // threshold: 1.0 
})

blockObserver.observe(document.querySelector(".block-4"))