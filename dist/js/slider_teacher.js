window.addEventListener("DOMContentLoaded", function(){
    let slider_teach = document.getElementById('teachers');
    if(!slider_teach) return false;

    let items = slider_teach.querySelectorAll('.item');
    if(items.length < 1) return false;

    console.log(items);
    let indexShow = 1,
        dots = slider_teach.querySelectorAll('.dotes-dote');
    
    show(indexShow);

    function show(index){
        
        /**
         * Проверка на первый и последний слайдер
         */
        if(indexShow > items.length){
            indexShow = 1;
            index = indexShow;
        }
        if(indexShow < 1){
            indexShow = items.length;
            index = indexShow;
        }

        /* Скрываем все слайды */
        hideSlids(items);
        /* Отключаем активную точку */
        hideActionDot(dots);

        /* Показываем конкретный слайд */
        showSlid(index - 1);
        /* Ставим активную точку для него */
        showDotAction(index - 1);
    }

    /**
    * Скрыть все ьлоки слайдеров
    */
    function hideSlids(items){
        items.forEach(item => {
            item.classList.add("hide");
        });
    }
    /**
     * Открываем один слайд
     * @param {*} i 
     */
    function showSlid(i){
        items[i].classList.remove("hide");
    }
    /**
     * Прокрутка слайдера с задержкой sec *1000
     */
    setInterval(()=>{
        show(++indexShow);
    }, 10 * 1000); // устанавливаем интервал перелистывания в милисекундах

    /**
     * Отключить выделение у активной точки
     * @param {*} dots 
     */
    function hideActionDot(dotes){
        dotes.forEach(dote => {
            dote.classList.remove("active");
        });
    }

    function showDotAction(i){
        dots[i].classList.add("active");
    }
});