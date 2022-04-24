var mass_1,error_text ;

function validate(str){
    let mass;
    if (str.length == 31) {
        mass = str.split(" " && "\n");
        for(let i = 0;i<4;i++) {
            mass[i] = mass[i].split(" ");
        }
        for(let j = 1;j < 5;j++) {
            for(let i = 1;i<5;i++) {
                if (mass[j-1][i-1] !=1 && mass[j-1][i-1] !=0) {
                    error_text = "Элемент, находящийся в "+ j + " строке и " + i + " ряду (" + mass[j-1][i-1] + ") не удовлетворяет условию ввода!";
                    return false;
                }
            }
        }
    } else {
        error_text = "Введено некорректное количество элементов!";
        return false}

    return mass;
}

function reflection(mass) {
    if (mass[0][0]== 1 && mass[1][1]== 1 && mass[2][2]== 1 && mass[3][3] == 1) {
        return "Данная матрица рефлексивна, так как главная диагональ заполнена единицами.";
    } else return "Данная матрица не рефлексивна, так как главная диагональ не заполнена единицами."
}

function sym(mass) {
    let log = true;
    for(let j = 0; j < 4;j++) {
        for(let i = 0;i< 4;i++) {
            if(mass[j][i] != mass[i][j]) {
                return "Данная матрица не обладает свойством симметричности, так как матрица смежности не симметрична относительно главной диагонали. "
            }
        }
    }
    return "Данная матрица обладает свойством симметричности, так как матрица смежности симметрична относительно главной диагонали."
}

function sym1(mass) {
    let log = true;
    for(let j = 0; j < 4;j++) {
        for(let i = 0;i< 4;i++) {
            if(i == j) {

            } else{
            if(mass[j][i] == mass[i][j]) {
                return "Данная матрица не обладает свойством кососимметричности, так как матрица смежности не кососимметрична относительно главной диагонали. "
            }
            }
        }
    }
    return "Данная матрица обладает свойством кососимметричности, так как матрица смежности кососимметрична относительно главной диагонали."
}

function tranz(mass) {
    var MultipMass = MultiplyMass(mass_1,mass_1);
    for(let j = 0;j<4;j++) {
        for(let i = 0;i<4;i++) {
            if(mass[j][i] != MultipMass[j][i]) {
                return "Данная матрица не обладает свойством транзитивности, так как она не совпадает с матрицей, полученной умножением на саму себя.";
            }
        }
    }
    return "Данная матрица обладает свойством транзитивности, так как она совпадает с матрицей, полученной умножением на саму себя.";
}

function MultiplyMass(a,b) {
    let c = [];
    for (let i = 0; i < 4; i++) c[i] = [];
    for (let k = 0; k < 4; k++) {
        for (let i = 0; i < 4; i++) {
            let t = 0;
            for (let j = 0; j < 4; j++) {
                t += a[i][j] * b[j][k];
                c[i][k] = t;
            }
        }
        return c;
    }
}

function rasschet() {
    var a = document.getElementById('mass');

    if ((mass_1 = validate(a.value)) == false){
        alert(error_text);
    }
    if (mass_1 != false) {
        result_full = "Рефлексивность: "+ reflection(mass_1) + "\n";
        result_full += "Симметричность: "+ sym(mass_1)+"\n";
        result_full += "Кососимметричность: "+ sym1(mass_1)+"\n";
        result_full += "Транзитивность: "+ tranz(mass_1)+"\n";
    }
    document.getElementById("OutResult").innerText = "Результат выполнения операции: \n" + result_full;
}