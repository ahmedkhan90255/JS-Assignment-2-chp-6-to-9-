var inputSub1 = prompt ("Enter First Subject")
var inputSub2 = prompt ("Enter Second Subject")
var inputSub3 = prompt ("Enter Third Subject")
var overallMarksSubject

var enterMarks = "Enter Your Marks"
var sub1 = +prompt (enterMarks)
var sub2 = +prompt (enterMarks)
var sub3 = +prompt (enterMarks)

var subject1 = sub1 
var subject2 = sub2 
var subject3 = sub3 

var totalMarks = 100
var overallMarks = 300

var resultSub1 = sub1 / totalMarks * 100
var resultSub2 = sub2 / totalMarks * 100
var resultSub3 = sub3 / totalMarks * 100
var obtainedMarks = subject1 + subject2 + subject3
var resultOverall = obtainedMarks / overallMarks * 100
 



document.write ("<h1>Subjects  Total Marks  Obtained Marks    Result</h1><br>" + "<p>" + inputSub1 + "  " + totalMarks + "  "  + sub1 + "  "  + resultSub1 + "% </p> <br>")
document.write ("<p>" + inputSub2 + "  " + totalMarks + "  " + sub2 + "  " + resultSub2 + "% </p> <br>")
document.write ("<p>" + inputSub3 + "  " + totalMarks + "  " + sub3 + "  " + resultSub3 + "% </p> <br>")
document.write ("<p>" + overallMarks + "  " + obtainedMarks + "  " + resultOverall + "% </p> <br>")
