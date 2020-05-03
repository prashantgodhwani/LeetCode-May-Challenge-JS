var canConstruct = function(ransomNote, magazine) {
  /*******************
   * Initial Solution
   *******************/
  //     let magazineObj={};
  //     for(let i of magazine){
  //         if(magazineObj[i]) ++magazineObj[i];
  //         else magazineObj[i] = 1;
  //     }
  //     for(let i of ransomNote){
  //         if(magazineObj[i] > 0) --magazineObj[i];
  //         else return false;
  //     }

  /*******************
   * Final Solution
   *******************/

  a = ransomNote.split("");
  b = magazine.split("");

  for (let i of a) {
    if (b.indexOf(i) >= 0) b[b.indexOf(i)] = '';
    else return false;
  }

  return true;
};