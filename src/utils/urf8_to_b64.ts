function utf8_to_b64( str: string ) {
  return window.btoa(unescape(encodeURIComponent( str )));
}

export default utf8_to_b64