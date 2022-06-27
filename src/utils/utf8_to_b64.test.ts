import utf8_to_b64 from "./urf8_to_b64";

describe('urf8_to_b64', () => {

  it('must have the given value', () => {
    expect(utf8_to_b64('some:value')).toEqual('c29tZTp2YWx1ZQ==')
    expect(utf8_to_b64('abobus:amogus')).toEqual('YWJvYnVzOmFtb2d1cw==')
    expect(utf8_to_b64('chechemus:olegsander')).toEqual('Y2hlY2hlbXVzOm9sZWdzYW5kZXI=')
  })

})