$(document).ready(function(){
    let abons = document.querySelectorAll('.card-abon');
    if(abons == null) return false;
    abons.forEach((e)=>{
        e.addEventListener('click', (item)=>{
            let target = item.target;
            if(!target.classList.contains("pay_month")) return false;
            /**
             * сделать два класса:
             * активный тот за который уже платим(он желтый типа выбрали)
             * wait ожидающий  ( он белый)
             * если щелкнуть на активный он станет в ожидании, а все за ним потеряют класс в ожидании
             * если щелкнуть на ожидающий он станет активным, а следующий в ожидание становится
             */
            if(target.classList.contains("active")){
                let month = target.getAttribute("data-id"),
                    id_abon = target.getAttribute("data-id_abon"),
                    step = target.getAttribute("data-step");
                disable_check_chekbox_abon(month, id_abon, step);
            }else if(target.classList.contains("wait")){
                let month = target.getAttribute("data-id"),
                    id_abon = target.getAttribute("data-id_abon"),
                    step = target.getAttribute("data-step");
                check_chekbox_abon(month, id_abon, step);
            }
        });
    });

    /**
     * Отмечаем чекбоксы которые покупаем
     * @param {*} month 
     * @param {*} id_abon 
     * @param {*} step 
     */
    function check_chekbox_abon(month, id_abon, step){
        active_next_month(month, id_abon, step);
    }

    /**
     * Сбрасываем чекбоксы для отмененных месяцев
     * @param {*} month 
     * @param {*} id_abon 
     * @param {*} step 
     */
    function disable_check_chekbox_abon(month, id_abon, step){
        disactive_this_month(month, id_abon, step);
        search_next_month(month, id_abon, step);
    }

    /**
     * Дезактивируем текущий месяц и все перед ним.
     * @param {*} month 
     * @param {*} id_abon 
     * @param {*} step 
     */
    function disactive_this_month(month, id_abon, step){
        let this_month = document.querySelector("#month_"+id_abon+"_"+step);
        console.log(this_month);

        this_month.classList.remove('active');
        this_month.classList.add("wait");
    }
    /**
     * Активируем следующий месяц
     * @param {*} month 
     * @param {*} id_abon 
     * @param {*} step 
     */
    function active_next_month(month, id_abon, step){
        let new_step = +step+1,
            this_month = document.querySelector("#month_"+id_abon+"_"+step),
            next_month = document.querySelector("#month_"+id_abon+"_"+new_step);
        if(next_month != null){
            next_month.classList.add('wait');
        }
        this_month.classList.add('active');
        this_month.classList.remove('wait');
        
    }
    /**
     * поиск всех месяцев шаг которых больше текущего
     * и снятие статуса активен для заказа
     */
    function search_next_month(month, id_abon, step){
        let new_step = +step+1;
        for(let i=new_step; i<13; i++){
            let month_disable = document.querySelector("#month_"+id_abon+"_"+i);
            if(month_disable != null){
                month_disable.classList.remove('wait');
                month_disable.classList.remove('active');
            } 
        }
    }
});