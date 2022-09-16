# alarm-clock
a time keeping and basic alarm clock project 
# pseudocode
attempting to build a working clock and alarm clock. While building this project i will iterate on the pseudocode as both the scope and my understanding of the project changes
## first iteration (basic understanding)
### setting up clock structure 
1. set up the structure of the page 
<br>
  a. set up basic html page structure
  <br>
  b. create elements (divs) within the body
  <br>
  c. assign ids to the divs for the javascript to target 
  <br>
  d. link the appropriate files together
  <br>
  
### making the clock function with javascript 
<br>
1. GET full Time and DATE (When called as a function, returns a string representation of the current date and time)
<br>
2. SET date to a variable
<br> 
3. DISPLAY the date variable 

## second iteration (first attempt and displaying only time)
<br>
1. GET full time and DATE using the javascript DATE
<br>
2. SET date to a variable
<br>
3. next we need to split the information of the javascript date by getting the individual hours, minutes, and seconds
<br>
  a. GET hours 
  <br>
    i. GET hours from the javascript DATE and then SET = a variable to be able to utilize later
    <br>
  b. GET minutes
  <br>
    ii. GET minutes from the javascript DATE and then SET = a variable to be able to utilize later
    <br>
  c. GET seconds
  <br>
    iii. GET seconds from the javascript DATE and then SET = a variable to be able to utilize later
    <br>
4. READ variables hours, minutes, seconds
<br>
5. DISPLAY hours + minutes + seconds
<br>

## third iteration (live update and setting up a function)
<br>
1. START
<br>
2. SET initial function to encapsulate the following code (liveUpdate) {
<br>
  a. GET new Date
  <br>
    i. SET new Date to variable (currentTime)
    <br>
  b. GET hours
  <br>
    ii. SET hours to variable (hours)
    <br>
  c. GET minutes
  <br>
    iii. SET minutes to a variable (minutes)
    <br>
  d. GET seconds
  <br>
    iv. SET seconds to a variable (seconds)
    <br>
  e. SET new variable (timeComplete) = hours + minutes + seconds 
  <br>
  f. DISPLAY new variable (timeComplete)
  <br>
3. END function }
 <br>
4. INCREMENT the liveUpdate function to run the function every 1 second 
 <br>
5. END
<br>

## final iteration (adding conditionals, alarms, and fixing errors by unifying the structure of how the time is read and displayed)

<br>
1. START
<br> 
2. SET initial function to encapsulate the following code (liveUpdate) {
 <br>
  -a. GET new Date
  <br>
    --i. SET new Date to variable (currentTime)
    <br>
  -b. GET hours
  <br>
    --i. SET hours to variable (hours)
    <br>
      ---IF hours < 10
      <br>
      ---THEN add "0" in front of hours
      <br>
  -c. GET minutes
  <br>
    --i. SET minutes to a variable (minutes)
    <br>
      ---IF minutes < 10
      <br>
      ---THEN add "0" in front of minutes
      <br>
  -d. GET seconds
  <br>
    --i. SET seconds to a variable (seconds)
    <br>
      ---IF seconds < 10
      <br>
      ---THEN add "0" in front of seconds
      <br>
  -e. SET new variable (timeComplete) = hours + minutes + seconds 
  <br>
  -f. DISPLAY new variable (timeComplete)
  <br>
  -g. GET INPUT from alarm selector
  <br>
    --i. SET INPUT to alarm
    <br>
  -h. SET new variable for alarm 
  <br>
    --i. IF alarm === timeComplete
    <br>
    --ii. THEN DISPLAY alarm text
    <br>
  -I. GET button
  <br>
    --i. SET button to clear the alarm
    <br>
3. END function }
 <br>
4. INCREMENT the liveUpdate function to run the function every 1 second 
<br>
5. END

    
    
    
    
    
