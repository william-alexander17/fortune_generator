//Generate a random number
let randomNum = Math.floor(Math.random() * 10)

// console.log(randomNum)
//Declare randomMessage variable
let randomMessage;

switch(randomNum) {
    case 0:
        randomMessage = 'An exiting opportunity lies ahead of you';
        break;
    case 1:
        randomMessage = 'A stranger will cross your path who later becomes your friend';
        break;
    case 2: 
        randomMessage = 'A wise person will give you timely advice';
        break;
    case 3:
        randomMessage = 'Love will be found from a past meeting';
        break;
    case 4:
        randomMessage = 'A problem will solve itself this week';
        break;
    case 5:
        randomMessage = 'A long dispute will soon be solved';
        break;
    case 6:
        randomMessage = 'A new friendship will bring unexpected joy';
        break;
    case 7: 
        randomMessage = 'A call today will make you smile';
        break;
    case 8:
        randomMessage = 'Change your horizons if you want to change your luck';
        break;
    case 9: 
        randomMessage = 'A weight will be taken off your mind';
        break;
    default:
        break;
}

console.log(randomMessage)
