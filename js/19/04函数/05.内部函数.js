function get1() {
  function get3() {
    console.log("get3...");
  }

  get3();
    
  return function get2() {
    console.log("get2...");
  };
}

let result = get1();

result();
