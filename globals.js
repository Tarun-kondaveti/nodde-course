console.log(__dirname);
console.log(__filename);
 count=1
// require - A fn that is used to use modules
// module - gives information about current module
// process - information about environment where the program is beign executed


// setInterval(()=>{
// console.log(`hello world ${count}`);
// count++
// },1000)
const intervalId = setInterval(() => {
    console.log(`hello world ${count}`);
    count++;
    if (count === 10) {
      clearInterval(intervalId); // Stop the interval when count reaches 10
    }
  }, 1000);