window.onload = function() {
    const moon = document.querySelector('.moon')
    const sun = document.querySelector('.sun')
    const switchArea = document.getElementsByClassName('switch-area')
    const wrapper = document.querySelector('.wrapper')
    const articlesWrappers = document.getElementsByClassName('article-wrapper')
    Array.prototype.forEach.call(switchArea, function(area) {
        area.addEventListener('click', function(e) {
            if (e.target.parentElement.parentElement === sun ||e.target === sun) {
                sun.classList.toggle('hidden')
                moon.classList.toggle('hidden')
                document.body.classList.add('light-theme-body')
                wrapper.classList.add('light-theme-wrapper')
                Array.prototype.forEach.call(articlesWrappers, function(articleWrapper) {
                    articleWrapper.classList.add('light-theme-article-wrapper')
                })
            } else if (e.target.parentElement.parentElement === moon || e.target === moon) {
                sun.classList.toggle('hidden')
                moon.classList.toggle('hidden')
                document.body.classList.remove('light-theme-body')
                wrapper.classList.remove('light-theme-wrapper')
                Array.prototype.forEach.call(articlesWrappers, function(articleWrapper) {
                    articleWrapper.classList.remove('light-theme-article-wrapper')
                })
            }
        })
    })
    
    
}