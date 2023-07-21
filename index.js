let s = "Tac t Coa".toLowerCase().split('').sort()
let s1 = "tac o cat".toLowerCase().split('').sort()
let s2 = "act o eta".toLowerCase().split('').sort()
let res = ""

// console.log(s1)
// console.log(s2)

for (let i = 0; i < s.length; i++) {
    if (s[i] === s2[i]) {
        res += s2[i]
    }
    else {
        console.log("False Combination")
        return
    }
}
console.log(res, "True Combination")