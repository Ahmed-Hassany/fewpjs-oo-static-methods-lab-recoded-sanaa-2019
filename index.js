class Formatter {
  //add static methods here
  
  static capitalize(s){
    return s.charAt(0).toUpperCase()+s.slice(1)
  }
  static sanitize(s){
    return s.replace(/[^A-Za-z0-9 '-]/g, '')
  }
  class Formatter {
  //add static methods here
  
  static capitalize(s){
    return s.charAt(0).toUpperCase()+s.slice(1)
  }
  static sanitize(s){
console.log("hi")
    return s.replace(/[^A-Za-z0-9 '-]/g, '')
  }
  
  static titleize(s){
    let ex=["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let words = s.split(" ")
    let newS=words.map((word,index)=>{
      if(index==0)
      return this.capitalize(word)
      else if(!ex.includes(word))
      return this.capitalize(word)
else
return word
    })
    return newS.join( " " );
  }
}
}