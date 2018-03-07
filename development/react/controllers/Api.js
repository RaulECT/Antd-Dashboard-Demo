class Api {

  login( user, password ) {
    return new Promise( function( resolve, reject ) {
      if ( user == 'user' && password == 'user' ) {
        resolve( true )
      }else {
        reject( false )
      }
    } )
  }
}

module.exports = Api