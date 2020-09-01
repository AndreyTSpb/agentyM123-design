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
                console.log("month: " +month+ " id_abon: " +id_abon);
                check_chekbox_abon(month, id_abon, step);
            }
        });
    });

    function check_chekbox_abon(month, id_abon, step){
        active_next_month(month, id_abon, step);
    }

    function active_next_month(month, id_abon, step){
        let new_step = +step+1,
            next_month = document.querySelector("#month_"+id_abon+"_"+new_step);
        next_month.classList.add('active');
    }
});