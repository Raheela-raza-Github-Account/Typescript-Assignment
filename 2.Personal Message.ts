let personName: string = '';

personName = prompt("what is your name?") || "";

if(personName !== null && personName !== '')(
    alert(`Hello ${personName} Would you like to learn python today?`)
)
else(
    alert('you have to fill your name')
)

