
let Guest_List :string[] = ['hasnain', 'muslim','raza'] ;

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr,' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')


// }


let absent_Guest :string = 'hasnain' ;

let new_Guest :string = 'raheela naqvi' ;

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr,' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}

console.log(`Mr. ${absent_Guest} is not coming to the party`);

console.log('Good news ! we find table so we re invitig 3 more guests.')

Guest_List.unshift('shah\ad ali naqvi') ;
Guest_List.splice(2, 0 , 'zermina') ;
Guest_List.push('mohsin');

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr,' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}
