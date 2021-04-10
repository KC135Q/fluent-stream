export default class IpList {
  // private DottedDecimal:{ [index:string] : {message: string} } = {};
  private DottedDecimal: {
    [index: string]: { [index: string]: { [index: string] :
      { message: string }}}} = {};

  private max: number = 255;

  constructor() {
    this.populateIpObject();
  }

  populateIpObject(): void {
    this.nestDottedDecimal(
      Math.floor(Math.random() * this.max).toString(10),
      Math.floor(Math.random() * this.max).toString(10),
      Math.floor(Math.random() * this.max).toString(10),
      Math.floor(Math.random() * this.max).toString(10)
    );
  }

  nestDottedDecimal(one: string, two: string, three: string, four: string) {
    console.log(one, two, three, four);
    this.DottedDecimal[one][two][three].message = four;


    // Object.keys(otherObj).forEach(key =>
    //   dictionary[key] = otherObj[key]);
    // // no error even if key doesn't exist
    // console.log(dictionary.f);
  }

  tellAboutSelf() {
    console.log(this);
  }

  getBlockedIps() {
    return this.DottedDecimal;
  }
}
