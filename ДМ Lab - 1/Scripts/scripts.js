/*
*   Объявление глобальных переменных
*/
var mass_1, mass_2, error_text;
/*
*   Проверка введенных массивов на корректность ввода
*/
function validate(str) {
    let mass = false;
    if (str.length > 0) {
        mass = str.split(" ")
        for (let i = 0;i<mass.length;i++) {
            if (mass[i][0]<'a' || mass[i][0]>'z' || mass[i][1] >'9' || mass[i][2] % 2 == 1 || mass[i][3]<'a' || mass[i][3]>'z') {
                error_text = 'Ошибка при вводе массива '+str+' в элементе '+mass[i];
                mass = false;
                break;
            }
            for (let i = 0;i<mass.length;i++) {
                if (countElement(mass,mass[i]) > 1)
                    mass.splice(i,1);

            }
        }
    }
    else
        error_text = 'Массив не должен быть пустым';
    return mass;
}
/*
*   Удаление повторяющихся элементов
*/
function countElement(mass,element) {
    let count = 0;
    for(let i = 0; i < mass.length;i++) {
        if(mass[i] == element) {
            count++;
        }
    }
    return count;
}
/*
*   Нахождение пересечения
*/
function intersection(m1,m2) {
    let  result_2 = "";
    for(let j = 0;j<m2.length;j++) {
        for (let i = 0; i < m1.length; i++) {
            if (m1[i] == m2[j]) {
                result_2 +=m1[i] + " ";
            }
        }
    }
    return result_2;
}
/*
*   Нахождение симметрической разности
*/
function symdif(m1,m2) {
    let result_4 = "";

    let log = 0;
    const gap = [].concat(m1, m2);
    for(let j = 0;j<gap.length;j++) {
        for (let i = 0; i < gap.length; i++) {
            if (gap[j] == gap[i]) {
                log++;
            }
        }
        if (log==1) {
            result_4 += gap[j] + " ";
        }
        log = 0;
    }
    return result_4;
}
/*
*   Объединение массива
*/
function unification(m1,m2) {
    let result = "";
    result = m1.join(' ');

    for(let i=0;i<m1.length;i++)
        if(m1.indexOf(m2[i]) == -1){
            if(m2[i] != undefined) {
                result += " " + m2[i];
            }
        }
    return result;
}
/*
*   Дополнение A/B
*/
function comp(m1,m2) {
    let result_3 = "";
    let log2 = 0;
    for(let j = 0;j<m1.length;j++) {
        for (let i = 0; i < m2.length; i++) {
            if (m1[j] == m2[i]) {
                log2++;
            }
        }
        if (log2==0) {
            result_3 += m1[j] + " ";
        }
        log2 = 0;
    }
    return result_3;
}
/*
*   Дополнение B/A
*/
function comp2(m1,m2) {
    let result_3 = "";
    let log2 = 0;
    for(let j = 0;j<m2.length;j++) {
        for (let i = 0; i < m1.length; i++) {
            if (m2[j] == m1[i]) {
                log2++;
            }
        }
        if (log2==0) {
            result_3 += m2[j] + " ";
        }
        log2 = 0;
    }
    return result_3;
}
/*
*   Главная функция, с помощью которой используются другие функции
*/
function rasschet() {

    var a = document.getElementById('mass1')
    var b = document.getElementById('mass2')

    if((mass_1=validate(a.value)) == false){
        alert(error_text);
    }

    if((mass_2=validate(b.value)) == false){
        alert(error_text);
    }

    if(mass_1 != false && mass_2 != false) {
        result_full = "Объединение массивов: "+ unification(mass_1,mass_2) + "\n";
        result_full += "Пересечение массивов: "+ intersection(mass_1,mass_2) + "\n";
        result_full += "Симметрическая разность массивов: "+ symdif(mass_1,mass_2) + "\n";
        result_full += "Дополнение A/B: "+ comp(mass_1,mass_2) + "\n";
        result_full += "Дополнение A/B: "+ comp2(mass_1,mass_2) + "\n";
    }
    document.getElementById("OutResult").innerText = "Результат выполнения операции: \n" + result_full;
}
