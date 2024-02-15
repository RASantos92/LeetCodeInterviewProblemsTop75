const createMatrix = (rows, columns, value) =>{
    return Array.from({ length: rows }, () => Array(columns).fill(value));
}
// https://leetcode.com/problems/zigzag-conversion/submissions/1161424295/
const convert = (s, numRows) => {
    if(numRows === 1) return s
    let output = "";
    let x = 0;
    let y = 0;
    let bounds = 1;s
    let flag = false;
    const matrix = createMatrix(numRows,s.length," ")
    for(let i = 0 ; i<s.length; i++){
        matrix[y][x] = s[i];
        // goal validate which indexs get incremented
        if(bounds === numRows){ 
            flag = true
            y--
            x++
            bounds--
            continue;
        };
        if(bounds < numRows && !flag){
            bounds++
            y++
        }
        if(flag){
            if(bounds === 1) {
                flag = false
                bounds ++;
                y++
                continue
            };
            bounds--
            y--
            x++
        }
    }
    for(let i = 0; i < matrix.length; i++){
        output += matrix[i].filter((e)=>e !==" ").join("")
    }
    return output;
}

console.log(convert("PAYPALISHIRING", 4))

//"PINALSIGYAHRPI"
//PINALSIGYAHRPI


function convert(s, numRows) {
    if (numRows === 1) return s;

    const rows = new Array(numRows).fill("");
    let ptr = 0;
    let direction = -1;

    for (let i = 0; i < s.length; i++) {
        rows[ptr] += s[i];
        
        if (ptr === 0 || ptr === numRows - 1)
            direction = -direction;
        
        ptr += direction;
    }
    return rows.join('');
}