console.log("JS file loaded");

$(document).ready(function () {

    $('#pokeTable').hide();

    //botton click
    $('#get-pokemon').on('click', function () {
        console.log("button clicked");
        //AJAX call to get pokemon list
        $.get("https://pokeapi.co/api/v2/pokemon/", function (data, status) {

            $("#row_data").html("");
            let resultList = data.results;
            resultList.forEach(function (element) {

                //AJAX call to get ability
                $.get(element.url, function (abilitydata, status) {


                    let abilityList = abilitydata.abilities;
                    //creating list to hold names
                    let nameList = [];
                    abilityList.forEach(function (abilityelement) {
                        //pushing name to arraylist
                        nameList.push(abilityelement.ability.name);
                        console.log(nameList);
                    });

                    var url= `<a target="_blank" href='${element.url}'> ${element.url} </a>`;
                    $("#row_data").append(`<tr> <td> ${element.name}</td> 
                    <td> ${url} </td> 
                    <td> ${nameList.join(" , ")}</td>
                    </tr> `);

                });
                $('#pokeTable').show();

            });


        });

    });
});