var campos = [
    document.querySelector ('#data'),
    document.querySelector ('#quantidade'),
    document.querySelector ('#valor'),
];

console.log('campos')

document.querySelector ('.form').addEventListener('submit', function (event) {

    event.preventDefault();
    var tbody = document.querySelector('tbody')
    var tr = document.createElement('tr');

    campos.forEach(function (campo) {
        var td = document.createElement('td');
        td.textContent = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    })
    var tdvolumes = document.createElement('td');
    tdvolumes.textContent= campos[1].value = campos[2].value;

    tr.appendChild(tdvolumes);

    tbody.appendChild(tr);
      
    campos[0].value =''
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
});