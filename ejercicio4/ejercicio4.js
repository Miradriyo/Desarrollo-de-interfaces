let opcion = window.prompt ("¿Deseas jugar con Javascript?").toUpperCase();
switch (opcion) {
    case "SI":
        let destino = window.prompt("Elige un destino: Francia, España, Portugal").toLowerCase();
        
        switch (destino) {
            case "francia":
                let ciudad = window.prompt("Paris, Marsella o Lyon?").toLowerCase();
                switch (ciudad) {
                    case "Paris":
                        document.write(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequattempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                            <img src='paris1.jpg'>
                            <img src='paris2.jpg'>
                            <img src='paris3.jpg'>
                        `);
                        break;
                    case "Marsella":
                        document.write(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequattempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                            <img src='marsella1.jpg'>
                            <img src='marsella2.jpg'>
                            <img src='marsella3.jpg'>
                        `);
                    break;
                    case "Lyon":
                        document.write(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequattempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                            <img src='Lyon1.jpg'>
                            <img src='Lyon2.jpg'>
                            <img src='Lyon3.jpg'>
                            `);
                    break;
                    default:
                        break;
                }
            case "españa":
                let tipo = window.prompt("¿Playa o montaña?").toLowerCase();
                switch (tipo) {
                    case "playa":
                        document.write(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequattempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        <img src='playa1.jpg'>
                        <img src='playa2.jpg'>
                        <img src='playa3.jpg'>
                    `);
                        
                        break;
                    case "montaña":
                        document.write(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequattempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    
                            <img src='montaña1.jpg'>
                            <img src='montaña2.jpg'>
                        `);
                    default:
                        break;
                }
            case "portugal":
                let destino_final = window.prompt("turismo,playa o montaña?").toLocaleLowerCase();
                switch (destino_final) {
                    case "turismo":
                        document.write(`<p>Lorem ipsum dolor sit amet, laboris nisi ut aliquip ex ea commodo consequat.</p>
    
                            <img src='lisboa.jpg'>
                        `);
                        
                        break;
                    
                    case "playa":
                        document.write('<img src=algarve.jpg> <img src=algarve2.jpg>');
                    case "montaña":
                        document.write('<img src=nazaret.jpg> <img src=fatima.jpg>');
                    default:
                        break;
                }
            default:
                break;
        }
        
        break;
    
    case "NO":
        document.write("¡¡¡TU TE LO PIERDES!!!")        
    break;
    default:
        break;
}