let say_numbers = new Map();
let say_double_numbers = new Map();
    
    say_numbers.set('1', 'one')
    .set('2', 'two')
    .set('3', 'three')
    .set('4', 'four')
    .set('5', 'five')
    .set('6', 'six')
    .set('7', 'seven')
    .set('8', 'eight')
    .set('9', 'nine')
    .set('10', 'ten')
    .set('11', 'eleven')
    .set('12', 'twelve');

    say_double_numbers.set('2', 'twen')
    .set('3', 'thir')
    .set('4', 'for')
    .set('5', 'fif')
    .set('6', 'six')
    .set('7', 'seven')
    .set('8', 'eigh')
    .set('9', 'nine');

function single_num(n){
    return say_numbers.get(String(n));
}

function double_num(n){
    if(n === 10){
        return say_numbers.get(String(n));
    }
    if(n === 11){            
        return say_numbers.get(String(n));
    }
    if(n === 12) {
         return say_numbers.get(String(n));
    }
    if(n > 12 && n < 20)
    {
    	if(n == 14)
    	{
    		return "fourteen";
    	}
        return say_double_numbers.get(String(n)[1]) + 'teen';
    }
    if(String(n)[0] === '0')
    {
        return say_double_numbers.get(String(n)[0]) + 'ty';
    }
    if(String(n)[1] === '0')
    {
        return say_double_numbers.get(String(n)[0]) + 'ty';
    }
    return say_double_numbers.get(String(n)[0]) + 'ty ' + single_num(n%10);
}

module.exports = function toReadable (n) {

	if(n === 0)
    {
        return 'zero';
    }
    if(n === 100)
        return 'one hundred';

	var say_end = ['thousand', 'hundred', 'teen', 'ty'];

    if(String(n).length == 1)
    {
        return single_num(n);
    }
    if(String(n).length == 2)
    {
        return double_num(n);
    }
    if(String(n).length == 3)
    {
        if(String(n)[1] === '0')
        {
        	if(String(n)[2] === '0')
        	{
        		return single_num(String(n)[0]) + ' hundred';
        	}
            return single_num(String(n)[0]) + ' hundred ' + single_num(String(n)[2]);
        }
        return single_num(String(n)[0]) + ' hundred ' + double_num(Math.floor(n%100));
    }
  
}
