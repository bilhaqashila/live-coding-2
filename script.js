//input
// "hello"
// "aabbbcc"

//output 
//{h:1, e:1, l:2, o:1}

function jumlah(text) {
    return text.split("").reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0 ) + 1;
        return curr;
    }, {})
}
let text1 = jumlah("aaaabb")
console.log(text1)   