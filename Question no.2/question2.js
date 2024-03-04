a = 2
b = 1
console.log ( --a)
console.log (--a - --b)
console.log (--a - --b + ++b)
console.log (--a - --b + ++b + b--)

document.write (
    "<h1>What will be the output in variables a, b & result after <br> execution of the following script:<br> var a = 2, b = 1;<br> var result = --a - --b + ++b + b--;<br> Explain the output at each stage:<br> --a;<br> --a - --b;<br> --a - --b + ++b;<br>--a - --b + ++b + b--;</h1>"
)
document.write (
    "<h2>Ans:</h2> <strong>a is: 2</strong> <br><strong>b is: 1</strong> <br><strong> result is: -1</strong>"
)
