
let Guest_List :string[] = ['hasnain', 'muslim','raza'] ;

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr,' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')


// }


let absent_Guest :string = 'hasnain' ;

let new_Guest :string = 'raheela naqvi' ;

Guest_List[0] = new_Guest ;

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr,' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }

console.log(`Mr. ${absent_Guest} is not coming to the party`);

console.log('Good news ! we find table so we re invitig 3 more guests.')

// array mai 3 guest add kiye hy.
Guest_List.unshift('shah\ad ali naqvi') ;
Guest_List.splice(2, 0 , 'zermina') ;
Guest_List.push('mohsin');

// yahan per 6guest k array ko print karaya hy.
for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr,' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}

// sorry message to guest for not inviting in party.
console.log('\nsorry we can not arrange big table, only tow peoples will be invited.');

// yahan per mene guest remove kiye hy.
while(Guest_List.length > 2){
let remove_Guest = Guest_List.pop();
console.log(`sorry Mr. ${remove_Guest}, you are not invited for dinner.`);

}

// hamare bacy hus 2 invited guest.
for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr,' + Guest_List[i] + ',\n\nyou are still invited.\n\nThank you!\n\n')
}
//mene sare guest array ki madad se remove kr diye
Guest_List.splice(0, 2);
console.log(Guest_List);