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
    words.forEach(word=>{
      if(!ex.includes(word))
      return Formatter.capitalize(word)
    })
    return words.join( " " );
  }
}