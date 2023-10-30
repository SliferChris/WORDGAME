let score = 0;
const letterArray = ["S", "U", "N", "N", "Y"];
//sorts the array randomly each time
//shuffle button is clicked
letterArray.sort(function (a, b) {
    return 0.5 - Math.random()
});

//returns an HTML collection(like an array)
const letters = document.getElementsByClassName('ltrs');

//loop over returned elements 
for (let i = 0; i < letters.length; i++) {
    //set the letters on the page to display the letters 
    //in the array each time it's shuffled
    letters[i].innerText = letterArray[i];
    //set the ID of each element to be the same as the letter
    $(letters[i]).attr("id", letterArray[i]);
} //END LOOP

$(".ltrs").draggable({
    revert: "invalid",
    helper: "clone",
    containment: "#gameborder",
}); //END DRAGGABLE

$("#Sdrop").droppable({
accept: "#S",
drop: function (e, ui) {
    $(this).append(ui.draggable);

    score++;
    $("#score").text(score);

    if (score === "1") {
        $("#message").text("Wow you were way off! Only one letter matched!");
    }

} //END DROP
}); //END DROPPABLE

$("#Ydrop").droppable({
    accept: "#Y",
    drop: function (e, ui) {
        $(this).append(ui.draggable);

        score++;
        $("#score").text(score);

        if (score === "2") {
            $("#message").text("You are getting there! only two letters matched!");
        }

    } //END DROP
    }); //END DROPPABLE

    $("#Udrop").droppable({
        accept: "#U",
        drop: function (e, ui) {
            $(this).append(ui.draggable);
            
        score++;
        $("#score").text(score);

        if (score === "3") {
            $("#message").text("Not bad! you got three letters to match!");
        }

        } //END DROP
        }); //END DROPPABLE

        $("#Ndrop, #dropN").droppable({
            accept: "#N",
            drop: function (e, ui) {
                $(this).append(ui.draggable);
        
                score++;
                $("#score").text(score);
        
                if (score === 4) {
                    $("#message").text("Amazing! You were so close! You got 4 letters out of the 5 ");
                }
                if (score === 5) {
                    $("#message").text("Congratulations! You formed the word!");
                }
        
                ui.draggable.draggable({
                    revert: "invalid",  // Revert back if not dropped in a valid droppable
                    disabled: false    // Enable dragging again
                });
                $(this).droppable("option", "accept", "");
        
                //END DROP
            }
        }); //END DROPPABLE
        

        
        
        

$(".shuffle").on('click', function () {
    score = 0;
    $("#message").text("");

    letterArray.sort(function (a, b) {
        return 0.5 - Math.random();
    });

    for (let i = 0; i < letters.length; i++) {
        letters[i].innerText = letterArray[i];
        $(letters[i]).attr("id", letterArray[i]);
    }
})