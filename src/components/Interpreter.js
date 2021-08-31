
const Interpreter = (codeData) => {
    let { code, stack, pointer, input, output } = codeData;
    let loopPoints = [];

    stack.fill(0);

    pointer = 0;

    output = "";

    const getInput  = () => {
        let value = 0;

        if (input) {
            value = input.charCodeAt(0);
            input = input.substring(1);
        }
    
        return value;
    };

    const setOutput = (value) => {
        output += String.fromCharCode(value);
    };

    for (var i= 0; i < code.length; i++) {
        let char = code.charAt(i);

        switch(char) {
          case '>':
            pointer = Math.min(pointer+1, stack.length);
            break;
          case '<':
            pointer = Math.max(pointer-1, 0);
            break;
          case '+':
            stack[pointer]++;
            break;
          case '-':
            stack[pointer]--;
            break;
          case '[':
            if (stack[pointer]) {
                loopPoints.push(i);
            }
            else {
                // Find closing bracket
                let count = 0;
                while (true) {
                    i++;
                    if (!code.charAt(i)) break;
                    if (code.charAt(i) === '[') count++;
                    else if (code.charAt(i) === ']') {
                        if (count) count--;
                        else break;
                    }
                }
            }

            break;
          case ']':
            if (loopPoints.length > 0) {
                i = loopPoints.pop() - 1;
            }
            break;
          case ',':
            stack[pointer] = getInput();
            break;
          case '.':
            setOutput( stack[pointer] );
            break;
          default:
            // pass
        }
    }

    const returnData = {};
    returnData.code = code;
    returnData.stack = stack;
    returnData.pointer = pointer;
    returnData.input = input;
    returnData.output = output;

    return returnData;
};

export default Interpreter