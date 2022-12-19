let cipher=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// const decipher= (str)=>{
//   let res='';
//   for(let i=0; i<str.length; i++){
//     if(srt[i].includes(cipher[i])){
//       res++

//     }
//   }

// }

const str = 'I love cryptography';
const moveStrBy = (num = 1) => {
   return str => {
      const calcStr = (ch, code) => String
      .fromCharCode(code + (ch.charCodeAt(0) - code + num) % 26);
      const ACode = 'A'.charCodeAt(0);
      const aCode = 'a'.charCodeAt(0);
      return str.replace(/[a-z]/gi, ch => (
         ch.toLowerCase() == ch
         ? calcStr(ch, aCode)
         : calcStr(ch, ACode)
      ));
   };
};
const moveByTen = moveStrBy();
console.log(moveByTen(str));