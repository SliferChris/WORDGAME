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
} //END DROP
}); //END DROPPABLE

$("#Ydrop").droppable({
    accept: "#Y",
    drop: function (e, ui) {
        $(this).append(ui.draggable);
    } //END DROP
    }); //END DROPPABLE

    $("#Udrop").droppable({
        accept: "#U",
        drop: function (e, ui) {
            $(this).append(ui.draggable);
        } //END DROP
        }); //END DROPPABLE

$("#Ndrop, #dropN").droppable({
    accept: "#N",
    drop: function (e, ui) {
        $(this).append(ui.draggable);
        ui.draggable.draggable({
            disabled: true
        });
        $(this).droppable("options", "accept", "");
    }//END DROP
}); //END DROPPABLE

$(".Shuffle").on('click', function () {
    location.reload();
})