class Formatter {
  //add static methods here
  
  static capitalize(s){
    return s.charAt(0).toUpperCase()+s.slice(1)
  }
  static sanitize(s){
    return s.replace(/[^A-Za-z0-9 '-]/g, '')
  }
  
  static titleize(s){
    let ex=["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let words = s.split(" ")
    words.forEach((word,index)=>{
      if(index==0)
      word = Formatter.capitalize(word)
      if(!ex.includes(word))
      word = Formatter.capitalize(word)
    })
    return words.join( " " );
  }
}