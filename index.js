class Formatter {
  //add static methods here
  
  static capitalize(s){
    return s.charAt(0).toUpperCase()+s.slice(1)
  }
  static sanitize(s){
    return s.replace(/[^0-9a-zA-Z -']/gi, '')
  }
  
  static titleize(){
    
  }
}