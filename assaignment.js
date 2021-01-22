// kilometer to meter

function kilometerToMeter(kilometer) {
    if (kilometer<=-1) {
      return("kilometer cannot be negative")
      
    }
    var result=1000*kilometer
    return result
    
  }
  
  
    // find the largest array
  
  function megaFriend(arr) {
    if (arr==null) {
      console.log("array can not be null, please input your array")
      
    }
    var largeWord = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (largeWord.length < arr[i].length) {
        largeWord = arr[i];
      }
    }
    return largeWord;
  }
  
  
  // calculate your budget
  
  function budgetCalculator(watch, phone, laptop) {
    var result=(watch*50 +phone*100+ laptop*500)
    return result;
    
  }
  
  // consumption of your hotel bill
  
  function hotelCost(day) {
    var consumption=0
  if (day<=10) {
     consumption = day*100
   
  } else if(day<=20) {
    var firstTenDays = 10*100
    var remainingDay = day-10
    var secondTenDays = remainingDay*80
     consumption =firstTenDays+secondTenDays
    
    
  }else{
    var firstTenDays = 10*100
    var secondTenDays = 10*80
    var remainingDay = day-20
    var lastDaysBill = remainingDay*50
    consumption = firstTenDays+secondTenDays+lastDaysBill
    
  
  }
  return consumption;
    
  }
