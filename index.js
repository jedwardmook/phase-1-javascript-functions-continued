// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

const mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}
mondayWork();

function wrapAdjective(para1 = "*") {
    return function(para2= "special"){
        return `You are ${para1}${para2}${para1}!`
    }
}

wrapAdjective("%")("a dedicated programmer");


