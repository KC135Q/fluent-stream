export default class IpList {
  class DottedDecimal {
    [key: string] {
      [key: string] {
        [key: string] {
          [key: string] {
            source: string;
          }
        }
      }
    }
  }
  private min: number = 0;
  private max: number = 255;
  private numIps: number = 20;

  constructor(private name: string = "John Doe", private age: number = 99) {
    this.populateIpObject();
  }

  populateIpObject(): void {
    const startTime = new Date();
    console.log("Starting ...");

    for (let i = 0; i < this.numIps; i++) {
      const one = Math.floor(Math.random() * this.max);
      const two = Math.floor(Math.random() * this.max);
      const three = Math.floor(Math.random() * this.max);
      const four = Math.floor(Math.random() * this.max);
      this.blockedIps[`${one}`][`${two}`][`${three}`][`${four}`].source = 42;
    }

    const endTime = new Date();
    console.log(`Start: ${startTime}, End: ${endTime}`);
  }

  tellAboutSelf() {
    console.log(this);
  }

  getBlockedIps() {
    return this.blockedIps;
  }
}
