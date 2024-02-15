var addBinary = function (a, b) {
    let i = a.length - 1
    let j = b.length - 1
    let carry = 0;
    const stack = [];
    while (i >= 0 && j >= 0) {
        const currentSum = parseInt(a[i]) + parseInt(b[j]) + carry
        i--;
        j--;
        if (currentSum <= 1) {
            carry = 0;
            stack.push(currentSum);
            continue;
        }
        carry = 1
        if (currentSum === 2) {
            stack.push(0)
        }
        if (currentSum === 3) {
            stack.push(1)
        }
    }
    console.log("after first while loop", stack)

    if (i >= 0) {
        while (i >= 0) {
            console.log("here")
            const currentSum = parseInt(a[i]) + carry;
            i--
            console.log(currentSum)
            if (currentSum <= 1) {
                carry = 0;
                stack.push(currentSum);
                continue;
            }
            carry = 1
            if (currentSum === 2) {
                console.log("line 37")
                stack.push(0)
            }
            if (currentSum === 3) {
                stack.push(1)
            }
        }
    }
    if (j >= 0) {
        while (j >= 0) {
            console.log("here")
            const currentSum = parseInt(b[j]) + carry;
            j--
            if (currentSum <= 1) {
                carry = 0;
                stack.push(currentSum);
                continue;
            }
            carry = 1
            if (currentSum === 2) {
                stack.push(0)
            }
            if (currentSum === 3) {
                stack.push(1)
            }
        }
    }

    if (carry === 1) {
        stack.push(carry);
    }

    console.log(stack)
    output = "";
    while (stack.length > 0) {
        output += stack.pop();
    }
    return output;
};

console.log(addBinary("100", "110010"))



var addBinary = function (a, b) {
    var i = a.length - 1;
    var j = b.length - 1;
    var carry = 0;
    var result = '';


    while (i >= 0 || j >= 0) {
        var sum = carry;

        if (i >= 0) {
            sum += parseInt(a[i]);
            i--;
        }

        if (j >= 0) {
            sum += parseInt(b[j]);
            j--;
        }

        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }

    if (carry == 1) {
        result = carry + result
    }
    return result;
}