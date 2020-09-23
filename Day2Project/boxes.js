let variable = 16
while (variable > 0) {
    $('#bodyChild').append('<div class="boxes"></div>');
    variable--;
}

$('#bodyChild').on('click', '.boxes', function() {
    $(this).toggleClass('clickedBoxes');
});