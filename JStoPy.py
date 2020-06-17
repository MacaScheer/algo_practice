import js2py

f = js2py.eval_js('function isBeautifulString(inputString){let chars=inputString.split("")let charsObject={}for (let i=0;i < chars.length;i++){let char=chars[i] if(charsObject[char]){ charsObject[char]++ } else { charsObject[char]=1 }}return checkNums(charsObject)}')
