let l1 = " ";
let l2 = " ";
let l3 = " ";
let m1 = " ";
let m2 = " ";
let m3 = " ";
let all = "";
let out = new Array();
var line = false;
let count = 0;

document.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        let random;

        do {
            
            random = Math.floor(Math.random() * 90 + 1);
            if (random <= 9) {
                random = " " + random;
            } else {
                random = random.toString();
            }

        } while (out.includes(random));

        out.push(random.toString());
     
        console.log();
        console.log("Ha salido el: " + random);
        console.log();

        if (l1.indexOf(random) !== -1) {
        
            if (random < 10) {
                if (l1.charAt(l1.indexOf(random)+3) != ' ') {
                    l1 = l1.replace(random.toString(), " *");
                }
            } else {
                l1 = l1.replace(random.toString(), " *");
            }

            if (!line) {
                if (l1 == "  *  *  *  *  * ") {
                    console.log("¡Linea para el jugador!");
                    console.log();
                    line = true;
                }
            }

        }

        if (l2.indexOf(random) !== -1) {
            ;
            if (random < 10) {
                if (l2.charAt(l2.indexOf(random)+3) != ' ') {
                    l2 = l2.replace(random.toString(), " *");
                }
            } else {
                l2 = l2.replace(random.toString(), " *");
            }

            if (!line) {
                if (l2 == "  *  *  *  *  * ") {
                    console.log("¡Linea para el jugador!");
                    console.log();
                    line = true;
                }
            }
        }

        if (l3.indexOf(random) !== -1) {
            
            if (random < 10) {
                if (l3.charAt(l3.indexOf(random)+3) != ' ') {
                    l3 = l3.replace(random.toString(), " *");
                }
            } else {
                l3 = l3.replace(random.toString(), " *");
            }

            if (!line) {
                if (l3 == "  *  *  *  *  * ") {
                    console.log("¡Linea para el jugador!");
                    console.log();
                    line = true;
                }
            }

        }

        if (m1.indexOf(random) !== -1) {
        
            if (random < 10) {
                if (m1.charAt(m1.indexOf(random)+3) != ' ') {
                    m1 = m1.replace(random.toString(), " *");
                }
            } else {
                m1 = m1.replace(random.toString(), " *");
            }

            if (!line) {
                if (m1 == "  *  *  *  *  * ") {
                    console.log("¡Linea para la máquina!");
                    console.log();
                    line = true;
                }
            }

        }

        if (m2.indexOf(random) !== -1) {
            ;
            if (random < 10) {
                if (m2.charAt(m2.indexOf(random)+3) != ' ') {
                    m2 = m2.replace(random.toString(), " *");
                }
            } else {
                m2 = m2.replace(random.toString(), " *");
            }

            if (!line) {
                if (m2 == "  *  *  *  *  * ") {
                    console.log("¡Linea para la máquina!");
                    console.log();
                    line = true;
                }
            }
        }

        if (m3.indexOf(random) !== -1) {
            
            if (random < 10) {
                if (m3.charAt(m3.indexOf(random)+3) != ' ') {
                    m3 = m3.replace(random.toString(), " *");
                }
            } else {
                m3 = m3.replace(random.toString(), " *");
            }

            if (!line) {
                if (m3 == "  *  *  *  *  * ") {
                    console.log("¡Linea para la máquina!");
                    console.log();
                    line = true;
                }
            }

        }

        if (l1 == "  *  *  *  *  * " && l2 == "  *  *  *  *  * " && l3 == "  *  *  *  *  * ") {
            console.log("¡Bingo para el jugador!");
            console.log();
        } else if (l1 == "  *  *  *  *  * " && l2 == "  *  *  *  *  * " && l3 == "  *  *  *  *  * ") {
            console.log("¡Bingo para la máquina!");
            console.log()
        }

        console.log("Cartón del Jugador");
        console.log(l1);
        console.log(l2);
        console.log(l3);
        console.log();
        console.log("Cartón de la Máquina");
        console.log(m1);
        console.log(m2);
        console.log(m3);
        console.log();
        console.log("Total de números: " + out);

    }
});

while (count < 15) {
    let random;
    do {
        random = Math.floor(Math.random() * 90 + 1);
        if (random <= 9) {
            random = " " + random.toString();
        } else {
            random = random.toString();
        }
    } while (all.indexOf(random) !== -1);

    all += random + " ";

    if (count < 5) {
        l1 += random + " ";
    } else if (count >= 5 && count < 10) {
        l2 += random + " ";
    } else if (count >= 10 && count < 15) {
        l3 += random + " ";
    }

    count++;
}

count = 0;
all = " ";

while (count < 15) {
    let random;
    do {
        random = Math.floor(Math.random() * 90 + 1);
        if (random <= 9) {
            random = " " + random.toString();
        } else {
            random = random.toString();
        }
    } while (all.indexOf(random) !== -1);

    all += random + " ";

    if (count < 5) {
        m1 += random + " ";
    } else if (count >= 5 && count < 10) {
        m2 += random + " ";
    } else if (count >= 10 && count < 15) {
        m3 += random + " ";
    }

    count++;
}

console.log("Cartón del Jugador");
console.log(l1);
console.log(l2);
console.log(l3);
console.log();
console.log("Cartón de la Máquina");
console.log(m1);
console.log(m2);
console.log(m3);