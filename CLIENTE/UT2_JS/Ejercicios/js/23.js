function ilimitada(...varios) {
    for (let a of varios) {
        if (typeof a !== "number") {
            console.log("Tienen que ser todos numeros")
            return undefined;
        }
    }

    varios.sort();
    console.log(varios[0]);

}

ilimitada(5, "false", 3, 10);