const blockObserver = new IntersectionObserver((entries) => {
    console.log(entries[0])
    if (entries[0].isIntersecting) {
        console.log(entries[0].target.style)
        document.querySelector(".block-3").classList.add("block-3_active")
    } else {
        document.querySelector(".block-3").classList.remove("block-3_active")
    }
}, {
    // threshold: 0.25
})

blockObserver.observe(document.querySelector(".block-3"))