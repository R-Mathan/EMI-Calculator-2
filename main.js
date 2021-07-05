// Declaraion

let amt =  $( "#Eamount" );
let smonth =  $( "#s-month" );
let months = ['August','September','October','November','December','January','February','March','April','May','June','July']
$("#trow").hide();
$("#thead").hide();
$("#ptag").hide();



// Submit Button

$("#btn").click(function(){
    let status = parseInt( $('#smonth').val()); //selectBox option

    // Validation

    if(amt.val() === ''){

        alert("Please Enter the Amount");
        $(".month").val("");

    }
    else if(!status){

        alert("Please Select the Months");  
    }
    else{

        if(!$.isNumeric(amt.val())){

            alert("Please Enter the Valid Number in Amount");
            $(".month").val("");
        }
        else if($.isNumeric(amt.val())){

            let status = $('#smonth').val(); //select option
            console.log(status);
            let sno = 1;
            let mon = 0;
            $(tbody).html('');
            $("#ptag").show();

            // Calculation
        
            let percentage = $('#smonth option:selected').data("per");
            console.log(percentage);
            let a = percentage/100;
            let b = a * amt.val();
            let c = parseFloat(b) + parseFloat(amt.val());
            let d = parseFloat(c) / status;
            console.log(d);
            $("#dper").html(`${percentage}%`);

            // Display Result

            for(let i=0;i<status;i++){     
                $("#thead").show();
                let html =  `<tr id="trow"> <td id="sno">${sno=sno++}</td> <td class="mons">${months[mon]}</td><td><input type="text" class="month" class="month" value="${d}"></td></tr>`;
                $(tbody).append(html);
                if (mon==11){
                    mon=0;
                }
                else{
                    mon++;
                }
                sno++;
                console.log('row-count');
            }
        }
    }


});

// Reset Button

$("#reset").click(function() {
    $("#thead").hide();
    $("input").val("");
    $(tbody).html('');
    $(".smonth").val("");
    $("#ptag").hide();


});
